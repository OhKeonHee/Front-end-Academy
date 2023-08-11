const el = document.querySelector(".followAnimation");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.body.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
})

function tick() {
  currentX = mouseX;
  currentY = mouseY;

  el.style.transform = `translate(${currentX}px, ${currentY}px)`;
  requestAnimationFrame(tick);
}

tick();