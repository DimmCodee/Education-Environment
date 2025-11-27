// ========== NAVBAR TOGGLE ==========

let menu = document.querySelector('.fa-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};


// ========== GLOBAL REVEAL ANIMATION ==========

const revealElements = document.querySelectorAll(
    `
    h1, h2, h3, p, img, .box, .content, .heading, 
    .about .row, .service .box-container .box, 
    .project .box, .post .box, form, .logo, ul li, button
    `
);

revealElements.forEach((el, index) => {
    el.classList.add('reveal');

    // random effect biar keren
    const randomEffect = Math.floor(Math.random() * 4);

    if (randomEffect === 0) el.classList.add("reveal-left");
    if (randomEffect === 1) el.classList.add("reveal-right");
    if (randomEffect === 2) el.classList.add("reveal-zoom");
    if (randomEffect === 3) el.classList.add("reveal-rotate");

    // stagger muncul satu-satu
    el.style.setProperty("--i", index);
});


function revealOnScroll() {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < windowHeight - 80) {
            el.classList.add("show", "stagger-show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();



// ========== PARALLAX HOME ==========

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const home = document.querySelector(".home");

    home.style.backgroundPositionY = scrollY * 0.3 + "px";
});


gsap.from("header", {
    y: -80,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
});


gsap.from(".home .content h1", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.2
});

gsap.from(".home .content p", {
    opacity: 0,
    y: 40,
    duration: 1,
    delay: 0.5
});

gsap.from(".home .btn", {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.8
});


gsap.utils.toArray("section").forEach((sec) => {
    gsap.from(sec, {
        scrollTrigger: {
            trigger: sec,
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out"
    });
});

gsap.from(".service .box", {
    scrollTrigger: ".service",
    opacity: 0,
    y: 40,
    stagger: 0.2,
    duration: 0.8
});
