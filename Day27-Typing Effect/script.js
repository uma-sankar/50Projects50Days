const textEl = document.getElementById('text');
let index = 1;
const textElContent = textEl.innerText;
writeText();

function writeText() {
  console.log('writeText called', index);
  textEl.innerText = textElContent.slice(0, index);
  index++;
  if (index > textElContent.length) {
    index = 1;
  }
  setTimeout(writeText, 300);
}



