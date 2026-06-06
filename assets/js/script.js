// ====================================
//    LANGUAGE TOGGLE
// ====================================

const langBtns = document.querySelectorAll('.lang-btn');
let currentLang = 'uz';

langBtns.forEach(btn => {
btn.addEventListener('click', () => {
const lang = btn.dataset.lang;
changeLanguage(lang);
});
});

function changeLanguage(lang) {
currentLang = lang;

// Update active button
langBtns.forEach(btn => btn.classList.remove('active'));
document.querySelector(`.lang-btn[data-lang="${lang}"]`).classList.add('active');

// Toggle all language spans
document.querySelectorAll('.lang-uz, .lang-en').forEach(el => {
el.style.display = 'none';
});

if (lang === 'uz') {
document.querySelectorAll('.lang-uz').forEach(el => {
el.style.display = 'inline';
});
} else {
document.querySelectorAll('.lang-en').forEach(el => {
el.style.display = 'inline';
});
}

localStorage.setItem('preferredLang', lang);
}

// Load saved language
const savedLang = localStorage.getItem('preferredLang') || 'uz';
changeLanguage(savedLang);

// ====================================
//    LOADER HIDE
// ====================================

window.addEventListener('load', () => {
const loader = document.getElementById('loader');
setTimeout(() => {
loader.classList.add('hidden');
setTimeout(() => {
loader.style.display = 'none';
}, 600);
}, 2500);
});

// ====================================
//    HEADER SCROLL EFFECT
// ====================================

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
if (window.scrollY > 50) {
header.classList.add('scrolled');
} else {
header.classList.remove('scrolled');
}
});

// ====================================
//    NAVBAR ACTIVE LINK
// ====================================

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
link.addEventListener('click', () => {
navLinks.forEach(l => l.classList.remove('active'));
link.classList.add('active');
});
});

// ====================================
//    SMOOTH SCROLL
// ====================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute('href'));
if (target) {
target.scrollIntoView({
behavior: 'smooth',
block: 'start'
});
}
});
});

// ====================================
//    SCROLL REVEAL
// ====================================

const observerOptions = {
threshold: 0.1,
rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('scroll-animate');
observer.unobserve(entry.target);
}
});
}, observerOptions);

document.querySelectorAll('.section, .project-card, .achievement-card, .tech-item, .skills-column').forEach(el => {
observer.observe(el);
});

// ====================================
//    MOBILE MENU TOGGLE
// ====================================

const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navbar = document.querySelector('.navbar');

mobileMenuBtn.addEventListener('click', () => {
navbar.classList.toggle('active');
});

// ====================================
//    ACTIVE SECTION DETECTION
// ====================================

const sections = document.querySelectorAll('section[id]');

const sectionObserver = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
const id = entry.target.getAttribute('id');
navLinks.forEach(link => {
link.classList.remove('active');
});
const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
if (activeLink) {
activeLink.classList.add('active');
}
}
});
}, { threshold: 0.5 });

sections.forEach(section => {
sectionObserver.observe(section);
});

// ====================================
//    CONSOLE MESSAGE
// ====================================

console.log('%cAziz Asadov Portfolio', 'font-size: 20px; color: #7C3AED; font-weight: bold;');
console.log('%cAI Builder • Digital Creator', 'font-size: 14px; color: #06B6D4;');
console.log('%cMade with ❤️ by Aziz', 'font-size: 12px; color: #fff;');