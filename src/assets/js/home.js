const home = document.getElementById("jsHome");
const mainImg = document.getElementById("jsMainImg");
const arrowLeft = document.getElementById("jsArrowLeft");
const arrowRight = document.getElementById("jsArrowRight");
const redLeft = document.getElementById("jsRedLeft");
const redRight = document.getElementById("jsRedRight");
const sliderMaskBox = document.getElementById("jsSliderMaskBox");

const imageList = [
  "icon-img/Slide_img1.png",
  "icon-img/dog2.jpg",
  "icon-img/dog3.jpg"
];

let num = 0;

const img = async num => {
  mainImg.src = await imageList[num];
};

function handleNextImg() {
  num++;
  if (num >= imageList.length) {
    num = 0;
  }
  img(num);
  mainImg.className = `main-img slider${num}`;
}

function handlePreImg() {
  num--;
  if (num < 0) {
    num = imageList.length - 1;
  }
  img(num);
  mainImg.className = `main-img slider${num}`;
}

function handleLeftSlider() {
  if (sliderMaskBox.style.animation) {
    sliderMaskBox.style.animation = "bethelstoryDefault 0.7s linear forwards";
  }
}

function handleRightSlider() {
  sliderMaskBox.style.animation = "bethelstorySlider 0.7s linear forwards";
}

function handleRedLeftArrow() {
  redLeft.src = "icon-img/arrow_red_left.png";
  redLeft.addEventListener("mouseleave", () => {
    redLeft.src = "icon-img/arrow_normal_left.png";
  });
}

function handleRedRightArrow() {
  redRight.src = "icon-img/arrow_red_right.png";
  redRight.addEventListener("mouseleave", () => {
    redRight.src = "icon-img/arrow_normal_right.png";
  });
}

function init() {
  img(num);
  arrowRight.addEventListener("click", handleNextImg);
  arrowLeft.addEventListener("click", handlePreImg);
  redLeft.addEventListener("click", handleLeftSlider);
  redRight.addEventListener("click", handleRightSlider);
  redLeft.addEventListener("mouseover", handleRedLeftArrow);
  redRight.addEventListener("mouseover", handleRedRightArrow);
}

if (home) {
  init();
}
