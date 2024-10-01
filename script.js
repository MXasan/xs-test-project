"use strict";

const btn = document.querySelectorAll("button"),
  loginP = document.querySelector(".login"),
  closeBtn = document.querySelector(".closePage"),
  //   loginForm = document.querySelector(".loginForm"),
  //   errorMsg = document.querySelector(".errorMsg"),
  //   successMsg = document.querySelector(".successMsg"),
  //   inputs = document.querySelectorAll("input"),
  bodyl = document.querySelectorAll("body");

function openPage() {
  loginP.style.display = "block";
  document.body.style.overflow = "hidden";

  closeBtn.addEventListener("click", () => {
    closePage();
  });
  document.addEventListener("keydown", (e) => {
    if (e.code == "Escape") {
      closePage();
    }
  });
}
function closePage() {
  loginP.style.display = "none";
  document.body.style.overflow = "";
}

btn.forEach((i) => {
  i.addEventListener("click", () => {
    openPage();
    closeBtn.addEventListener("click", () => {
      closePage();
    });
  });
});

const modalTimer = setTimeout(openPage, 5000);
// -----------------------------
