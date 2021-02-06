const containerEl = document.querySelector('.container');
const circleConatinerEl = document.querySelector('.circle');
const openButton = document.getElementById('open');
const closeButton = document.getElementById('close');

openButton.addEventListener('click',()=>{
  console.log('button clicked');
     containerEl.classList.add('rotate');
     circleConatinerEl.classList.add('rotate-circle');
})
closeButton.addEventListener('click',()=>{
  containerEl.classList.remove('rotate');
  circleConatinerEl.classList.remove('rotate-circle');
})