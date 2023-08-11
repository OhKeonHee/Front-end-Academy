const nameInput = document.querySelector(".name-input");
const warningMessage = document.querySelector(".warning-message");

//input 이벤트 : 해당 노드요소에 value값이 바뀔 때 발생!!
nameInput.addEventListener("input", () => {
  const inputStr = nameInput.value;
  const normalStr = inputStr.toLowerCase();
  
  if(normalStr.includes("test") === true) {
    warningMessage.innerText = "test가 포함되어 있음";
  } else {
    warningMessage.innerText = "";
  }
})