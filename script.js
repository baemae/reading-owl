// =============================
// Swipe-up / Fade-in / Zoom-in Animations
// =============================
const animatedElements = document.querySelectorAll(".swipe-up, .fade-in, .zoom-in");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  animatedElements.forEach(el => {
    const rectTop = el.getBoundingClientRect().top;

    if (rectTop < triggerBottom) {
      el.classList.add("visible"); // add visible only once
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// =============================
// Mobile Menu
// =============================
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle?.addEventListener("click", () => {
  navLinks?.classList.toggle("active");
});

// =============================
// Login / Signup / Forgot Password Forms
// =============================
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const forgotForm = document.getElementById("forgot-form");

  document.getElementById("to-signup")?.addEventListener("click", (e) => {
    e.preventDefault();
    loginForm?.classList.remove("active");
    signupForm?.classList.add("active");
  });

  document.getElementById("to-login")?.addEventListener("click", (e) => {
    e.preventDefault();
    signupForm?.classList.remove("active");
    forgotForm?.classList.remove("active");
    loginForm?.classList.add("active");
  });

  document.getElementById("to-forgot")?.addEventListener("click", (e) => {
    e.preventDefault();
    loginForm?.classList.remove("active");
    forgotForm?.classList.add("active");
  });

  document.getElementById("back-login")?.addEventListener("click", (e) => {
    e.preventDefault();
    forgotForm?.classList.remove("active");
    loginForm?.classList.add("active");
  });
});
