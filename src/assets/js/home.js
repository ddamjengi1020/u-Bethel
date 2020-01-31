const mainImg = document.getElementById("jsMainImg");
const arrowLeft = document.getElementById("jsArrowLeft");
const arrowRight = document.getElementById("jsArrowRight");
const redLeft = document.getElementById("jsRedLeft");
const redLeftArrow = redLeft.querySelector("img");
const redRight = document.getElementById("jsRedRight");
const redRightArrow = redRight.querySelector("img");
const sliderMaskBox = document.getElementById("jsSliderMaskBox");

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

function handleLeftSlider() {
  sliderMaskBox.style.animation = "bethelstoryDefault 1s linear forwards";
}

function handleRightSlider() {
  sliderMaskBox.style.animation = "bethelstorySlider 1s linear forwards";
}

function handleRedLeftArrow() {
  redLeftArrow.src = "icon-img/arrow_red_left.png";
  redLeft.addEventListener("mouseleave", () => {
    redLeftArrow.src = "icon-img/arrow_normal_left.png";
  });
}

function handleRedRightArrow() {
  redRightArrow.src = "icon-img/arrow_red_right.png";
  redRight.addEventListener("mouseleave", () => {
    redRightArrow.src = "icon-img/arrow_normal_right.png";
  });
}

function init() {
  arrowRight.addEventListener("click", handleNextImg);
  arrowLeft.addEventListener("click", handlePreImg);
  redLeft.addEventListener("click", handleLeftSlider);
  redRight.addEventListener("click", handleRightSlider);
  redLeft.addEventListener("mouseover", handleRedLeftArrow);
  redRight.addEventListener("mouseover", handleRedRightArrow);
}

init();
