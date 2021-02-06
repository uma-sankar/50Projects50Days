const searchBar = document.querySelector('.searchbar');
const searchButton = document.querySelector('.btn');
const inputEl = document.querySelector('.input');
searchButton.addEventListener('click',()=>{
   searchBar.classList.toggle('active');
   inputEl.focus();
})