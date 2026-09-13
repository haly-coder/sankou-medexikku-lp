document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.getElementById("nav-toggle");
const siteNav = document.getElementById("site-nav");

navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const scrollCue = document.getElementById("scroll-cue");
if (scrollCue) {
  const hideCue = () => scrollCue.classList.add("is-hidden");
  const autoHideTimer = setTimeout(hideCue, 3000);
  window.addEventListener(
    "scroll",
    () => {
      clearTimeout(autoHideTimer);
      hideCue();
    },
    { once: true, passive: true }
  );
}
