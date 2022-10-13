const renderData = (arr) => {
  const scores = document.querySelector('.scores');
  arr.forEach((item) => {
    scores.innerHTML += `<li class="item">${item.user}:${item.score}</li>`;
  });
};

export default renderData;