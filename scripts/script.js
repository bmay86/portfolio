/* =========================
   Mobile Navigation
========================= */

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("show");
  });
});

/* =========================
   Lightbox + Gallery
========================= */

const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");
const prevBtn = lightbox.querySelector(".prev");
const nextBtn = lightbox.querySelector(".next");

const images = Array.from(document.querySelectorAll(".lightbox-img"));
let currentIndex = 0;

function showImage(index) {
  currentIndex = index;
  lightboxImg.src = images[currentIndex].src;
}

// Open lightbox
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    showImage(index);
    lightbox.classList.add("show");
  });
});

// Next / Previous buttons
prevBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  showImage((currentIndex - 1 + images.length) % images.length);
});

nextBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  showImage((currentIndex + 1) % images.length);
});

// Close on background click
lightbox.addEventListener("click", () => {
  lightbox.classList.remove("show");
});

/* =========================
   Mobile Swipe Support
========================= */

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

  if (Math.abs(diffX) > 80) {
    // swipe left/right = navigate
    diffX > 0
      ? showImage((currentIndex - 1 + images.length) % images.length)
      : showImage((currentIndex + 1) % images.length);

    startX = 0;
    startY = 0;
  }

  if (Math.abs(diffY) > 100) {
    // swipe down = close
    lightbox.classList.remove("show");
    startX = 0;
    startY = 0;
  }
});

lightbox.addEventListener("touchend", () => {
  startX = 0;
  startY = 0;
});

/* =========================
   Footer Year
========================= */

document.getElementById("year").textContent = new Date().getFullYear();
