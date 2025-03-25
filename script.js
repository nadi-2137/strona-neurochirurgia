document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector("header nav");
    const navHeight = navbar.offsetHeight;
    document.querySelector("header").style.paddingTop = navHeight + "px";

    window.addEventListener("scroll", function () {
      if (window.scrollY > navHeight) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });

    document.getElementById("year").textContent = new Date().getFullYear();
  });
