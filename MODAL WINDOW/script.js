"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnclosemodal = document.querySelector(".close-modal");
const btnsOpenmodal = document.querySelectorAll(".show-modal");

const Openmodal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closemodal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenmodal.length; i++)
  btnsOpenmodal[i].addEventListener("click", Openmodal);

btnclosemodal.addEventListener("click", closemodal);
overlay.addEventListener("click", closemodal);

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "escape" && !modal.classList.contains("hidden")) {
    closemodal();
  }
});
