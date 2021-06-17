
let slideLeft = {
  distance: '150%',
  origin: 'right',
  opacity: 0,
  duration: 1000,
  reset: true
};
let slideRight = {
  distance: '150%',
  origin: 'left',
  opacity: 0,
  duration: 1000,
  reset: true
};
ScrollReveal().reveal('.right', slideLeft);
ScrollReveal().reveal('.left', slideRight);