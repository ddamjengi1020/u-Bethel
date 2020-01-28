const mainImg = document.getElementById("jsMainImg");
const arrowLeft = document.getElementById("jsArrowLeft");
const arrowRight = document.getElementById("jsArrowRight");

const imageList = [
  "icon-img/Slide_img1.png",
  "icon-img/dog2.jpg",
  "icon-img/dog3.jpg"
];

let num = 0;
mainImg.src = imageList[0];

function handleNextImg() {
  num++;
  if (num >= imageList.length) {
    num = 0;
  }
  mainImg.src = imageList[num];
  mainImg.className = `main-img slider${num}`;
}

function handlePreImg() {
  num--;
  if (num < 0) {
    num = imageList.length - 1;
  }
  mainImg.src = imageList[num];
  mainImg.className = `main-img slider${num}`;
}

function init() {
  arrowRight.addEventListener("click", handleNextImg);
  arrowLeft.addEventListener("click", handlePreImg);
}

init();
