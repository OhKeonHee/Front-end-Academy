const balloon = document.querySelector("#balloon");
const paragraph = document.querySelector(".paragraph");

paragraph.addEventListener("selectstart", () => {
  paragraph.addEventListener("mouseup", (e) => {
    const selectionCharacters = window.getSelection().toString(); // 선택한 구문을 드래그하고 마우스를 땠을 때 선택한 영역을 getSelection()이 갖고 이 요소를 selectionCharacters로 반환하는 toString()

    if(selectionCharacters.length > 0) {
      balloon.innerHTML = selectionCharacters;
      balloon.classList.add("on");
      balloon.style.left = `${e.clientX - balloon.clientWidth / 2}px`
      balloon.style.top = `${e.clientY - balloon.clientHeight * 2}px`
    } else {
      removePopup();
    }
  })
})

balloon.addEventListener("click", removePopup);

function removePopup() {
  balloon.classList.remove("on");
}