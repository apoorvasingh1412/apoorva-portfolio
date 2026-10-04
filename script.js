const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link, .mobile-contact");

function toggleMenu() {
    const isOpen = navMenu.classList.toggle("active");

    hamburger.classList.toggle("active", isOpen);
    hamburger.setAttribute("aria-expanded", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
}

// Open and close menu using the same hamburger
hamburger.addEventListener("click", toggleMenu);

// Close menu after clicking any navigation link
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
    });
});

// Close menu with Escape key
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
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