const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

let particles = [];

const mouse = {
    x: null,
    y: null,
    radius: 150
};


// ===============================
// CANVAS
// ===============================

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    createParticles();
}

window.addEventListener("resize", resizeCanvas);


// ===============================
// MOUSE
// ===============================

window.addEventListener("mousemove", (event) => {

    mouse.x = event.clientX;
    mouse.y = event.clientY;

});

window.addEventListener("mouseleave", () => {

    mouse.x = null;
    mouse.y = null;

});


// ===============================
// PARTICLE
// ===============================

class Particle {

    constructor() {

        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.size = Math.random() * 2.2 + 0.6;

        this.speedX =
            (Math.random() - 0.5) * 0.45;

        this.speedY =
            (Math.random() - 0.5) * 0.45;

        this.angle =
            Math.random() * Math.PI * 2;

        this.rotationSpeed =
            (Math.random() - 0.5) * 0.015;

        this.orbitRadius =
            Math.random() * 25 + 10;

        this.baseX = this.x;
        this.baseY = this.y;

        this.color =
            Math.random() > 0.5
                ? "purple"
                : "blue";
    }


    update() {

        // Slow natural movement

        this.x += this.speedX;
        this.y += this.speedY;


        // Rotation / orbit movement

        this.angle += this.rotationSpeed;

        this.x +=
            Math.cos(this.angle) * 0.12;

        this.y +=
            Math.sin(this.angle) * 0.12;


        // Cursor interaction

        if (mouse.x !== null && mouse.y !== null) {

            const dx =
                this.x - mouse.x;

            const dy =
                this.y - mouse.y;

            const distance =
                Math.sqrt(dx * dx + dy * dy);


            if (
                distance < mouse.radius &&
                distance > 0
            ) {

                const force =
                    (mouse.radius - distance)
                    / mouse.radius;


                const directionX =
                    dx / distance;

                const directionY =
                    dy / distance;


                this.x +=
                    directionX * force * 2.5;

                this.y +=
                    directionY * force * 2.5;

            }

        }


        // Screen wrapping

        if (this.x < -10)
            this.x = canvas.width + 10;

        if (this.x > canvas.width + 10)
            this.x = -10;

        if (this.y < -10)
            this.y = canvas.height + 10;

        if (this.y > canvas.height + 10)
            this.y = -10;

    }


    draw() {

        const gradient =
            ctx.createRadialGradient(
                this.x,
                this.y,
                0,
                this.x,
                this.y,
                12
            );


        if (this.color === "purple") {

            gradient.addColorStop(
                0,
                "rgba(199,125,255,1)"
            );

            gradient.addColorStop(
                0.35,
                "rgba(155,93,229,0.7)"
            );

            gradient.addColorStop(
                1,
                "rgba(155,93,229,0)"
            );

        } else {

            gradient.addColorStop(
                0,
                "rgba(76,201,240,1)"
            );

            gradient.addColorStop(
                0.35,
                "rgba(76,201,240,0.7)"
            );

            gradient.addColorStop(
                1,
                "rgba(76,201,240,0)"
            );

        }


        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.size * 3,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = gradient;

        ctx.fill();

    }

}


// ===============================
// CREATE PARTICLES
// ===============================

function createParticles() {

    particles = [];

    const amount =
        Math.min(
            160,
            Math.floor(
                (canvas.width * canvas.height)
                / 8500
            )
        );


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        particles.push(
            new Particle()
        );

    }

}


// ===============================
// CONNECT PARTICLES
// ===============================

function connectParticles() {

    for (
        let i = 0;
        i < particles.length;
        i++
    ) {

        for (
            let j = i + 1;
            j < particles.length;
            j++
        ) {

            const dx =
                particles[i].x -
                particles[j].x;

            const dy =
                particles[i].y -
                particles[j].y;

            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            if (distance < 125) {

                const opacity =
                    (1 - distance / 125)
                    * 0.25;


                ctx.beginPath();

                ctx.strokeStyle =
                    `rgba(155,93,229,${opacity})`;

                ctx.lineWidth = 0.7;

                ctx.moveTo(
                    particles[i].x,
                    particles[i].y
                );

                ctx.lineTo(
                    particles[j].x,
                    particles[j].y
                );

                ctx.stroke();

            }

        }

    }

}


// ===============================
// CURSOR GLOW
// ===============================

function drawCursorGlow() {

    if (
        mouse.x === null ||
        mouse.y === null
    ) {
        return;
    }


    const glow =
        ctx.createRadialGradient(
            mouse.x,
            mouse.y,
            0,
            mouse.x,
            mouse.y,
            150
        );


    glow.addColorStop(
        0,
        "rgba(76,201,240,0.10)"
    );

    glow.addColorStop(
        0.45,
        "rgba(155,93,229,0.06)"
    );

    glow.addColorStop(
        1,
        "rgba(155,93,229,0)"
    );


    ctx.beginPath();

    ctx.arc(
        mouse.x,
        mouse.y,
        150,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = glow;

    ctx.fill();

}


// ===============================
// ANIMATION
// ===============================

function animate() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    drawCursorGlow();


    particles.forEach(
        particle => {

            particle.update();

            particle.draw();

        }
    );


    connectParticles();


    requestAnimationFrame(
        animate
    );

}


// START

resizeCanvas();

animate();
