document.documentElement.addEventListener("click", function (e) {
   if (!e.target.closest('.user-header')) {
      let user_menu = document.querySelector('.user-header__menu');
      user_menu.classList.remove('_active');
   }
});