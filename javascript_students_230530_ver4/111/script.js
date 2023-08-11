const btn = document.querySelector("#btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  myRequestFullScreen(document.body);
})

function myRequestFullScreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  }
}

const btnExit = document.querySelector("#btnExit");
btnExit.addEventListener("click", (e) => {
  e.preventDefault();
  myCancelFullScreen();
})

function myCancelFullScreen() {
  if(document.exitFullscreen) {
    document.exitFullscreen();
  }
}