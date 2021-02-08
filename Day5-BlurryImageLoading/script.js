const loaderElement = document.querySelector('p');
const containerElement =document.querySelector('.container');
let loader = 0;
setInterval(() => {
  loader++;
  if (loader > 99) {
    loader = 100;
  }
  loaderElement.textContent = loader + '%';
  loaderElement.style.opacity = scale(loader,0,100,1,0);
  containerElement.style.filter = `blur(${scale(loader, 0,100,30,0)}px)`;
}, 30);


const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}