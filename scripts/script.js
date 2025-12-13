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

let startX = 0;
let startY = 0;

lightbox.addEventListener("touchstart", (e) => {
  const touch = e.touches[0];
  startX = touch.clientX;
  startY = touch.clientY;
});

lightbox.addEventListener("touchmove", (e) => {
  if (!startX || !startY) return;

  const touch = e.touches[0];
  const diffX = touch.clientX - startX;
  const diffY = touch.clientY - startY;

  // Swipe down OR horizontal swipe closes lightbox
  if (Math.abs(diffY) > 80 || Math.abs(diffX) > 80) {
    lightbox.classList.remove("show");
    startX = 0;
    startY = 0;
  }
});

lightbox.addEventListener("touchend", () => {
  startX = 0;
  startY = 0;
});


// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();
