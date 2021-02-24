const bodyEl = document.body;
const slides = document.querySelectorAll('.slide');
const leftArrow = document.querySelector('.left-arrow')
const rightArrow = document.querySelector('.right-arrow')

let activeSlides = 0;
setBgColor()
function setBgColor() {

  bodyEl.style.backgroundImage = slides[activeSlides].style.backgroundImage;

}

function setActiveSlides() {

  slides.forEach(slide => {
    slide.classList.remove('active');

    slides[activeSlides].classList.add('active');
  })
}

rightArrow.addEventListener('click', () => {
  console.log('clicked..left');
  activeSlides++;
  if (activeSlides >= slides.length) {
    activeSlides = 0;
  }
  setActiveSlides();
  setBgColor();
})
leftArrow.addEventListener('click', () => {
  console.log('clicked..right');
  activeSlides--;
  if (activeSlides < 0) {
    activeSlides = slides.length - 1;
  }
  setActiveSlides();
  setBgColor();
})