import './style.css';
import getData from './modules/getData.js';
import postData from './modules/postData';

//sending data to an api
const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const name = document.querySelector('.user');
  const point = document.querySelector('.point');
  const item = {
    user: name.value,
    score: point.value,
  }
  postData('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2Ikon/scores/', item);
})


const refreshBtn = document.querySelector('.refresh');
refreshBtn.addEventListener('click', () => {
  const scores = document.querySelector('.scores');
  scores.innerHTML = ''
  getData()
  .then(response => response.json())
  .then(data => {
  for(let item of data.result) {
    scores.innerHTML += `<li class="item">${item.user}:${item.score}</li>`
    console.log(item);
  }})
})