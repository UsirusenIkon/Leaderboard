const renderData = (arr) => {
  const scores = document.querySelector('.scores');
  arr.forEach((item) => {
    scores.innerHTML += `<li class="item flex"><span>${item.user}</span>
    <span>${item.score}</span></li>`;
  });
};

export default renderData;