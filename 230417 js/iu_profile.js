const btn = document.querySelector("#darkmod");

btn.onclick = function() {
  document.body.classList.toggle("dark");
  if(btn.innerHTML=="다크모드") {
    btn.innerHTML="라이트모드";
  } else if(btn.innerHTML=="라이트모드") {
  btn.innerHTML="다크모드";}
}

const open = document.querySelector("#open");
const modalBox = document.querySelector("#modal-box");

open.addEventListener("click", () => {
  modalBox.classList.toggle("active");
  if(open.innerHTML=="프로필 보기") {
    open.innerHTML="닫기";
  } else if(open.innerHTML=="닫기") {
  open.innerHTML="프로필 보기";}
})