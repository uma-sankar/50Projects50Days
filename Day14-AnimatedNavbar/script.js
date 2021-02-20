const toggleButton = document.getElementById('toggle');
const navabrElement = document.getElementById('navbar');

toggleButton.addEventListener('click', () =>
  navabrElement.classList.toggle('active')
)