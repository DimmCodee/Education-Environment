// ========== NAVBAR TOGGLE ==========
let menu = document.querySelector('.fa-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

// ========== GSAP ANIMASI TANPA TUBRUKAN CSS ==========
document.addEventListener("DOMContentLoaded", () => {

    // Header muncul dari atas
    gsap.from("header", {
        y: -80,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
    });

    // Home section animasi
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

    // Animasi per section
    gsap.utils.toArray("section").forEach((sec) => {
        gsap.from(sec, {
            scrollTrigger: {
                trigger: sec,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            y: 60,
            duration: 1,
            ease: "power3.out"
        });
    });

    // Animasi box services
    gsap.from(".service .box", {
        scrollTrigger: ".service",
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out"
    });

});


// ========== PARALLAX HOME ==========
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const home = document.querySelector(".home");

    if (home) {
        home.style.backgroundPositionY = scrollY * 0.3 + "px";
    }
});
