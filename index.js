//Menu
const navToggle = document.querySelector(".menu-bar")
const navMenu = document.querySelector(".nav-menu")


navToggle.addEventListener("click", () => {
    console.log("INFO: nav-menu toggled");
    navMenu.classList.toggle("nav-menu_visible");
});

