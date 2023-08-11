let textarea = document.querySelector(".textarea");
let string_num = document.querySelector(".string_num");

textarea.addEventListener("keyup", keyup);

function keyup() {
  let inputText = textarea.value;
  string_num.innerText = inputText.length;
}