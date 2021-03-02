const rippleButton = document.querySelector('.ripple');

rippleButton.addEventListener('click', (e) => {
  const x = e.offsetX;
  const y = e.offsetY;
  console.log(x, y);

  const el = document.createElement('span');
  el.classList.add('circle');
  el.style.top = y + 'px';
  el.style.left = x + 'px';

  rippleButton.appendChild(el);

  setTimeout(() => {
    el.remove();
  }, 500);
})