$(document).ready(function () {
  var menuBtn = $('.header__menu-btn')
  menuBtn.on('click', function () {
    document.querySelector(".header__nav").classList.toggle("header__nav_visible")
    document.querySelector(".header__button").classList.toggle("header__button_visible")
  })
});