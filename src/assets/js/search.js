const search = document.getElementById("jsSearch");
const searchAll = document.getElementById("jsSearchAll");
const searchWorship = document.getElementById("jsSearchWorship");
const searchLife = document.getElementById("jsSearchLife");
const searchStory = document.getElementById("jsSearchStory");
const searchLi = Array.from(document.querySelectorAll(".jsSearchLI"));

const B = "block";
const N = "none";
const LI = "jsSearchLI";

function selectEvents(target) {
  const filter = searchLi.filter(el => {
    return el !== searchLi[searchLi.indexOf(target)];
  });
  filter.forEach(el => {
    el.style.backgroundColor = "";
    el.style.color = "";
  });
  target.style.backgroundColor = "#9e0b0f";
  target.style.color = "white";
}

function displayEvents(a, b, c, d) {
  searchAll.style.display = a;
  searchWorship.style.display = b;
  searchLife.style.display = c;
  searchStory.style.display = d;
}

function handleSearchNavBtn(e) {
  switch (e.target.className) {
    case `searchAll ${LI}`:
      displayEvents(B, N, N, N);
      selectEvents(e.target);
      break;
    case `searchWorship ${LI}`:
      displayEvents(N, B, N, N);
      selectEvents(e.target);
      break;
    case `searchLife ${LI}`:
      displayEvents(N, N, B, N);
      selectEvents(e.target);
      break;
    case `searchStory ${LI}`:
      displayEvents(N, N, N, B);
      selectEvents(e.target);
      break;
    default:
  }
}

function init() {
  searchLi.forEach(function(element) {
    element.addEventListener("click", handleSearchNavBtn);
  });
  displayEvents(B, N, N, N);
  selectEvents(searchLi[0]);
}

if (search) {
  init();
}
