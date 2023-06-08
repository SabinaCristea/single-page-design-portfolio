"use strict";

const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider-arrow-left");
  const btnRight = document.querySelector(".slider-arrow-right");

  let curSlide = 3;
  const maxSlide = slides.length;

  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };

  const init = function () {
    goToSlide(3);
  };
  init();

  btnLeft.addEventListener("click", prevSlide);
  btnRight.addEventListener("click", nextSlide);

  document.addEventListener("keydown", function (e) {
    e.key === "ArrowLeft" && prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });
};
slider();
