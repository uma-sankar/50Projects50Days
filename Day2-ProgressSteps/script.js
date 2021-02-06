let currentActive = 1;
const progress = document.getElementById('progress');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const circles = document.querySelectorAll('.circle');

nextButton.addEventListener('click',()=>{
    currentActive++; 
    if(currentActive > circles.length){
       currentActive = circles.length;
    }
    console.log(currentActive);
    update();
})
prevButton.addEventListener('click',()=>{
  currentActive--; 
  if(currentActive < 1){
     currentActive = 1;
  }
  update();
})

function update(){
    circles.forEach((circle,index)=>{
       if(index < currentActive){
         circle.classList.add('active');
       }else{
         circle.classList.remove('active');
       }
       
    })
    progress.style.width = ((currentActive - 1)/(circles.length - 1)) *100 + '%';
    if(currentActive === 1){
      prevButton.disabled = true;
    }
    else if(currentActive === circles.length){
      nextButton.disabled=true;
    }
    else{
      prevButton.disabled = false;
      nextButton.disabled = false;
    }
  }