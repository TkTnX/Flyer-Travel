const burgerBtn = document.querySelector("#menu_btn");
const burgerMenu = document.querySelector("#mobile-list-inner");
const closeBurgerMenu = document.querySelector("#closeBtn-header");

burgerBtn.addEventListener("click", () => {
  burgerMenu.classList.toggle("burger-menu-open");
  console.log(123);
});

closeBurgerMenu.addEventListener("click", () => {
  burgerMenu.classList.remove("burger-menu-open");
});
