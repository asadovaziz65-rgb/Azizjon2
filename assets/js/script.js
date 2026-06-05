/* ==========================
   LOADER
========================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        document.body.classList.add("loaded");

    }, 1000);

});

/* ==========================
   SCROLL REVEAL
========================== */

const revealElements = document.querySelectorAll(
    ".section, .project-card, .skill-card, .social-card, .experience-card"
);

const revealObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("active");

            }

        });

    },
    {
        threshold:0.15
    }
);

revealElements.forEach(el => {

    el.classList.add("reveal");

    revealObserver.observe(el);

});

/* ==========================
   ACTIVE NAVBAR
========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 200;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href") ===
            `#${current}`
        ){

            link.classList.add("active");

        }

    });

});

/* ==========================
   HEADER BLUR
========================== */

const header =
document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.backdropFilter =
        "blur(30px)";

        header.style.transform =
        "translateX(-50%) scale(.98)";

    }else{

        header.style.transform =
        "translateX(-50%) scale(1)";

    }

});

/* ==========================
   MOBILE MENU
========================== */

const menuBtn =
document.querySelector(".mobile-menu-btn");

const navbar =
document.querySelector(".navbar");

if(menuBtn){

    menuBtn.addEventListener("click", () => {

        navbar.classList.toggle("active");

    });

}

/* ==========================
   SMOOTH SCROLL
========================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});

/* ==========================
   COUNTER ANIMATION
========================== */

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
        +counter.getAttribute("data-target");

        const count =
        +counter.innerText;

        const increment =
        target / 80;

        if(count < target){

            counter.innerText =
            Math.ceil(count + increment);

            setTimeout(updateCounter,20);

        }else{

            counter.innerText =
            target;

        }

    };

    updateCounter();

});

/* ==========================
   PARALLAX AVATAR
========================== */

const avatar =
document.querySelector(".avatar-area");

document.addEventListener(
    "mousemove",
    (e) => {

        if(!avatar) return;

        const x =
        (window.innerWidth / 2 - e.clientX)
        / 40;

        const y =
        (window.innerHeight / 2 - e.clientY)
        / 40;

        avatar.style.transform =
        `translate(${x}px, ${y}px)`;

    }
);

/* ==========================
   FLOATING DOCK EFFECT
========================== */

const dockItems =
document.querySelectorAll(".dock-item");

dockItems.forEach(item => {

    item.addEventListener("mouseenter", () => {

        item.style.transform =
        "translateY(-8px) scale(1.05)";

    });

    item.addEventListener("mouseleave", () => {

        item.style.transform =
        "translateY(0) scale(1)";

    });

});

/* ==========================
   CONSOLE SIGNATURE
========================== */

console.log(
"%c Aziz Asadov Portfolio",
"color:#7C3AED;font-size:20px;font-weight:bold;"
);

console.log(
"%c AI Builder • Digital Creator",
"color:#06B6D4;font-size:14px;"
);
