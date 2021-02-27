const hourHand = document.querySelector('.needle.hour');
const minuteHand = document.querySelector('.needle.minute');
const secondHand = document.querySelector('.needle.second');
const timeEl = document.querySelector('.time');
const monthEl = document.querySelector('.month');
const dayEl = document.querySelector('.day');
const dateEl = document.querySelector('span');
const monthArray = [
  "jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "aug", "sep", "oct", "nov", "dec"
]
const dayArray = [
  "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"
]
setInterval(setTime, 1000);
function setTime() {
  const currentDate = new Date();

  const hour = currentDate.getHours();
  const hourIn12 = hour % 12;
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  const month = currentDate.getMonth();
  const day = currentDate.getDay();
  const date = currentDate.getDate();
  console.log(date);
  hourHand.style.transform = `translate(-50%,-100%) rotate(${
    scale(hourIn12,0,11,0,360)}deg)`;
  minuteHand.style.transform = `translate(-50%,-100%) rotate(${
    scale(minutes,0,59,0,360)
  }deg)`;
  secondHand.style.transform = `translate(-50%,-100%) rotate(${
    scale(seconds,0,59,0,360)
  }deg)`;
  timeEl.textContent = `${hourIn12 <= 9 ? '0'+hourIn12 : hourIn12}: ${ minutes <= 9 ?'0' + minutes : minutes} 
  ${ hour > 12 ? 'PM' : 'AM'}`;
  monthEl.innerHTML = `${ monthArray[month]} <span class='date' >${date}</span>`;
  dayEl.textContent = dayArray[day];
}
function scale(num, in_min, in_max, out_min, out_max){
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}