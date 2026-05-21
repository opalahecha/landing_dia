"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slider__images__img");
  const leftArrow = document.getElementById("leftArrow");
  const rightArrow = document.getElementById("rightArrow");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("slider__images__img--active", i === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function previousSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  leftArrow.addEventListener("click", previousSlide);
  rightArrow.addEventListener("click", nextSlide);

  showSlide(currentSlide);
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    this.reset();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
