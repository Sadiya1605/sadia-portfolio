:root {
--bg: #07070a;
--bg-soft: #0d0d12;
--card: rgba(255,255,255,0.045);
--card-border: rgba(255,255,255,0.09);
--white: #f7f7f8;
--muted: #9696a3;
--maroon: #9c2349;
--maroon-light: #c43d69;
--violet: #7045c6;
--cyan: #6d9cff;
--max: 1180px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

html {
scroll-behavior: smooth;
}

body {
background: var(--bg);
color: var(--white);
font-family: "DM Sans", sans-serif;
line-height: 1.7;
overflow-x: hidden;
}

body::selection {
background: var(--maroon);
color: white;
}

a {
color: inherit;
text-decoration: none;
}

button {
font-family: inherit;
}

#particleCanvas {
position: fixed;
inset: 0;
pointer-events: none;
z-index: 0;
opacity: .45;
}

/* ================= LOADER ================= */

.loader {
position: fixed;
inset: 0;
z-index: 9999;
background: #07070a;
display: grid;
place-items: center;
transition: opacity .7s ease, visibility .7s ease;
}

.loader.hide {
opacity: 0;
visibility: hidden;
}

.loader-inner {
width: 70px;
height: 70px;
border: 1px solid rgba(255,255,255,.15);
border-top-color: var(--maroon-light);
border-radius: 50%;
display: grid;
place-items: center;
animation: spin 1s linear infinite;
}

.loader-inner span {
font-family: "Space Grotesk";
font-size: 25px;
font-weight: 700;
color: var(--maroon-light);
animation: reverseSpin 1s linear infinite;
}

@keyframes spin {
to { transform: rotate(360deg); }
}

@keyframes reverseSpin {
to { transform: rotate(-360deg); }
}

/* ================= NAVBAR ================= */

.navbar {
position: fixed;
top: 0;
left: 0;
width: 100%;
z-index: 1000;
border-bottom: 1px solid transparent;
transition: .35s ease;
}

.navbar.scrolled {
background: rgba(7,7,10,.82);
backdrop-filter: blur(20px);
border-bottom-color: rgba(255,255,255,.07);
}

.nav-container {
width: min(92%, var(--max));
height: 82px;
margin: auto;
display: flex;
align-items: center;
justify-content: space-between;
}

.logo {
display: flex;
align-items: center;
gap: 10px;
font-family: "Space Grotesk";
font-size: 20px;
font-weight: 700;
}

.logo-box {
width: 34px;
height: 34px;
display: grid;
place-items: center;
border: 1px solid rgba(255,255,255,.18);
background: linear-gradient(145deg, #17171e, #0c0c10);
border-radius: 9px;
color: #fff;
}

.accent,
.logo .accent {
color: var(--maroon-light);
}

nav {
display: flex;
align-items: center;
gap: 30px;
}

.nav-link {
color: #8d8d98;
font-size: 13px;
font-weight: 600;
transition: .3s;
position: relative;
}

.nav-link::after {
content: "";
position: absolute;
left: 0;
bottom: -9px;
width: 0;
height: 2px;
background: var(--maroon-light);
transition: .3s;
}

.nav-link:hover,
.nav-link.active {
color: white;
}

.nav-link.active::after,
.nav-link:hover::after {
width: 100%;
}

.nav-cta {
padding: 10px 17px;
border: 1px solid rgba(255,255,255,.13);
border-radius: 8px;
font-size: 12px;
font-weight: 700;
transition: .3s;
}

.nav-cta:hover {
border-color: var(--maroon-light);
color: #f5b4c7;
}

.menu-btn {
display: none;
background: transparent;
color: white;
border: 0;
font-size: 22px;
}

/* ================= HERO ================= */

.hero {
min-height: 100vh;
position: relative;
z-index: 1;
display: flex;
align-items: center;
padding: 120px 0 55px;
overflow: hidden;
}

.hero-grid {
position: absolute;
inset: 0;
background-image:
linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px),
linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px);
background-size: 70px 70px;
mask-image: radial-gradient(circle at center, black, transparent 75%);
}

.hero-glow {
position: absolute;
border-radius: 50%;
filter: blur(90px);
pointer-events: none;
}

.glow-one {
width: 450px;
height: 450px;
left: -230px;
top: 180px;
background: rgba(156,35,73,.18);
}

