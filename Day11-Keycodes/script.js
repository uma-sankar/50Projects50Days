const insert = document.querySelector('.insert');
window.addEventListener('keydown', event =>{
    insert.innerHTML = `<div class="key">${event.key ===' ' ? 'Space': event.key }
    <small>Event.Key</small></div>
  <div class="key">${event.keyCode}
    <small>Event.keyCode</small></div>
  <div class="key">${event.code}
    <small>Event.code</small></div>`;
})