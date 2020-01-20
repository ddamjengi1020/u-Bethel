const searchingIcon = document.getElementById("jsSearchingIcon");
const searchingBar = document.getElementById("jsSearchingBar");
const Nipple = document.getElementById("jsSearchingNipple");

function handleHidden() {
  if (searchingBar.className === "searching-bar hidden") {
    searchingBar.classList.remove("hidden");
    Nipple.classList.remove("hidden");
  } else {
    searchingBar.classList.add("hidden");
    Nipple.classList.add("hidden");
  }
}

function init() {
  searchingIcon.addEventListener("click", handleHidden);
}

init();
