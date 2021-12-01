const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
const overlay = document.getElementById('overlay');
const body = document.querySelector('body');
// DISPLAY MOBILE MENU
const addClass = (element, className) => {
  element.classList.add(className);
};
const removeClass = (element, className) => {
  element.classList.remove(className);
};
const showMobileMenu = () => {
  addClass(hamburger, 'open');
  addClass(mobileMenu, 'display');
  addClass(overlay, 'showOverlay');
};

const closeMobileMenu = () => {
  removeClass(hamburger, 'open');
  removeClass(mobileMenu, 'display');
  removeClass(overlay, 'showOverlay');
};

hamburger.addEventListener('click', showMobileMenu);
closeMenu.addEventListener('click', closeMobileMenu);
overlay.addEventListener('click', closeMobileMenu);
// IMG SLIDER

const slider = document.getElementById('slider');
const mobileSlider = document.getElementById('mobileSlider');

const info1 = document.getElementById('info1');
const info2 = document.getElementById('info2');
const info3 = document.getElementById('info3');
const infoArr = [info1, info2, info3];

const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

let slide = 1;
let numOfImgs = 3;
let widthOfimg = 840;
let widthOfMobileImg = 375;
let prevInfo;
let selectedInfo;

const imgUrls = [
  '../images/desktop-image-hero-1.jpg',
  '../images/desktop-image-hero-2.jpg',
  '../images/desktop-image-hero-3.jpg',
];

const moveLeft = () => {
  slide--;
  if (slide < 1) {
    slider.style.transform = `translate(-${(numOfImgs - 1) * widthOfimg}px)`;
    mobileSlider.style.transform = `translate(-${
      (numOfImgs - 1) * widthOfMobileImg
    }px)`;
    slide = numOfImgs;
    body.style.backgroundImage = `url(${imgUrls[slide-1]})`;
    prevInfo = infoArr[0];
    selectedInfo = infoArr[2];
    removeClass(prevInfo, 'displayed');
    addClass(prevInfo, 'hidden');
    removeClass(prevInfo, 'fadeIn');
    removeClass(selectedInfo, 'hidden');
    addClass(selectedInfo, 'displayed');
    addClass(selectedInfo, 'fadeIn');
  } else {
    body.style.backgroundImage = `url(${imgUrls[slide-1]})`;
    slider.style.transform = `translate(-${(slide - 1) * widthOfimg}px)`;
    mobileSlider.style.transform = `translate(-${
      (slide - 1) * widthOfMobileImg
    }px)`;
    prevInfo = infoArr[slide];
    selectedInfo = infoArr[slide - 1];
    removeClass(prevInfo, 'displayed');
    addClass(prevInfo, 'hidden');
    removeClass(prevInfo, 'fadeIn');
    removeClass(selectedInfo, 'hidden');
    addClass(selectedInfo, 'displayed');
    addClass(selectedInfo, 'fadeIn');
  }
};

const moveRight = () => {
  slide++;
  if (slide > numOfImgs) {
    slider.style.transform = `translate(0px)`;
    mobileSlider.style.transform = `translate(0px)`;
    slide = 1;
    body.style.backgroundImage = `url(${imgUrls[slide-1]})`;
    prevInfo = infoArr[infoArr.length - 1];
    selectedInfo = infoArr[0];
    removeClass(prevInfo, 'displayed');
    addClass(prevInfo, 'hidden');
    removeClass(prevInfo, 'fadeIn');
    removeClass(selectedInfo, 'hidden');
    addClass(selectedInfo, 'displayed');
    addClass(selectedInfo, 'fadeIn');
  } else {
    body.style.backgroundImage = `url(${imgUrls[slide-1]})`;
    slider.style.transform = `translate(-${(slide - 1) * widthOfimg}px)`;
    mobileSlider.style.transform = `translate(-${
      (slide - 1) * widthOfMobileImg
    }px)`;
    prevInfo = infoArr[slide - 2];
    selectedInfo = infoArr[slide - 1];
    removeClass(prevInfo, 'displayed');
    addClass(prevInfo, 'hidden');
    removeClass(prevInfo, 'fadeIn');
    removeClass(selectedInfo, 'hidden');
    addClass(selectedInfo, 'displayed');
    addClass(selectedInfo, 'fadeIn');
  }
};

leftArrow.addEventListener('click', moveLeft);
rightArrow.addEventListener('click', moveRight);
document.addEventListener('keydown', function (e) {
  switch (e.keyCode) {
    case 37:
      moveLeft();
      break;
    case 39:
      moveRight();
      break;
  }
});
