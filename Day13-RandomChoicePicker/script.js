const textareaEl = document.getElementById('textarea');
const tagsEl = document.querySelector('.tags');

textareaEl.focus();

textareaEl.addEventListener('keyup', (event)=>{
  // console.log(event.target.value);
  createTags(event.target.value);
  if(event.key === 'Enter'){
      textareaEl.value = '';
      pickRandomTag();
  }
})
function createTags(eventData){
   const tags = eventData.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
   tagsEl.innerHTML = '';
   tags.forEach(tag =>{
      const tagEl = document.createElement('span');
      tagEl.classList.add('tag');
      tagEl.innerText = tag;
      tagsEl.append(tagEl);
   })
}
function pickRandomTag(){
    const times = 30;
    const interval = setInterval(()=>{
        const tag = generateRandomTag();
        highlightclass(tag);
        setTimeout(()=>{
          unHighlightClass(tag)
        },100);

    }, 100);
    setTimeout(()=>{
       clearInterval(interval);
       const tag = generateRandomTag();
       console.log(tag);
       highlightclass(tag);
    },times * 100)
}
function generateRandomTag(){
  const tagscreated = document.querySelectorAll('.tag');
  console.log()
  return tagscreated[Math.floor(Math.random() * tagscreated.length)];
}
function highlightclass(tag){
   tag.classList.add('highlight');
}
function unHighlightClass(tag){
  tag.classList.remove('highlight');
}