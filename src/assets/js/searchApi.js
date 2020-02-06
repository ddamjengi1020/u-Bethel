import axios from "axios";

const search = document.getElementById("jsSearch");
const worshipList = document.getElementById("jsWorshipList");
const lifeList = document.getElementById("jsLifeList");
const storyList = document.getElementById("jsStoryList");
const worshipsBtn = document.getElementById("jsWorshipPageBtn");
const lifeBtn = document.getElementById("jsLifePageBtn");
const storyBtn = document.getElementById("jsStoryPageBtn");
const preBtn = Array.from(document.querySelectorAll(".jsPre"));
const nextBtn = Array.from(document.querySelectorAll(".jsNext"));

const FIRSTBTN = "<button>1</button>";

async function handleListApi(e, url, list) {
  await axios
    .post(`/api/${url}`, {
      data: parseInt(e.target.innerText)
    })
    .then(response => (list.innerHTML = response.data));
}

function searchDataApi(pageBtn, url, list, btnNum) {
  let totalData = pageBtn.dataset.totalnum; //총 데이터 수
  let dataPage = 10; // 한 페이지에 나타낼 데이터 수
  let pageCount = 10; //한 화면에 나타낼 페이지 수
  let totalPage = Math.ceil(totalData / dataPage); //총 페이지 수
  let num = 1;
  for (let i = 0; i < totalPage; i++) {
    const button = document.createElement("button");
    button.innerText = i + 1;
    if (button.innerText <= pageCount) {
      pageBtn.appendChild(button);
    }
  }

  function handleNext() {
    if (!pageBtn.innerHTML.match(`<button>${totalPage}</button>`)) {
      ++num;
      pageBtn.innerHTML = "";
      for (let i = 0; i < totalPage; i++) {
        const button = document.createElement("button");
        button.innerText = i + 1;
        if (
          button.innerText > pageCount * (num - 1) &&
          button.innerText <= pageCount * num
        ) {
          pageBtn.appendChild(button);
        }
      }
    }
  }

  function handlePre() {
    if (!pageBtn.innerHTML.match(FIRSTBTN)) {
      --num;
      pageBtn.innerHTML = "";
      for (let i = 0; i < totalPage; i++) {
        const button = document.createElement("button");
        button.innerText = i + 1;
        if (
          button.innerText > pageCount * (num - 1) &&
          button.innerText <= pageCount * num
        ) {
          pageBtn.appendChild(button);
        }
      }
    }
  }

  nextBtn[btnNum].addEventListener("click", handleNext);
  preBtn[btnNum].addEventListener("click", handlePre);

  const btnArr = Array.from(pageBtn.querySelectorAll("button"));

  btnArr.forEach(el => {
    el.addEventListener("click", () => handleListApi(event, url, list));
  });

  pageBtn.children[0].click();
}

async function init() {
  worshipsBtn.dataset.totalnum > 0
    ? searchDataApi(worshipsBtn, "test2", worshipList, 0)
    : (worshipsBtn.innerHTML = FIRSTBTN);
  lifeBtn.dataset.totalnum > 0
    ? searchDataApi(lifeBtn, "test3", lifeList, 1)
    : (lifeBtn.innerHTML = FIRSTBTN);
  storyBtn.dataset.totalnum > 0
    ? searchDataApi(storyBtn, "test4", storyList, 2)
    : (storyBtn.innerHTML = FIRSTBTN);
}

if (search) {
  init();
}
