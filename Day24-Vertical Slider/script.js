const sliderContainer = document.querySelector('.vertical-slider');
const leftSlider = document.querySelector('.left-slider');
const rightSlider = document.querySelector('.right-slider');
const upButton = document.querySelector('.up');
const downButton = document.querySelector('.down');
const slides = rightSlider.querySelectorAll('div').length;

let activeSlideIndex = 0;

leftSlider.style.top = `-${(slides - 1) * 100}vh`;

upButton.addEventListener('click', changeSlide.bind(this, 'up'));
downButton.addEventListener('click', changeSlide.bind(this, 'down'));


function changeSlide(direction) {

  const sliderHeight = sliderContainer.clientHeight;
  if (direction === 'up') {
    activeSlideIndex++;
    if (activeSlideIndex > slides - 1) {
      activeSlideIndex = 0;
    }
  }
  else if (direction === 'down') {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slides - 1;
    }
  }
  console.log(activeSlideIndex);
  rightSlider.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
  leftSlider.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
}