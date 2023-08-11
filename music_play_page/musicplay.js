const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const deg = 45;
const len = lists.length-1;
let i = 0;

for(let el of lists) {
  let pic = el.querySelector(".pic");
  el.style.transform = `rotate(${deg*i}deg) translateY(-100vh)`;
  pic.style.backgroundImage = `url(/img/member${i+1}.jpg)`;
  i++;

  let play = el.querySelector(".play");
  let pause = el.querySelector('.pause');
  let load = el.querySelector('.load');

  play.addEventListener("click", e=>{
    e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
    e.currentTarget.closest("article").querySelector("audio").play();
  });

  pause.addEventListener("click", e=> {
    e.currentTarget.closest("article").querySelector(".pic").classList.remove("on");
    e.currentTarget.closest("article").querySelector("audio").pause();
  });

  load.addEventListener("click", e=> {
    e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
    e.currentTarget.closest("article").querySelector("audio").load();
    e.currentTarget.closest("article").querySelector("audio").play();
  });

  
};

/* 회전액션 */
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");

let num = 0;

prev.addEventListener("click", () => {
  num++;
  frame.style.transform = `rotate(${deg*num}deg)`;

  (active == 0) ? active = len : active--;
  activation(active, lists)
})

next.addEventListener("click", () => {
  num--;
  frame.style.transform = `rotate(${deg*num}deg)`;

  (active == len) ? active = 0 : active++;
  activation(active, lists)
})

/* 가운데 있는 패널 활성화 */
let active = 0;

function activation(index, lists) {
  for(let el of lists) {
    el.classList.remove("on");
  }
  lists[index].classList.add("on");
}