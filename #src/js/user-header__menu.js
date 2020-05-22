
let user__icon = document.querySelector('.user-header__icon');
user__icon.addEventListener("click", function (e) {
   let user_menu = document.querySelector('.user-header__menu');
   user_menu.classList.toggle('_active');
});