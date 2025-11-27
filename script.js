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