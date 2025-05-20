// Navbar Function

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// Scroll Animastion

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_image img", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
    delay: 200,
});

ScrollReveal().reveal(".header_content p", {
    ...scrollRevealOption,
    delay: 400,
});

ScrollReveal().reveal(".header_content .hero", {
    ...scrollRevealOption,
    delay: 600,
});

ScrollReveal().reveal(".header_image_card", {
    duration: 500,
    interval: 300,
    delay: 800,
});