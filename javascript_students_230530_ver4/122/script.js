const character = document.querySelector(".character");

document.addEventListener("mousedown", () => {
  document.addEventListener("mousemove", onMouseMove);

  document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", onMouseMove);
  })
})

function onMouseMove(e) {
  character.style.left = `${e.clientX - 100}px`;
  character.style.top = `${e.clientY - 100}px`;
}