const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-nav");
const mobileViewport = window.matchMedia("(max-width: 700px)");
let lastFocusedElement = document.activeElement;

document.addEventListener("focusin", (event) => {
  lastFocusedElement = event.target;
});

function setMenuOpen(open) {
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.querySelector(".menu-label").textContent = open ? "סגירה" : "תפריט";
}

menuToggle.hidden = false;

menuToggle.addEventListener("click", () => {
  setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});

navigation.addEventListener("click", (event) => {
  const link = event.target.closest("a");
  if (!link || !mobileViewport.matches) return;

  setMenuOpen(false);
  const destination = document.querySelector(link.hash);
  destination.setAttribute("tabindex", "-1");
  destination.focus({ preventScroll: true });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mobileViewport.matches && menuToggle.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    menuToggle.focus();
  }
});

mobileViewport.addEventListener("change", () => {
  const navigationHadFocus = navigation.contains(lastFocusedElement);
  setMenuOpen(false);
  if (mobileViewport.matches && navigationHadFocus) menuToggle.focus();
});
