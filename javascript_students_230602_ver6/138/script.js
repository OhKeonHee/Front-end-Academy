const box = document.querySelectorAll(".box");

box.forEach((targetBox) => {
  targetBox.addEventListener("click", () => {
    alert(`${targetBox.innerText} 클릭`)
  })
})
