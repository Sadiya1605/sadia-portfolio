/* =========================
   GLOBAL
========================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: "Inter", sans-serif;
    color: #171717;
    background: #ffffff;
    line-height: 1.7;
    overflow-x: hidden;
}

a {
    text-decoration: none;
    color: inherit;
}

.container {
    width: min(1150px, 90%);
    margin: auto;
}

.section {
    padding: 110px 0;
}

.light-section {
    background: #faf9fc;
}


/* =========================
   NAVBAR
========================= */

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background: rgba(255,255,255,0.92);
    backdrop-filter: blur(15px);
    border-bottom: 1px solid #eeeeee;
}

.nav-container {
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    font-family: "Poppins", sans-serif;
    font-size: 25px;
    font-weight: 800;
    letter-spacing: -1px;
}

.logo span {
    color: #7c1834;
}

nav {
    display: flex;
    gap: 30px;
}

nav a {
    font-size: 14px;
    font-weight: 600;
    color: #555;
    transition: 0.3s;
}

nav a:hover,
nav a.active {
    color: #7c1834;
}

.menu-btn {
    display: none;
    border: none;
    background: none;
    font-size: 23px;
    cursor: pointer;
}


/* =========================
   HERO
========================= */

.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    padding-top: 75px;
    overflow: hidden;
}

.hero-bg {
    position: absolute;
    width: 500px;
    height: 500px;
    right: -150px;
    top: 100px;
    background: radial-gradient(circle,
        rgba(124,24,52,0.10),
        transparent 70%);
    pointer-events: none;
}

.hero-content {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 70px;
    align-items: center;
}

.small-heading {
    color: #7c1834;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 3px;
    margin-bottom: 15px;
}

.small-heading span {
    display: inline-block;
    width: 35px;
    height: 2px;
    background: #7c1834;
    margin-right: 10px;
    vertical-align: middle;
}

.hero h1 {
    font-family: "Poppins", sans-serif;
    font-size: clamp(45px, 6vw, 75px);
    line-height: 1.05;
    letter-spacing: -3px;
}

.hero h1 strong {
    color: #7c1834;
}

.hero h2 {
    margin-top: 15px;
    font-size: 24px;
    color: #555;
    font-weight: 600;
}

.hero-description {
    max-width: 600px;
    margin-top: 22px;
    color: #666;
    font-size: 16px;
}

.hero-buttons {
    display: flex;
    gap: 15px;
    margin-top: 32px;
}

.btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 13px 22px;
    border-radius: 7px;
    font-size: 14px;
    font-weight: 700;
    transition: 0.3s;
}

.primary-btn {
    background: #7c1834;
    color: white;
}

.primary-btn:hover {
    background: #5e1027;
    transform: translateY(-3px);
}

.secondary-btn {
    border: 1px solid #ddd;
    color: #333;
}

.secondary-btn:hover {
    border-color: #7c1834;
    color: #7c1834;
}

.social-links {
    display: flex;
    gap: 12px;
    margin-top: 25px;
}

.social-links a {
    width: 40px;
    height: 40px;
    border: 1px solid #ddd;
    border-radius: 50%;
    display: grid;
    place-items: center;
    transition: 0.3s;
}

.social-links a:hover {
    background: #7c1834;
    color: white;
    border-color: #7c1834;
}


/* =========================
   CODE CARD
========================= */

.code-window {
    background: #16151a;
    border-radius: 15px;
    box-shadow: 0 30px 70px rgba(0,0,0,0.18);
    overflow: hidden;
    transform: rotate(2deg);
    transition: 0.4s;
}

.code-window:hover {
    transform: rotate(0deg) translateY(-8px);
}

.window-top {
    height: 45px;
    display: flex;
    align-items: center;
    padding: 0 18px;
    border-bottom: 1px solid #29272e;
    color: #aaa;
    font-size: 12px;
}

.window-dots {
    display: flex;
    gap: 6px;
    margin-right: 20px;
}

.window-dots span {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #555;
}

.code-content {
    padding: 30px;
    font-family: Consolas, monospace;
    font-size: 14px;
    line-height: 2;
    color: #ddd;
}

.indent {
    padding-left: 25px;
}

.double-indent {
    padding-left: 50px;
}

.purple {
    color: #c792ea;
}

.blue {
    color: #82aaff;
}

.green {
    color: #c3e88d;
}

.cursor {
    animation: blink 1s infinite;
}

@keyframes blink {
    50% {
        opacity: 0;
    }
}

