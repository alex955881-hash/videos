/* ===============================
   AUTO IMAGE SLIDER
================================ */
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function showNextSlide() {
  slides[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add("active");
}

setInterval(showNextSlide, 2000);

/* ===============================
   MOBILE SWIPE GESTURE
================================ */
let startX = 0;
const slider = document.getElementById("slider");

slider.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;

  if (startX - endX > 50) {
    showNextSlide();
  }

  if (endX - startX > 50) {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    slides[currentIndex].classList.add("active");
  }
});

/* ===============================
   DARK / LIGHT MODE
================================ */
const themeToggle = document.getElementById("toggleTheme");

// System preference
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.documentElement.dataset.theme = "dark";
}

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.documentElement.dataset.theme = savedTheme;
}

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.dataset.theme;
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = newTheme;
  localStorage.setItem("theme", newTheme);
});

/* ===============================
   THEME COLOR SWITCHER
================================ */
document.querySelectorAll(".color").forEach((color) => {
  color.addEventListener("click", () => {
    const accent = color.dataset.color;
    document.documentElement.style.setProperty("--accent", accent);
    localStorage.setItem("accent", accent);
  });
});

// Load saved accent color
const savedAccent = localStorage.getItem("accent");
if (savedAccent) {
  document.documentElement.style.setProperty("--accent", savedAccent);
}

/* ===============================
   QURAN AUDIO PLAYER
================================ */
const audio = document.getElementById("quran");
const playBtn = document.getElementById("playAudio");

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸ Pause";
  } else {
    audio.pause();
    playBtn.textContent = "▶ Quran";
  }
});

/* ===============================
   SCROLL REVEAL ANIMATION
================================ */
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => observer.observe(el));

/* ===============================
   CONTACT (JSON BASED)
================================ */
const contact = {
  email: "mdabutalhaalif375@gmail.com",
  instagram:
    "https://www.instagram.com/___blue__blooded___?igsh=OGQ5ZDc2ODk2ZA==",
  location: "Bangladesh",
};

const contactCard = document.getElementById("contactCard");

contactCard.innerHTML = `
  <p><strong>Email:</strong> 
    <a href="mailto:${contact.email}">${contact.email}</a>
  </p>
  <p><strong>Instagram:</strong> 
    <a href="${contact.instagram}" target="_blank">Open Profile</a>
  </p>
  <p><strong>Location:</strong> ${contact.location}</p>
`;