.glow-two {
width: 420px;
height: 420px;
right: -170px;
top: 80px;
background: rgba(112,69,198,.15);
}

.hero-container {
width: min(92%, var(--max));
margin: auto;
display: grid;
grid-template-columns: 1.05fr .95fr;
gap: 75px;
align-items: center;
position: relative;
z-index: 2;
}

.available {
display: inline-flex;
align-items: center;
gap: 9px;
padding: 7px 12px;
border: 1px solid rgba(255,255,255,.1);
border-radius: 100px;
color: #b8b8c2;
font-size: 11px;
background: rgba(255,255,255,.035);
margin-bottom: 25px;
}

.status-dot {
width: 7px;
height: 7px;
border-radius: 50%;
background: #62d394;
box-shadow: 0 0 12px #62d394;
}

.eyebrow,
.small-title {
font-size: 11px;
letter-spacing: 3px;
font-weight: 700;
color: #a5a5b0;
}

.hero h1 {
max-width: 720px;
font-family: "Space Grotesk";
font-size: clamp(50px, 6vw, 82px);
line-height: .98;
letter-spacing: -4px;
margin-top: 13px;
}

.hero h1 span {
color: #b44b70;
}

.hero h1 strong {
color: #7255c9;
}

.hero-text {
max-width: 620px;
color: var(--muted);
font-size: 16px;
margin-top: 28px;
}

.hero-buttons {
display: flex;
gap: 13px;
margin-top: 34px;
}

.main-btn,
.outline-btn {
display: inline-flex;
align-items: center;
gap: 10px;
padding: 13px 19px;
border-radius: 8px;
font-size: 13px;
font-weight: 700;
transition: .3s;
}

