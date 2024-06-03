"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector(".navbar-toggle");
  const navbarCollapse = document.querySelector(".navbar-collapse");
  const navbarIcon = document.querySelector(".navopen");

  navbarToggler.addEventListener("click", function () {
    if (!navbarCollapse.classList.contains("collapse")) {
      navbarIcon.src = "assets/images/icon-menu-close.svg";
      navbarCollapse.classList.add("collapse");
      document.querySelector("body").style.overflow = "hidden";
    } else {
      navbarIcon.src = "assets/images/icon-menu.svg";
      navbarCollapse.classList.remove("collapse");
      document.querySelector("body").style.overflow = "visible";
    }
  });
});
