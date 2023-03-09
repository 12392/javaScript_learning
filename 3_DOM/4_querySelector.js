// select element using query selector

// We can select all like id & class both with queryselector

// const mainHeading = document.getElementById("main-heading");
const mainHeading = document.querySelector("#main-heading");
const header = document.querySelector(".header");

//it will select all the elements having class nav-item
const navItem = document.querySelectorAll(".nav-item")
console.log(navItem)