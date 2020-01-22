const searchingIcon = document.getElementById("jsSearchingIcon");
const mainLogo = document.getElementById("jsMainlogo");
const userIcon = document.getElementById("jsUserIcon");
const searchingBar = document.getElementById("jsSearchingBar");
const nipple = document.getElementById("jsSearchingNipple");
const nippleSmall = document.getElementById("jsNippleSmall");
const header = document.getElementById("jsHeader");
function handleHidden() {
  if (searchingBar.className === "searching-bar hidden") {
    searchingBar.classList.remove("hidden");
    nipple.classList.remove("hidden");
    nippleSmall.classList.remove("hidden");
  } else {
    searchingBar.classList.add("hidden");
    nipple.classList.add("hidden");
    nippleSmall.classList.add("hidden");
  }
}

function handleScroll() {
  if (window.scrollY > 0) {
    header.classList.add("header-scroll");
    header.classList.remove("header");
    mainLogo.src = "icon-img/logo_bottom.png";
    searchingIcon.src = "icon-img/search_icon-black.png";
    userIcon.src = "icon-img/preist_icon-black.png";
  } else {
    header.classList.remove("header-scroll");
    header.classList.add("header");
    mainLogo.src = "icon-img/logo_top.png";
    searchingIcon.src = "icon-img/search_icon.png";
    userIcon.src = "icon-img/preist_icon.png";
  }
}

function init() {
  searchingIcon.addEventListener("click", handleHidden);
  window.addEventListener("scroll", handleScroll);
}

init();
