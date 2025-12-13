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

// Lightbox functionality for project images
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");

document.querySelectorAll(".lightbox-img").forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.classList.add("show");
  });
});

lightbox.addEventListener("click", () => {
  lightbox.classList.remove("show");
});


// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();
