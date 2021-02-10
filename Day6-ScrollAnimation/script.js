const boxes = document.querySelectorAll('.box');
window.addEventListener('scroll', checkbox);
checkbox();

function checkbox() {
  const triggerPoint = window.innerHeight - 150;
  console.log(triggerPoint);
  boxes.forEach(box=>{
    if(triggerPoint > box.getBoundingClientRect().top){
        box.classList.add('show');
    }
    else{
      box.classList.remove('show');
    }
  })
}