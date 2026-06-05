/* ===================================
   AZIZ ASADOV PORTFOLIO
=================================== */

/* LOADING */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.transition = "0.8s ease";

        setTimeout(() => {

            loader.style.display = "none";

        }, 800);

    }, 2500);

});


/* NAVBAR EFFECT */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(5,8,22,0.9)";

        navbar.style.border =
            "1px solid rgba(255,255,255,.12)";

        navbar.style.boxShadow =
            "0 10px 40px rgba(0,0,0,.3)";

    } else {

        navbar.style.background =
            "rgba(255,255,255,.04)";

        navbar.style.boxShadow = "none";

    }

});


/* AVATAR 3D EFFECT */

const avatarCard =
    document.querySelector(".avatar-card");

if (avatarCard) {

    avatarCard.addEventListener("mousemove", (e) => {

        const rect =
            avatarCard.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const rotateY =
            ((x / rect.width) - 0.5) * 16;

        const rotateX =
            ((y / rect.height) - 0.5) * -16;

        avatarCard.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.03)`;

    });

    avatarCard.addEventListener("mouseleave", () => {

        avatarCard.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";

    });

}


/* REVEAL ANIMATION */

const revealElements =
    document.querySelectorAll(
        ".section, .stat-card, .service-card, .project-card, .timeline-item"
    );

const revealObserver =
    new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    }, {
        threshold: 0.15
    });

revealElements.forEach(el => {

    el.style.opacity = "0";

    el.style.transform =
        "translateY(40px)";

    el.style.transition =
        "all .8s ease";

    revealObserver.observe(el);

});


/* SMOOTH SCROLL */

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        }

    });

});


/* FLOATING CARD ANIMATION */

const floatingCard =
    document.querySelector(".floating-card");

if (floatingCard) {

    let direction = 1;

    setInterval(() => {

        floatingCard.style.transform =
            `translateY(${direction * 8}px)`;

        direction *= -1;

    }, 1500);

}


/* PARALLAX ORBS */

const orb1 =
    document.querySelector(".orb-1");

const orb2 =
    document.querySelector(".orb-2");

window.addEventListener("mousemove", (e) => {

    const x =
        e.clientX / window.innerWidth;

    const y =
        e.clientY / window.innerHeight;

    if (orb1) {

        orb1.style.transform =
            `translate(${x * 30}px, ${y * 30}px)`;

    }

    if (orb2) {

        orb2.style.transform =
            `translate(${-x * 30}px, ${-y * 30}px)`;

    }

});


/* TYPE EFFECT HERO */

const heroTitle =
    document.querySelector(".hero h2");

if (heroTitle) {

    const text =
        heroTitle.innerText;

    heroTitle.innerText = "";

    let i = 0;

    const typing = setInterval(() => {

        heroTitle.innerText += text.charAt(i);

        i++;

        if (i >= text.length) {

            clearInterval(typing);

        }

    }, 25);

}
