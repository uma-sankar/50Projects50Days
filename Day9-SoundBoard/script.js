const sounds = ['applause', 'boo','gasp','tada','victory','wrong'];

sounds.forEach(sound =>{
    const buttonContainer = document.querySelector('.button-container');
    const buttonEl = document.createElement('button');
    buttonEl.classList.add('btn');
    buttonEl.textContent = sound;

    buttonEl.addEventListener('click', ()=>{
        stopPlay();
        document.getElementById(sound).play();
        
    });
    buttonContainer.appendChild(buttonEl);
});

function stopPlay(){
  sounds.forEach(sound =>{
      const song = document.getElementById(sound);
      song.pause();
      song.currentTime = 0;
  })
}