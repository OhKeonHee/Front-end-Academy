const today = new Date();
document.querySelector("#main").innerHTML = `
  <h1>오늘 ${today.getMonth() + 1} / ${today.getDate()} 의 날씨</h1>
  <p>서울은 맑음</p>
`