.scroll-down {
    position: absolute;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: 11px;
    color: #999;
}


/* =========================
   SECTION HEADINGS
========================= */

.section-heading {
    display: flex;
    align-items: flex-start;
    gap: 18px;
    margin-bottom: 60px;
}

.section-heading > span {
    font-family: "Poppins", sans-serif;
    font-weight: 800;
    color: #7c1834;
    font-size: 15px;
}

.section-heading p {
    font-size: 11px;
    color: #999;
    letter-spacing: 2px;
    font-weight: 700;
}

.section-heading h2 {
    font-family: "Poppins", sans-serif;
    font-size: 40px;
    letter-spacing: -1px;
    margin-top: 4px;
}


/* =========================
   ABOUT
========================= */

.about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
}

.about-text h3 {
    font-family: "Poppins", sans-serif;
    font-size: 32px;
    line-height: 1.3;
    margin-bottom: 25px;
}

.about-text h3 span {
    color: #7c1834;
}

.about-text p {
    color: #666;
    margin-bottom: 15px;
}

.about-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
}

.stat-card {
    padding: 28px;
    background: white;
    border: 1px solid #eee;
    border-radius: 10px;
    transition: 0.3s;
}

.stat-card:hover {
    transform: translateY(-5px);
    border-color: #d9b8c1;
}

.stat-card i {
    color: #7c1834;
    font-size: 22px;
}

.stat-card h3 {
    margin-top: 15px;
    font-size: 18px;
}

.stat-card p {
    color: #999;
    font-size: 13px;
}


/* =========================
   SKILLS
========================= */

.skills-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
}

.skill-card {
    background: white;
    padding: 28px;
    border: 1px solid #eee;
    border-radius: 10px;
    transition: 0.3s;
}

.skill-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.07);
}

.skill-icon {
    width: 45px;
    height: 45px;
    display: grid;
    place-items: center;
    background: #f8edf1;
    color: #7c1834;
    border-radius: 8px;
    font-size: 20px;
}

.skill-card h3 {
    margin-top: 20px;
    font-size: 17px;
}

.skill-card p {
    color: #777;
    font-size: 13px;
    margin: 8px 0 18px;
}

.skill-line {
    height: 3px;
    background: #eee;
    border-radius: 5px;
}

.skill-line span {
    height: 100%;
    display: block;
    background: #7c1834;
    border-radius: 5px;
}


/* =========================
   EXPERIENCE
========================= */

.timeline {
    max-width: 800px;
    margin: auto;
    position: relative;
}

.timeline::before {
    content: "";
    position: absolute;
    left: 12px;
    top: 0;
    bottom: 0;
    width: 1px;
    background: #ddd;
}

.timeline-item {
    position: relative;
    padding-left: 55px;
}

.timeline-dot {
    position: absolute;
    left: 5px;
    top: 5px;
    width: 15px;
    height: 15px;
    border: 3px solid white;
    background: #7c1834;
    border-radius: 50%;
    box-shadow: 0 0 0 1px #7c1834;
}

.timeline-content {
    padding: 30px;
    border: 1px solid #eee;
    border-radius: 10px;
    background: white;
}

.date {
    font-size: 11px;
    color: #7c1834;
    font-weight: 800;
    letter-spacing: 1px;
}

.timeline-content h3 {
    font-family: "Poppins", sans-serif;
    font-size: 25px;
    margin-top: 8px;
}

.timeline-content h4 {
    color: #777;
    font-weight: 600;
}

.timeline-content p {
    margin: 15px 0;
    color: #666;
}

.tags,
.project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
}

.tags span,
.project-tags span {
    padding: 5px 10px;
    background: #f8edf1;
    color: #7c1834;
    border-radius: 5px;
    font-size: 11px;
    font-weight: 700;
}


/* =========================
   PROJECTS
========================= */

.projects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.project-card {
    position: relative;
    background: white;
    border: 1px solid #eee;
    padding: 35px;
    border-radius: 12px;
    overflow: hidden;
    transition: 0.35s;
}

.project-card:hover {
    transform: translateY(-7px);
    box-shadow: 0 20px 50px rgba(0,0,0,0.08);
}

.project-number {
    position: absolute;
    right: 25px;
    top: 20px;
    font-family: "Poppins", sans-serif;
    font-size: 50px;
    font-weight: 800;
    color: #f4f1f3;
}

.project-icon {
    width: 55px;
    height: 55px;
    display: grid;
    place-items: center;
    background: #f8edf1;
    color: #7c1834;
    border-radius: 10px;
    font-size: 22px;
}

