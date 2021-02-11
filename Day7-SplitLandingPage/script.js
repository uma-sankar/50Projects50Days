const leftEl = document.querySelector('.left');
const rightEl = document.querySelector('.right');
const containerEl = document.querySelector('.container');

leftEl.addEventListener('mouseenter', ()=>{
  console.log('leftEl enter');
  containerEl.classList.add('hover-left')
})
leftEl.addEventListener('mouseleave', ()=>{
  console.log('leftEl leaves');
  containerEl.classList.remove('hover-left')
})
rightEl.addEventListener('mouseenter', ()=>{
  console.log('rightEl enter');
  containerEl.classList.add('hover-right')
})
rightEl.addEventListener('mouseleave', ()=>{
  console.log('rightEl leaves');
  containerEl.classList.remove('hover-right')
})

