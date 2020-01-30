const searchingIcon = document.getElementById("jsSearchingIcon");
const mainLogo = document.getElementById("jsMainlogo");
const userIcon = document.getElementById("jsUserIcon");
const searchingBar = document.getElementById("jsSearchingBar");
const nipple = document.getElementById("jsSearchingNipple");
const nippleSmall = document.getElementById("jsNippleSmall");
const header = document.getElementById("jsHeader");
const navName = document.querySelectorAll(".nav-name");

const SCROLL_DOWN = "scroll-down";
const SCROLL_UP = "scroll-up";
const DEFAULT = "default";
const HIDDEN = "hidden";

function handleHidden() {
  if (searchingBar.className === `searching-bar ${HIDDEN}`) {
    searchingBar.classList.remove(HIDDEN);
    nipple.classList.remove(HIDDEN);
    nippleSmall.classList.remove(HIDDEN);
  } else {
    searchingBar.classList.add(HIDDEN);
    nipple.classList.add(HIDDEN);
    nippleSmall.classList.add(HIDDEN);
  }
}

function handleScroll(e) {
  if (e.deltaY > 0) {
    header.classList.add(SCROLL_DOWN);
    header.classList.remove(SCROLL_UP);
    header.classList.remove(DEFAULT);
    for (let i = 0; i < navName.length; i++) {
      navName[i].classList.add(SCROLL_DOWN);
      navName[i].classList.remove(SCROLL_UP);
      navName[i].classList.remove(DEFAULT);
    }
    header.style.animation = "scroll-slider-down 0.3s linear forwards";
    mainLogo.src = "icon-img/벧엘교회_로고_over.png";
    searchingIcon.src = "icon-img/search_icon-black.png";
    userIcon.src = "icon-img/preist_icon-black.png";
  } else if (e.deltaY < 0 && window.scrollY !== 0) {
    header.classList.remove(SCROLL_DOWN);
    header.classList.remove(DEFAULT);
    header.classList.add(SCROLL_UP);
    for (let i = 0; i < navName.length; i++) {
      navName[i].classList.add(SCROLL_UP);
      navName[i].classList.remove(SCROLL_DOWN);
      navName[i].classList.remove(DEFAULT);
    }
    header.style.animation = "scroll-slider-up 0.3s linear forwards";
    mainLogo.src = "icon-img/벧엘교회_로고_over.png";
    searchingIcon.src = "icon-img/search_icon-black.png";
    userIcon.src = "icon-img/preist_icon-black.png";
  } else if (window.scrollY === 0) {
    header.classList.remove(SCROLL_DOWN);
    header.classList.remove(SCROLL_UP);
    header.classList.add(DEFAULT);
    for (let i = 0; i < navName.length; i++) {
      navName[i].classList.remove(SCROLL_UP);
      navName[i].classList.remove(SCROLL_DOWN);
      navName[i].classList.add(DEFAULT);
    }
    header.style.animation = "default 0.3s linear forwards";
    mainLogo.src = "icon-img/logo_top.png";
    searchingIcon.src = "icon-img/search_icon.png";
    userIcon.src = "icon-img/preist_icon.png";
  }
}

function init() {
  searchingIcon.addEventListener("click", handleHidden);
  window.addEventListener("wheel", handleScroll);
}

init();
