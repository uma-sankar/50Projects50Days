const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const decrease = document.querySelector('.decrease');
const increase = document.querySelector('.increase');
const width = document.querySelector('.width');
const colorPicker = document.querySelector('.color');
const clear = document.querySelector('.reset');
let color = 'black';
let size = 20;
let x, y;
let isPressed = false;
function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}
canvas.addEventListener('mousedown', e => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});
canvas.addEventListener('mouseup', e => {
  isPressed = false;
  x = null;
  y = null;
});
canvas.addEventListener('mousemove', e => {
  if (isPressed) {

    let x1 = e.offsetX;
    let y1 = e.offsetY;
    drawCircle(x1, y1);
    drawLine(x, y, x1, y1);
    x = x1;
    y = y1;
  }
})
increase.addEventListener('click', () => {
  size++;
  if (size > 50) {
    size = 50;
  }
  width.innerText = size;
})
decrease.addEventListener('click', () => {
  size--;
  if (size < 1) {
    size = 1;
  }
  width.innerText = size;
})
colorPicker.addEventListener('input', (e) => {
  color = e.target.value;
})
clear.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
})
