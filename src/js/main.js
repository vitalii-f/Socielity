"use strict";

const burgerMenu = document.getElementsByClassName("menu-burger")[0];
const headerNav = document.getElementsByClassName("nav")[0];
const headerNavBackground = headerNav.getElementsByTagName("ul")[0];
const navLink = headerNavBackground.getElementsByTagName("li");

for (let link of navLink) {
    link.addEventListener("click", e => {
        e.stopPropagation();
    });
};

burgerMenu.addEventListener("click", e => {
    burgerMenu.classList.toggle("active");
    headerNav.classList.toggle("active");
});

headerNavBackground.addEventListener("click", e => {
    burgerMenu.classList.remove("active");
    headerNav.classList.remove("active");
});