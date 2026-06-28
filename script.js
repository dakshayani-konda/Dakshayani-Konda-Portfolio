const words = [
    "Java Developer",
    "Backend Enthusiast",
    "DSA Problem Solver",
    "Aspiring SDE Intern"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex);

        charIndex++;

        if (charIndex > currentWord.length) {

            deleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            deleting = false;
            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 110);
}

typeEffect();

/* SCROLL REVEAL */

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

const hiddenElements = document.querySelectorAll(
    ".section,.project-card,.skill-card,.cert-card,.edu-card"
);

hiddenElements.forEach((el) => observer.observe(el));

/* NAVBAR SHADOW */

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 40) {
        navbar.style.boxShadow =
            "0 5px 25px rgba(0,0,0,0.35)";
    } else {
        navbar.style.boxShadow = "none";
    }
});

/* CONTACT FORM */

const form = document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const button = form.querySelector("button");

        button.innerText = "Message Sent ✓";
        button.style.background = "#22c55e";

        setTimeout(() => {

            button.innerText = "Let's Connect";

            button.style.background =
                "linear-gradient(90deg,#38bdf8,#0ea5e9)";

            form.reset();

        }, 2500);

    });
}