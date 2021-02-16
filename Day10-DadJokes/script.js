const button = document.querySelector('.btn');
const jokeContainer = document.getElementById('joke');
function fetchJoke() {
  fetch('https://icanhazdadjoke.com/',
    {
      headers: {
        Accept: 'application/json'
      }
    }).then(
      response => {
        return response.json();
      }
    ).then(
      (data) => {
        jokeContainer.textContent = data.joke;
      }
    )
}

fetchJoke();
button.addEventListener('click', fetchJoke);