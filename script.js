const hamburger = document.getElementById("hamburger");
const closeMenu = document.getElementById("closeMenu");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link, .mobile-contact");

function openMenu() {
    navMenu.classList.add("active");
    hamburger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
}

function hideMenu() {
    navMenu.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
}

hamburger.addEventListener("click", openMenu);

closeMenu.addEventListener("click", hideMenu);

// Close menu after clicking any navigation link
navLinks.forEach(link => {
    link.addEventListener("click", hideMenu);
});

// Close menu with Escape key
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        hideMenu();
    }
});
// CONTACT FORM - opens visitor's email app
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        const mailSubject = encodeURIComponent(subject);
        const mailBody = encodeURIComponent(
            `Hello Apoorva,\n\n${message}\n\nRegards,\n${name}\nEmail: ${email}`
        );

        window.location.href =
            `mailto:apoorvasingh473@gmail.com?subject=${mailSubject}&body=${mailBody}`;
    });
}