.main-btn {
background: linear-gradient(135deg, #8f1f45, #b52f5c);
color: white;
box-shadow: 0 10px 35px rgba(156,35,73,.2);
}

.main-btn:hover {
transform: translateY(-3px);
box-shadow: 0 15px 40px rgba(156,35,73,.3);
}

.outline-btn {
border: 1px solid rgba(255,255,255,.13);
color: #ddd;
background: rgba(255,255,255,.025);
}

.outline-btn:hover {
border-color: rgba(196,61,105,.7);
color: #f1b4c5;
transform: translateY(-3px);
}

.hero-socials {
display: flex;
align-items: center;
gap: 14px;
margin-top: 32px;
}

.hero-socials a {
width: 38px;
height: 38px;
display: grid;
place-items: center;
border: 1px solid rgba(255,255,255,.1);
border-radius: 8px;
color: #aaa;
transition: .3s;
}

.hero-socials a:hover {
color: white;
border-color: var(--maroon-light);
background: rgba(156,35,73,.12);
}

.social-line {
height: 1px;
width: 40px;
background: rgba(255,255,255,.12);
}

.location {
font-size: 11px;
color: #777783;
}

.location i {
color: var(--maroon-light);
margin-right: 5px;
}

/* ================= AI CARD ================= */

.hero-right {
position: relative;
min-height: 510px;
display: grid;
place-items: center;
}

.ai-card {
width: min(100%, 480px);
border: 1px solid rgba(255,255,255,.11);
border-radius: 17px;
background: linear-gradient(145deg,
rgba(255,255,255,.075),
rgba(255,255,255,.025));
backdrop-filter: blur(18px);
box-shadow:
0 30px 80px rgba(0,0,0,.4),
0 0 70px rgba(112,69,198,.08);
overflow: hidden;
transform: perspective(900px) rotateY(-5deg) rotateX(3deg);
transition: .5s;
}

.ai-card:hover {
transform: perspective(900px) rotateY(0) rotateX(0) translateY(-8px);
}

.ai-card-top {
height: 52px;
padding: 0 17px;
display: flex;
align-items: center;
justify-content: space-between;
border-bottom: 1px solid rgba(255,255,255,.07);
color: #777783;
font-family: monospace;
font-size: 11px;
}

.window-controls {
display: flex;
gap: 6px;
}

.window-controls span {
width: 8px;
height: 8px;
border-radius: 50%;
background: #3b3b43;
}

.ai-code {
padding: 30px;
min-height: 350px;
font-family: "Courier New", monospace;
font-size: 13px;
line-height: 2;
color: #d2d2db;
}

.indent {
padding-left: 25px;
}

.double-indent {
padding-left: 50px;
}

.keyword {
color: #c77dff;
}

.function {
color: #72a7ff;
}

.property {
color: #f1b56e;
}

.string {
color: #8ed69c;
}

.cursor {
color: #c43d69;
animation: blink 1s infinite;
}

@keyframes blink {
50% { opacity: 0; }
}

.ai-card-bottom {
height: 43px;
padding: 0 20px;
border-top: 1px solid rgba(255,255,255,.07);
display: flex;
align-items: center;
justify-content: space-between;
color: #696974;
font-size: 10px;
}

.ai-card-bottom div {
display: flex;
align-items: center;
gap: 7px;
}

.mini-dot {
width: 6px;
height: 6px;
background: #63d497;
border-radius: 50%;
}

.orbit {
position: absolute;
border: 1px solid rgba(156,35,73,.15);
border-radius: 50%;
pointer-events: none;
}

.orbit-one {
width: 580px;
height: 580px;
animation: orbit 15s linear infinite;
}

.orbit-two {
width: 420px;
height: 420px;
border-color: rgba(112,69,198,.15);
animation: orbitReverse 11s linear infinite;
}

@keyframes orbit {
to { transform: rotate(360deg); }
}

@keyframes orbitReverse {
to { transform: rotate(-360deg); }
}

.floating-card {
position: absolute;
display: flex;
align-items: center;
gap: 10px;
padding: 12px 15px;
border: 1px solid rgba(255,255,255,.1);
background: rgba(15,15,20,.8);
backdrop-filter: blur(15px);
border-radius: 11px;
box-shadow: 0 15px 35px rgba(0,0,0,.25);
z-index: 4;
}

.floating-card i {
font-size: 21px;
}

.floating-card strong {
display: block;
font-size: 12px;
}

.floating-card small {
display: block;
color: #777783;
font-size: 9px;
}

.card-python {
left: 0;
bottom: 45px;
}

.card-python i {
color: #78a9ff;
}

.card-ai {
right: 0;
top: 45px;
}

.card-ai i {
color: #b44b70;
}

/* ================= HERO BOTTOM ================= */

.hero-bottom {
width: min(92%, var(--max));
margin: auto;
position: absolute;
bottom: 25px;
left: 50%;
transform: translateX(-50%);
display: flex;
align-items: center;
gap: 40px;
z-index: 3;
}

.scroll-indicator {
color: #5e5e68;
font-size: 10px;
letter-spacing: 1px;
display: flex;
align-items: center;
gap: 9px;
margin-right: auto;
}

.scroll-indicator span {
width: 27px;
height: 1px;
background: #555;
}

.hero-stat {
display: flex;
align-items: center;
gap: 8px;
}

.hero-stat strong {
font-family: "Space Grotesk";
color: #ddd;
font-size: 18px;
}

.hero-stat span {
color: #60606b;
font-size: 9px;
max-width: 65px;
line-height: 1.2;
}

/* ================= SECTIONS ================= */

.section {
padding: 125px 0;
position: relative;
z-index: 2;
}

.section-container {
width: min(92%, var(--max));
margin: auto;
}

.about,
.experience-section,
.education-section {
background: #09090d;
}

.skills-section,
.projects-section {
background: #0c0c11;
}

.section-label {
display: flex;
align-items: center;
gap: 14px;
color: #777782;
font-size: 10px;
letter-spacing: 3px;
font-weight: 700;
margin-bottom: 55px;
}

.section-label span {
color: var(--maroon-light);
font-family: "Space Grotesk";
}

.section-intro {
display: flex;
justify-content: space-between;
gap: 50px;
align-items: end;
margin-bottom: 55px;
}

.section-intro h2,
.about-heading h2,
.experience-heading h2,
.education-heading h2 {
font-family: "Space Grotesk";
font-size: clamp(36px, 4.5vw, 58px);
line-height: 1;
letter-spacing: -2px;
margin-top: 12px;
}

.section-intro h2 span,
.about-heading h2 span,
.experience-heading h2 span,
.education-heading h2 span {
color: #a53a60;
}

.section-intro > p {
max-width: 340px;
color: #777783;
font-size: 13px;
}

/* ================= ABOUT ================= */

.about-layout {
display: grid;
grid-template-columns: .8fr 1.2fr;
gap: 100px;
}

.about-heading h2 {
max-width: 450px;
}

.about-content {
max-width: 700px;
}

.about-content p {
color: #7f7f8b;
font-size: 14px;
margin-bottom: 17px;
}

.about-content .lead {
color: #b8b8c2;
font-size: 18px;
line-height: 1.6;
}

.about-content strong {
color: #ddd;
}

.about-highlight {
margin-top: 30px;
padding: 18px;
display: flex;
align-items: center;
gap: 16px;
border: 1px solid rgba(255,255,255,.08);
border-radius: 11px;
background: rgba(255,255,255,.025);
}

.highlight-icon {
width: 45px;
height: 45px;
display: grid;
place-items: center;
border-radius: 9px;
background: rgba(156,35,73,.12);
color: #ca5b7f;
}

.about-highlight strong {
font-size: 13px;
}

.about-highlight p {
margin: 2px 0 0;
font-size: 11px;
}

/* ================= SKILLS ================= */

.skills-grid {
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 15px;
}

.skill-box {
min-height: 245px;
padding: 25px;
border: 1px solid var(--card-border);
border-radius: 13px;
background: var(--card);
transition: .35s;
}

.skill-box:hover {
transform: translateY(-7px);
border-color: rgba(196,61,105,.4);
background: rgba(255,255,255,.06);
}

.skill-top {
display: flex;
align-items: center;
justify-content: space-between;
}

.skill-top > span {
color: #45454f;
font-family: "Space Grotesk";
font-size: 12px;
}

.skill-icon {
width: 45px;
height: 45px;
display: grid;
place-items: center;
border-radius: 10px;
font-size: 20px;
background: rgba(255,255,255,.06);
}

.python { color: #73a6ff; }
.brain { color: #c76aff; }
.bot { color: #d35c84; }
.data { color: #65c89a; }
.eda { color: #e8a85c; }
.web { color: #e85e66; }
.notebook { color: #e3b45d; }
.pycharm { color: #72d69a; }

.skill-box h3 {
font-family: "Space Grotesk";
font-size: 17px;
margin-top: 20px;
}

.skill-box > p {
color: #70707b;
font-size: 11px;
line-height: 1.7;
margin-top: 8px;
}

.skill-footer {
margin-top: 20px;
}

.skill-footer > span {
color: #555560;
font-size: 9px;
}

.skill-bar {
height: 2px;
margin-top: 7px;
background: #25252d;
border-radius: 10px;
overflow: hidden;
}

.skill-bar span {
display: block;
height: 100%;
background: linear-gradient(90deg, var(--maroon), #c94a72);
}

/* ================= EXPERIENCE ================= */

.experience-heading {
margin-bottom: 50px;
}

.experience-card {
display: grid;
grid-template-columns: 70px 1fr 260px;
gap: 30px;
padding: 40px;
border: 1px solid rgba(255,255,255,.09);
border-radius: 16px;
background:
radial-gradient(circle at 90% 20%, rgba(112,69,198,.08), transparent 35%),
rgba(255,255,255,.025);
}

.experience-number {
font-family: "Space Grotesk";
color: #3e3e47;
font-size: 22px;
}

.experience-date {
color: #bd5275;
font-size: 9px;
letter-spacing: 2px;
font-weight: 700;
}

.experience-main h3 {
font-family: "Space Grotesk";
font-size: 29px;
margin-top: 7px;
}

.experience-main h4 {
color: #aaaab4;
font-size: 13px;
font-weight: 500;
margin-top: 3px;
}

.experience-main h4 i {
color: #9c4262;
margin-right: 5px;
}

.experience-main > p {
max-width: 650px;
color: #777783;
font-size: 13px;
margin: 20px 0;
}

.experience-tags {
display: flex;
flex-wrap: wrap;
gap: 7px;
}

.experience-tags span,
.project-tech span {
padding: 5px 9px;
border-radius: 5px;
background: rgba(156,35,73,.09);
border: 1px solid rgba(156,35,73,.14);
color: #b96380;
font-size: 9px;
}

.experience-side {
border-left: 1px solid rgba(255,255,255,.08);
padding-left: 25px;
display: flex;
flex-direction: column;
justify-content: center;
gap: 18px;
}

.experience-side div {
display: flex;
align-items: center;
gap: 10px;
color: #777783;
font-size: 10px;
}

.experience-side i {
color: #b04b70;
}

/* ================= PROJECTS ================= */

.projects-grid {
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 16px;
}

.project-card {
position: relative;
min-height: 330px;
padding: 30px;
border: 1px solid rgba(255,255,255,.08);
border-radius: 14px;
background: rgba(255,255,255,.025);
transition: .35s;
overflow: hidden;
}

.project-card::before {
content: "";
position: absolute;
width: 200px;
height: 200px;
right: -100px;
bottom: -100px;
border-radius: 50%;
background: rgba(156,35,73,.12);
filter: blur(50px);
transition: .4s;
}

.project-card:hover {
transform: translateY(-7px);
border-color: rgba(196,61,105,.35);
}

.project-card:hover::before {
transform: scale(1.5);
}

.project-top {
display: flex;
justify-content: space-between;
align-items: center;
}

.project-top > span {
color: #45454e;
font-family: "Space Grotesk";
font-size: 12px;
}

.project-icon {
width: 48px;
height: 48px;
display: grid;
place-items: center;
border-radius: 10px;
background: rgba(156,35,73,.1);
color: #c05278;
font-size: 18px;
}

.project-content {
margin-top: 35px;
}

.project-type {
color: #6d6d78;
letter-spacing: 2px;
font-size: 8px;
font-weight: 700;
}

.project-card h3 {
font-family: "Space Grotesk";
font-size: 24px;
margin-top: 8px;
}

.project-content > p:not(.project-type) {
color: #777783;
font-size: 12px;
margin: 12px 0 22px;
max-width: 480px;
}

.project-tech {
display: flex;
flex-wrap: wrap;
gap: 6px;
}

.project-arrow {
position: absolute;
right: 28px;
bottom: 27px;
color: #555560;
transition: .3s;
}

.project-card:hover .project-arrow {
color: #c45078;
transform: translate(3px,-3px);
}

/* ================= EDUCATION ================= */

.education-heading {
margin-bottom: 50px;
}

.education-grid {
display: grid;
gap: 15px;
}

.education-card {
display: grid;
grid-template-columns: 55px 1fr auto;
gap: 22px;
align-items: center;
padding: 28px;
border: 1px solid rgba(255,255,255,.08);
border-radius: 13px;
background: rgba(255,255,255,.025);
transition: .35s;
}

.education-card:hover {
transform: translateX(5px);
border-color: rgba(196,61,105,.3);
}

.education-icon {
width: 50px;
height: 50px;
display: grid;
place-items: center;
border-radius: 10px;
color: #c35a7e;
background: rgba(156,35,73,.1);
}

.education-label {
color: #6b6b75;
letter-spacing: 2px;
font-size: 8px;
font-weight: 700;
}

.education-info h3 {
font-family: "Space Grotesk";
font-size: 19px;
margin-top: 5px;
}

.education-info h4 {
color: #a0a0ab;
font-size: 12px;
font-weight: 500;
}

.education-info p {
color: #686873;
font-size: 11px;
margin-top: 8px;
}

.education-year {
color: #494952;
font-family: "Space Grotesk";
font-size: 11px;
}

/* ================= CONTACT ================= */

.contact-section {
position: relative;
z-index: 2;
padding: 145px 0;
text-align: center;
overflow: hidden;
background: #08080c;
border-top: 1px solid rgba(255,255,255,.06);
}

.contact-glow {
position: absolute;
width: 550px;
height: 300px;
left: 50%;
top: 50%;
transform: translate(-50%,-50%);
background: rgba(156,35,73,.12);
filter: blur(100px);
}

.contact-content {
position: relative;
z-index: 2;
}

.contact-content h2 {
max-width: 800px;
margin: 15px auto;
font-family: "Space Grotesk";
font-size: clamp(42px, 6vw, 70px);
line-height: 1;
letter-spacing: -3px;
}

.contact-content h2 span {
color: #b3446c;
}

.contact-content > p:not(.small-title) {
max-width: 570px;
margin: 20px auto;
color: #777783;
font-size: 13px;
}

.contact-buttons {
display: flex;
justify-content: center;
gap: 12px;
margin-top: 30px;
}

.contact-info {
display: flex;
justify-content: center;
gap: 25px;
margin-top: 35px;
color: #64646e;
font-size: 10px;
}

.contact-info i {
color: #b24d70;
margin-right: 5px;
}

/* ================= FOOTER ================= */

footer {
position: relative;
z-index: 2;
background: #050507;
border-top: 1px solid rgba(255,255,255,.06);
}

.footer-container {
width: min(92%, var(--max));
min-height: 85px;
margin: auto;
display: flex;
align-items: center;
justify-content: space-between;
gap: 20px;
}

.footer-logo {
font-family: "Space Grotesk";
font-weight: 700;
font-size: 17px;
}

.footer-logo span {
color: #b84c72;
}

.footer-brand p {
color: #555560;
font-size: 9px;
}

.footer-copy {
color: #4e4e58;
font-size: 9px;
}

.footer-social {
display: flex;
gap: 10px;
}

.footer-social a {
width: 32px;
height: 32px;
display: grid;
place-items: center;
border: 1px solid rgba(255,255,255,.08);
border-radius: 7px;
color: #777783;
transition: .3s;
}

.footer-social a:hover {
color: white;
border-color: #a64064;
}

/* ================= TOP BUTTON ================= */

.top-btn {
position: fixed;
right: 25px;
bottom: 25px;
width: 42px;
height: 42px;
display: grid;
place-items: center;
border: 1px solid rgba(255,255,255,.1);
border-radius: 9px;
background: rgba(15,15,20,.8);
color: white;
cursor: pointer;
opacity: 0;
visibility: hidden;
transform: translateY(15px);
transition: .3s;
z-index: 900;
}

.top-btn.show {
opacity: 1;
visibility: visible;
transform: translateY(0);
}

/* ================= REVEAL ================= */

.reveal {
opacity: 0;
transform: translateY(28px);
transition: opacity .8s ease, transform .8s ease;
}

.reveal.show {
opacity: 1;
transform: translateY(0);
}

/* ================= RESPONSIVE ================= */

@media (max-width: 1050px) {

```
nav {
    gap: 17px;
}

.nav-cta {
    display: none;
}

.hero-container {
    grid-template-columns: 1fr;
}

.hero-left {
    max-width: 750px;
}

.hero-right {
    min-height: 500px;
}

.skills-grid {
    grid-template-columns: repeat(2,1fr);
}

.about-layout {
    grid-template-columns: 1fr;
    gap: 45px;
}

.experience-card {
    grid-template-columns: 50px 1fr;
}

.experience-side {
    display: none;
}
```

}

@media (max-width: 760px) {

```
.nav-container {
    height: 70px;
}

nav {
    position: absolute;
    top: 70px;
    right: 4%;
    width: 230px;
    padding: 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 17px;
    background: rgba(10,10,14,.97);
    border: 1px solid rgba(255,255,255,.1);
    border-radius: 11px;
    backdrop-filter: blur(20px);
    display: none;
}

nav.show {
    display: flex;
}

.menu-btn {
    display: block;
}

.hero {
    padding-top: 110px;
}

.hero h1 {
    font-size: 54px;
    letter-spacing: -3px;
}

.hero-right {
    min-height: 430px;
}

.ai-card {
    width: 95%;
}

.hero-bottom {
    display: none;
}

.section {
    padding: 90px 0;
}

.section-intro {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
}

.skills-grid {
    grid-template-columns: 1fr;
}

.projects-grid {
    grid-template-columns: 1fr;
}

.experience-card {
    grid-template-columns: 1fr;
    padding: 28px;
}

.experience-number {
    display: none;
}

.education-card {
    grid-template-columns: 50px 1fr;
}

.education-year {
    display: none;
}

.footer-container {
    flex-direction: column;
    padding: 25px 0;
    text-align: center;
}
```

}

@media (max-width: 500px) {

```
.hero h1 {
    font-size: 45px;
}

.hero-buttons {
    flex-direction: column;
    align-items: stretch;
}

.main-btn,
.outline-btn {
    justify-content: center;
}

.hero-right {
    min-height: 380px;
}

.ai-code {
    padding: 20px;
    font-size: 10px;
}

.floating-card {
    transform: scale(.8);
}

.card-python {
    left: -15px;
}

.card-ai {
    right: -15px;
}

.contact-buttons {
    flex-direction: column;
    align-items: stretch;
}

.contact-info {
    flex-direction: column;
    gap: 10px;
}
```

}
