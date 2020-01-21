const searchingIcon = document.getElementById("jsSearchingIcon");
const searchingBar = document.getElementById("jsSearchingBar");
const Nipple = document.getElementById("jsSearchingNipple");
const header = document.getElementById("jsHeader");

function handleHidden() {
  if (searchingBar.className === "searching-bar hidden") {
    searchingBar.classList.remove("hidden");
    Nipple.classList.remove("hidden");
  } else {
    searchingBar.classList.add("hidden");
    Nipple.classList.add("hidden");
  }
}

function handleScroll() {
  if (window.scrollY > 0) {
    header.classList.add("header-scroll");
    header.classList.remove("header");
  } else {
    header.classList.remove("header-scroll");
    header.classList.add("header");
  }
}

function init() {
  searchingIcon.addEventListener("click", handleHidden);
  window.addEventListener("scroll", handleScroll);
}

init();
