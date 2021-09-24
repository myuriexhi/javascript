"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnclosemodal = document.querySelector(".close-modal");
const btnsOpenmodal = document.querySelectorAll(".show-modal");
console.log(btnsOpenmodal);

for (let i = 0; i < btnsOpenmodal.length; i++)
  console.log(btnsOpenmodal[i].textContent);
