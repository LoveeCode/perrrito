// Esperar 3 segundos antes de mostrar la navbar
window.addEventListener("load", function() {
    setTimeout(function() {
        const navbar = document.getElementById("navbar");
        navbar.classList.add("visible");
    }, 3000); // 3000ms = 3 segundos
});

// Manejo del scroll para cambiar el color de la navbar y resaltar el enlace activo
document.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    let currentSection = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(currentSection)) {
            link.classList.add("active");
        }
    });
});

// Manejo del menú hamburguesa
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});

// Cerrar el menú al hacer clic en un enlace
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function() {
        navLinks.classList.remove("active");
    });
});
