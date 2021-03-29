$(document).ready(function () {
  var menuBtn = $('.header__menu-btn')
  menuBtn.on('click', function () {
    document.querySelector(".mobile__list").classList.toggle("mobile__list_visible")
  })
});