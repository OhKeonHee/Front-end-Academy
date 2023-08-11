// document.querySelector("#checkbox").addEventListener("click", () => {
//   const rect = document.querySelector(".rect");
//   rect.classList.toggle("state-show");
// })

// ======================
// 강사님 ver
document.querySelector("#checkbox").addEventListener("change", () => {
  const element = document.querySelector(".rect");
  if (element.classList.contains("state-show") === true) {
    element.classList.remove("state-show");
  } else {
    element.classList.add("state-show");
  }
})
