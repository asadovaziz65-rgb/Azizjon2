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
  }, 1500);
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

const navLinks = document.querySelectorAll('.navbar a');

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

document.querySelectorAll('.section, .project-card, .achievement-card, .skill-card').forEach(el => {
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
//    DOCK LINKS
// ====================================

const dockItems = document.querySelectorAll('.dock-item');

dockItems.forEach(item => {
  item.addEventListener('click', function(e) {
    // Log click for tracking
    console.log('Dock item clicked:', this.href);
  });
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
      const activeLink = document.querySelector(`.navbar a[href="#${id}"]`);
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
//    PARTICLE EFFECT (OPTIONAL)
// ====================================

function createParticle() {
  const particle = document.createElement('div');
  particle.style.position = 'fixed';
  particle.style.width = Math.random() * 5 + 'px';
  particle.style.height = particle.style.width;
  particle.style.background = Math.random() > 0.5 ? '#7C3AED' : '#06B6D4';
  particle.style.borderRadius = '50%';
  particle.style.left = Math.random() * window.innerWidth + 'px';
  particle.style.top = Math.random() * window.innerHeight + 'px';
  particle.style.pointerEvents = 'none';
  particle.style.opacity = Math.random() * 0.5 + 0.2;
  particle.style.zIndex = -1;
  particle.style.animation = `float ${Math.random() * 10 + 15}s linear infinite`;
  
  document.body.appendChild(particle);
  
  setTimeout(() => {
    particle.remove();
  }, 15000);
}

// Optional: Uncomment to enable particles
// setInterval(createParticle, 500);

// ====================================
//    CONSOLE MESSAGE
// ====================================

console.log('%cAziz Asadov Portfolio', 'font-size: 20px; color: #7C3AED; font-weight: bold;');
console.log('%cAI Builder • Digital Creator', 'font-size: 14px; color: #06B6D4;');
console.log('%cMade with ❤️ by Aziz', 'font-size: 12px; color: #fff;');