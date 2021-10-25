const navToggle = document.querySelector(".menu-bar")
const navMenu = document.querySelector(".nav-menu")
console.log("Aloha")


navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visbile");
    console.log("me abri")
} )
