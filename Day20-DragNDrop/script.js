const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for (let empty of empties) {

  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeaves);
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('drop', dragDrop);
}


function dragStart() {
  this.className += ' hold';
  // setTimeout(function(){
  //   this.className = 'invisible'
  // }, 0)

}
function dragEnd() {

}
function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}
function dragOver(e) {
  e.preventDefault();
}
function dragLeaves(e) {
  this.className = 'empty';
}
function dragDrop() {
  this.append(fill);
}