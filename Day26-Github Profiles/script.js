const APIURL = 'https://api.github.com/users/';
const form = document.querySelector('.user-form');
const input = document.querySelector('input');
const main = document.querySelector('.main');

async function getUser(userName) {
  try {
    const { data } = await axios.get(APIURL + userName);
    createCard(data);
    getrepos(userName);
  } catch (error) {
    console.log(error);
    if (error.response.status == 404) {
      createErrorCard('No Profile found with username');
    }
  }

}
async function getrepos(userName) {
  try {
    const { data } = await axios.get(APIURL + userName + '/repos?created');
    addRepos(data);
  } catch (error) {
    createErrorCard('Problem occured while fetching repos');
  }

}
function createCard(data) {
  let bio = '';
  if (!data.bio) {
    bio = 'No bio Found';
  }
  else {
    bio = data.bio;
  }
  const cardElement = `
  <div class="card">
        <div>
          <img
            src="${data.avatar_url}"
            alt="${data.name}"
          />
        </div>
        <div class="user-info">
          <h2>${data.name}</h2>
          <p>
          ${bio}
          </p>
          <ul>
            <li>${data.followers}<strong>Followers</strong></li>
            <li>${data.following}<strong>Folowing</strong></li>
            <li>${data.public_repos}<strong>Repos</strong></li>
          </ul>
          <div id="repos"></div>
        </div>
      </div>
  `;

  main.innerHTML = cardElement;
}
function addRepos(repos) {
  const reposEl = document.querySelector('#repos');
  repos.slice(0, 5).forEach(repo => {
    const repoEl = document.createElement('a');
    repoEl.href = repo.html_url;
    repoEl.target = '_blank';
    repoEl.innerText = repo.name;

    reposEl.append(repoEl);
  })
}
function createErrorCard(message) {
  const cardElement = `
  <div class="card">
  <h1>${message}</h1>
  </div>
  `;
  main.innerHTML = cardElement;
}
form.addEventListener('submit', (event) => {

  event.preventDefault();
  const userName = input.value;

  getUser(userName);
})