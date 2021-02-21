const counts = document.querySelectorAll('.counts');

counts.forEach(count =>{
     count.textContent = '0';
     const counterValue = count.dataset.target;
     const interval = setInterval(()=>{
       
       const increment = +counterValue / 200;
       let currentValue = +count.textContent;
       
       if(currentValue < counterValue){
         currentValue = currentValue + increment;
       }
       else{
         currentValue = currentValue;
         clearInterval(interval);
        }
       count.textContent = currentValue;
     },1);
})
