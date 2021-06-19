const numberSel = document.getElementById('number');
const rangeSel = document.getElementById('range');
const submitBtn =  document.getElementById('submit');
const passwordEl = document.getElementById('password');
const uppercaseEl = document.getElementById('uppercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const LOWER_CHARS = fromLowToHigh(97,122);
const UPPER_CHARS = fromLowToHigh(65,90);
const NUMBERS = fromLowToHigh(48,57);
const SYMBOLS = fromLowToHigh(33,47).concat(fromLowToHigh(58,64)).concat(fromLowToHigh(91,96)).concat(fromLowToHigh(123,126));
let syncCharacterAmount = (e)=>{
   let value= e.target.value;
   numberSel.value = value;
   rangeSel.value = value;

}
let generatePassword = () =>{
   let characterCount = numberSel.value;
   let charcodes= LOWER_CHARS;
   let generatedPassword = ""
  //  console.log('uppercase ' + uppercaseEl.checked);
  //  console.log('numbers ' + numbersEl.checked);
  //  console.log('symbols ' + symbolsEl.checked);
   if(uppercaseEl.checked){
     charcodes = charcodes.concat(UPPER_CHARS);
   }
   if(numbersEl.checked){
     charcodes = charcodes.concat(NUMBERS);
   }
   if(symbolsEl.checked){
     charcodes = charcodes.concat(SYMBOLS);
   }
   for (i=1 ; i<= characterCount; i++){
       let generatedChar = charcodes[Math.floor(Math.random() * charcodes.length)];
       generatedPassword = generatedPassword + generatedChar;
   }
   console.log(generatedPassword);
   passwordEl.value = generatedPassword;
}

function fromLowToHigh(low, high){
  let array = [];
  for(let i = low ; i<=high ; i++){
      array.push(String.fromCharCode(i));
  }
  return array;
}
numberSel.addEventListener('input', syncCharacterAmount);
rangeSel.addEventListener('input', syncCharacterAmount);
submitBtn.addEventListener('click', generatePassword);