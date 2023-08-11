// const input = document.querySelector("#myText");

// input.addEventListener("keyup", () => {
//   let inputText = input.value;
//   document.querySelector(".log").innerText = inputText;
// })

//=============================
// 강사님 ver
const element = document.querySelector("#myText");
element.addEventListener("input", handleChange);

function handleChange(event) {
  const value = event.target.value;
  document.querySelector(".log").innerText = value;
}

