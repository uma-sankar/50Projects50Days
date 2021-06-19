const imageEl = document.querySelector('.image');
const timesEl = document.querySelector('.times');

let times = 0;
imageEl.addEventListener('dblclick', (e) => {
  const heartEl = document.createElement('i');
  heartEl.classList.add('fas');
  heartEl.classList.add('fa-heart');

  const x = e.clientX;
  const y = e.clientY;

  const xOffset = e.target.offsetLeft;
  const yOffset = e.target.offsetTop;
  console.log(x, y, xOffset, yOffset)
  const top = y - yOffset;
  const left = x - xOffset;
  console.log(x, y, xOffset, yOffset, top, left)
  heartEl.style.top = `${top}px`;
  heartEl.style.left = `${left}px`;
  imageEl.append(heartEl);
  times += 1;
  timesEl.textContent = times;

  setTimeout(() => heartEl.remove(), 1000)
})