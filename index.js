const navToggle = document.querySelector(".menu-bar")
const navMenu = document.querySelector(".nav-menu")
console.log("INFO: Script Cargado")


navToggle.addEventListener("click", () => {
    console.log("INFO: nav-menu toggled");
    navMenu.classList.toggle("nav-menu_visible");
});