.project-card h3 {
    font-family: "Poppins", sans-serif;
    margin-top: 22px;
    font-size: 22px;
}

.project-card p {
    color: #666;
    margin: 12px 0 22px;
    font-size: 14px;
}


/* =========================
   EDUCATION
========================= */

.education-grid {
    display: grid;
    gap: 20px;
}

.education-card {
    display: flex;
    gap: 25px;
    padding: 30px;
    border: 1px solid #eee;
    border-radius: 10px;
    transition: 0.3s;
}

.education-card:hover {
    transform: translateX(5px);
    border-color: #d9b8c1;
}

.education-icon {
    min-width: 55px;
    height: 55px;
    display: grid;
    place-items: center;
    background: #f8edf1;
    color: #7c1834;
    border-radius: 9px;
    font-size: 22px;
}

.education-type {
    font-size: 10px;
    color: #7c1834;
    letter-spacing: 2px;
    font-weight: 800;
}

.education-card h3 {
    font-family: "Poppins", sans-serif;
    font-size: 21px;
    margin-top: 7px;
}

.education-card h4 {
    color: #666;
    font-weight: 600;
    margin-top: 4px;
}

.education-card p {
    color: #777;
    font-size: 14px;
    margin-top: 10px;
}


/* =========================
   CONTACT
========================= */

.contact-section {
    background: #17151a;
    color: white;
    padding: 110px 0;
    text-align: center;
}

.contact-content {
    max-width: 750px;
    margin: auto;
}

.contact-label {
    color: #d7a8b6;
    font-size: 11px;
    letter-spacing: 3px;
    font-weight: 800;
}

.contact-content h2 {
    font-family: "Poppins", sans-serif;
    font-size: clamp(38px, 6vw, 60px);
    line-height: 1.15;
    margin: 15px 0;
}

.contact-content h2 span {
    color: #d7a8b6;
}

.contact-content > p:not(.contact-label) {
    color: #aaa;
}

.contact-details {
    margin: 35px 0;
    display: flex;
    justify-content: center;
    gap: 25px;
    flex-wrap: wrap;
}

.contact-details a,
.contact-details span {
    color: #ccc;
    font-size: 13px;
}

.contact-details i {
    color: #d7a8b6;
    margin-right: 7px;
}


/* =========================
   FOOTER
========================= */

footer {
    background: #111014;
    color: #888;
    padding: 25px 0;
}

.footer-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
}

.footer-content h3 {
    color: white;
    font-family: "Poppins", sans-serif;
}

.footer-content h3 span {
    color: #d7a8b6;
}

.footer-content p {
    font-size: 11px;
}

.footer-socials {
    display: flex;
    gap: 12px;
}

.footer-socials a {
    color: #aaa;
    transition: 0.3s;
}

.footer-socials a:hover {
    color: white;
}


/* =========================
   REVEAL ANIMATION
========================= */

.reveal {
    opacity: 0;
    transform: translateY(25px);
    transition: 0.8s ease;
}

.reveal.show {
    opacity: 1;
    transform: translateY(0);
}


/* =========================
   RESPONSIVE
========================= */

@media (max-width: 950px) {

    nav {
        position: absolute;
        top: 75px;
        right: 5%;
        width: 220px;
        background: white;
        padding: 20px;
        border: 1px solid #eee;
        border-radius: 10px;
        display: none;
        flex-direction: column;
        gap: 15px;
        box-shadow: 0 20px 40px rgba(0,0,0,0.08);
    }

    nav.show {
        display: flex;
    }

    .menu-btn {
        display: block;
    }

    .hero-content {
        grid-template-columns: 1fr;
    }

    .hero-card {
        max-width: 600px;
    }

    .skills-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .about-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }
}


@media (max-width: 600px) {

    .section {
        padding: 75px 0;
    }

    .hero h1 {
        font-size: 45px;
    }

    .hero h2 {
        font-size: 20px;
    }

    .hero-buttons {
        flex-direction: column;
        align-items: flex-start;
    }

    .skills-grid,
    .projects-grid {
        grid-template-columns: 1fr;
    }

    .about-stats {
        grid-template-columns: 1fr;
    }

    .section-heading h2 {
        font-size: 32px;
    }

    .code-content {
        padding: 20px;
        font-size: 11px;
    }

    .footer-content {
        flex-direction: column;
        text-align: center;
    }

    .education-card {
        flex-direction: column;
    }

    .contact-details {
        flex-direction: column;
    }
}
