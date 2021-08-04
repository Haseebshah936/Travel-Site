let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");
let loginCloseBtn = document.querySelector("#form-close");
let loginPage = document.querySelector(".login-form-container");
let loginBtn = document.querySelector("#login-btn");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector("#menu-bar");
let vidBtn = document.querySelectorAll(".vid-btn");
let vidContainer = document.querySelector("#video-slider");

window.onscroll = () => {
  searchBtn.classList.remove("fa-times");
  searchBar.classList.remove("active");
  menuBtn.classList.remove("fa-times");
  navBar.classList.remove("active");
};

searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("fa-times");
  searchBar.classList.toggle("active");
});

loginBtn.addEventListener("click", () => {
  loginPage.classList.add("active");
});

loginCloseBtn.addEventListener("click", () => {
  loginPage.classList.remove("active");
});

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("fa-times");
  navBar.classList.toggle("active");
});

vidBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".controls .active").classList.remove("active");
    btn.classList.add("active");
    let src = btn.getAttribute("data-src");
    vidContainer.setAttribute("src", src.toString());
    // console.log("Hello", src);
  });
});
