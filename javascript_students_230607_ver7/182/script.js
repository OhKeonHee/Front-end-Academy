const checkbox = document.querySelector("#checkbox");

checkbox.addEventListener("change", () => {
  const element = document.querySelector(".rect");
  if (element.classList.contains("state-show") === true) {
    element.classList.remove("state-show");
  } else {
    element.classList.add("state-show")
  }
})

const targetEl = document.querySelector(".rect");
targetEl.addEventListener("animationstart", (e) => {
  document.querySelector(".log").innerHTML = `animation 발생 : ` + new Date().toLocaleTimeString();
});
targetEl.addEventListener("animationiteration", (e) => {
  document.querySelector(".log").innerHTML = `animationiteration 발생 : ` + new Date().toLocaleTimeString();
})
