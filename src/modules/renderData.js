const renderData = (arr) => {
  const scores = document.querySelector('.scores');
  for (let item of arr) {
    scores.innerHTML += `<li class="item">${item.user}:${item.score}</li>`;
  }
};

export default renderData;