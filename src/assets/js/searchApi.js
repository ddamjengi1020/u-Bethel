import axios from "axios";

const testApi = document.getElementById("jsApiTest");
const testWorshipsUl = document.getElementById("jsWorshipDb");
const testLivesUl = document.getElementById("jsLivesDb");
const testStoriesUl = document.getElementById("jsStoriesDb");
const preBtn = document.getElementById("jsPre");
const nextBtn = document.getElementById("jsNext");

async function handleTest(e) {
  await axios
    .post(`/api/test2`, {
      data: parseInt(e.target.innerText)
    })
    .then(response => (testApi.innerHTML = response.data));
}
// ul.dataset.totalnum
function searchDataApi(ul) {
  let totalData = 1000; //총 데이터 수
  let dataPage = 10; // 한 페이지에 나타낼 데이터 수
  // let pageCount = 10; //한 화면에 나타낼 페이지 수
  let totalPage = Math.ceil(totalData / dataPage); //총 페이지 수
  // let pageGroup = Math.ceil(currentPage / pageCount);
  let num = 1;
  for (let i = 0; i < totalPage; i++) {
    const button = document.createElement("button");
    button.innerText = i + 1;
    if (button.innerText <= dataPage) {
      ul.appendChild(button);
    }
  }

  function handleNext() {
    ++num;
    ul.innerHTML = "";
    for (let i = 0; i < totalPage; i++) {
      const button = document.createElement("button");
      button.innerText = i + 1;
      if (
        button.innerText > dataPage * (num - 1) &&
        button.innerText <= dataPage * num
      ) {
        ul.appendChild(button);
      }
    }
  }

  function handlePre() {
    --num;
    ul.innerHTML = "";
    for (let i = 0; i < totalPage; i++) {
      const button = document.createElement("button");
      button.innerText = i + 1;
      if (
        button.innerText > dataPage * (num - 1) &&
        button.innerText <= dataPage * num
      ) {
        ul.appendChild(button);
      }
    }
  }

  nextBtn.addEventListener("click", handleNext);
  preBtn.addEventListener("click", handlePre);

  const btnArr = Array.from(ul.querySelectorAll("button"));

  btnArr.forEach(el => {
    console.log(btnArr);
    el.addEventListener("click", handleTest);
  });
}

function init() {
  searchDataApi(testWorshipsUl);
  // searchDataApi(testLivesUl);
  // searchDataApi(testStoriesUl);
}

init();
