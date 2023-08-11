window.addEventListener("resize", resizeHandler);

function resizeHandler() {
  let w = innerWidth;
  let h = innerHeight;

  document.querySelector(".value-width").innerHTML = `가로 길이는 ${w}입니다.`
  document.querySelector(".value-height").innerHTML = `가로 길이는 ${h}입니다.`
}