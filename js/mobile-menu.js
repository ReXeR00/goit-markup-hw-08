(() => {
  const menuBtnRef = document.querySelector("[data-burger-btn]");
  const mobileMenuRef = document.querySelector("[data-menu-container]");

  menuBtnRef.addEventListener("click", () => {
    body.classList.toggle("modal-open");

    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || "false";

    menuBtnRef.classList.toggle("is-opened");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-opened");
  });
})();
