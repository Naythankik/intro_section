let hamburger = document.querySelector("#hamburger-logo");
let menu = document.querySelector(".menus");

hamburger.addEventListener("click", function (e) {
  let MenuClose = "./images/icon-close-menu.svg";
  let HambMenu = "./images/icon-menu.svg";
  let activeMenu = hamburger.getAttribute("src");

  if (activeMenu == HambMenu) {
    menu.style.display = "grid";
    hamburger.setAttribute("src", MenuClose);
  } else {
    hamburger.setAttribute("src", HambMenu);
    menu.style.display = "none";
  }
});
