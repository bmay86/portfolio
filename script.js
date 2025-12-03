const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// Toggle menu open/close
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active"); // animate into "X"
  navLinks.classList.toggle("show"); // show/hide dropdown
});

// Close menu automatically when clicking a nav link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active"); // reset hamburger
    navLinks.classList.remove("show"); // hide menu
  });
});

// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();
