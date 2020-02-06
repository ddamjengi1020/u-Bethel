import axios from "axios";

const testApi = document.getElementById("jsApiTest");
const testWorshipsUl = document.getElementById("jsWorshipDb");
const testLivesUl = document.getElementById("jsLivesDb");
const testStoriesUl = document.getElementById("jsStoriesDb");

async function handleTest(e) {
  await axios
    .post(`/api/test2`, {
      data: parseInt(e.target.innerText)
    })
    .then(response => (testApi.innerHTML = response.data));
}

function searchDataApi(ul) {
  let totalData = ul.dataset.totalnum; //총 데이터 수
  let dataPage = 10; // 한 페이지에 나타낼 데이터 수
  // let pageCount = 10; //한 화면에 나타낼 페이지 수
  let totalPage = Math.ceil(totalData / dataPage); //총 페이지 수
  // let pageGroup = Math.ceil(currentPage / pageCount);
  for (let i = 1; i <= totalPage; i++) {
    const button = document.createElement("button");
    button.innerText = i;
    ul.appendChild(button);
  }

  const btnArr = Array.from(ul.querySelectorAll("button"));

  btnArr.forEach(el => {
    el.addEventListener("click", handleTest);
  });
}

function init() {
  searchDataApi(testWorshipsUl);
  searchDataApi(testLivesUl);
  searchDataApi(testStoriesUl);
}

init();
