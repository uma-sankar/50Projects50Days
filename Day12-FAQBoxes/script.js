const buttonEls = document.querySelectorAll('button');

buttonEls.forEach(buttonEl => {
  buttonEl.addEventListener('click', (event) => {
    const target = event.target.closest('.faq');
    target.classList.toggle('active');
  })
})