particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80
    },
    "size": {
      "value": 3
    },
    "move": {
      "speed": 2
    },
    "line_linked": {
      "enable": true
    }
  }
});

const text = "Programmer & Web Developer";
let index = 0;
const speed = 100;

function typeEffect() {

    const element = document.querySelector("header p");

    if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
    }

}

document.addEventListener("DOMContentLoaded", function () {

    document.querySelector("header p").innerHTML = "";
    typeEffect();

});



// Scroll Animation
const sections = document.querySelectorAll("section");

function showSections() {

    const trigger = window.innerHeight * 0.85;

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < trigger) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }

    });

}

window.addEventListener("scroll", showSections);


// Initial Style
sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "1s";

});




// Button Hover Effect
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

    btn.addEventListener("mouseover", () => {

        btn.style.boxShadow = "0 0 20px #38bdf8";

    });

    btn.addEventListener("mouseout", () => {

        btn.style.boxShadow = "none";

    });

});




// Dynamic Background Shapes
const background = document.querySelector(".background");

for (let i = 0; i < 20; i++) {

    const shape = document.createElement("span");

    shape.style.left = Math.random() * 100 + "%";
    shape.style.top = Math.random() * 100 + "%";
    shape.style.width = Math.random() * 25 + "px";
    shape.style.height = shape.style.width;

    background.appendChild(shape);

}

console.log("Ziad Shawky Portfolio Ready 🚀");