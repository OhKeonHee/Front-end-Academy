//######################## 01
// function changeBackground() {
//   document.body.style.backgroundColor = "green"
// document.body.style.color = "#fff"
// }
// const button = document.querySelector("button");
// button.onclick = changeBackground;

//###########################################################
//클릭 버튼을 클릭했을 때, 알림창도 뜨고, 배경색도 바뀌는 이벤트를 진행
// addEventListener(복수의 이벤트를 적용할 수 있음)
// addEventListener 사용방법 : 선택요소.addEventListener(이벤트명, 함수);

//######################## 02
// const button = document.querySelector("button");

// function changeBackground() {
//   document.body.style.backgroundColor = "green"
// }
// button.addEventListener("click", changeBackground);

//-- toggle .ver
// const button = document.querySelector("button");
// const body = document.querySelector("body");

// function changeBackground() {
//   body.classList.toggle("change");
// }
// button.addEventListener("click", changeBackground);

//######################## 03
// const button = document.querySelector("#btn");

// button.addEventListener("click", () => {
//   // 1.input안에 입력된 텍스트를 알아야함.
//   // 2.해당 텍스트의 개수를 알아야함.
//   // 3.해당 텍스트의 개수의 숫자를 #result에 출력해야함.
//   //------------------------------------------------------
//   // - 1
//   const word = document.querySelector("#word");
//   // - 2
//   let count = word.value.length;
//   // - 3
//   const result = document.querySelector("#result");

//   result.innerText = `${count}`;
// })


//###########################################################
// 이벤트 객체 : 이벤트가 발생하게 되었을 때, 어떤 요소에서 어떤 이벤트가 발생했는지에 대한 정보가 포함된 객체

// 객체 = 속성(*프로퍼티) / 기능 (*메서드 = 함수)

// preventDefault() -> 대표적인 이벤트 객체 내 메서드 : 요소의 기본 속성값을 취소 및 무력화하는 메서드

// 이벤트 객체 > 프로퍼티
// -- 프로퍼티 종류 예시
// pageX : 현재 문서를 기준으로 이벤트가 발생한 가로위치
// pageY : 현재 문서를 기준으로 이벤트가 발생한 세로위치
// target : 이벤트요소.target : 이벤트가 발생한 대상을 반환 / e.target

//######################## 04 (박스 클릭한 좌표 알려줌)
// const box = document.querySelector("#box");

// box.addEventListener("click", function(e) {
//   alert(`이벤트 발생 위치 : ${e.pageX}, ${e.pageY}`)
// })

//###########################################################
// 1.키보드 이벤트
// e.code : 키보드로 입력한 키의 코드 값
// e.key : 키보드로 입력한 키보드 값

//######################## 05 (키보드 누르면 키코드랑 어떤킨지 띄워줌 //신기)
// const body = document.body;
// const result = document.querySelector("#result");

// body.addEventListener("keydown", (e) => {
//   result.innerText = `
//   code: ${e.code},
//   key : ${e.key}
//   `
// })

//######################## 06 (이미지 슬라이더)
// - 우클릭 금지용
// window.addEventListener("contextmenu", function(e) {
//   e.preventDefault();
//   alert("불펌 금지!!")
// })

// const container = document.querySelector("#container");
// const pics = ["pic-1.jpg","pic-2.jpg","pic-3.jpg","pic-4.jpg","pic-5.jpg","pic-6.jpg"];

// container.style.backgroundImage = `url(/img/${pics[0]})`;

// const arrows = document.querySelectorAll(".arrow");
// let i = 0;

// arrows.forEach(function(e) {
//   e.addEventListener("click", (e) => {
//     if(e.target.id === "left") {
//       i--;
//       if(i < 0) {
//         i = pics.length - 1;
//       }
//     } else if (e.target.id === "right") {
//       i++;
//       if(i >= pics.length) {
//         i = 0
//       }
//     }
//     container.style.backgroundImage = `url(/img/${pics[i]})`
//   })
// })

//######################## 07
// const elements = document.querySelectorAll("*");

// // for(let 변수 of 객체) ///for of
// for(let el of elements) {
//   el.addEventListener("click", e => {
//     console.log(`event.target : ${e.target.tagName}, e.currentTarget : ${e.currentTarget.tagName}`),true
//   })
// }

//######################## 08
// const container = document.querySelector("#container");
// const pics = ["pic-1.jpg","pic-6.jpg"];

// container.style.backgroundImage = `url(/img/pic-1.jpg)`;

// container.addEventListener("mouseover", function() {
//   container.style.backgroundImage = `url(/img/pic-6.jpg)`
// })
// container.addEventListener("mouseout", function() {
//   container.style.backgroundImage = `url(/img/pic-1.jpg)`
// })

//######################## 09
// const btn = document.querySelector("#btn");
// const nav = document.querySelector("#nav");

// btn.addEventListener('click', () => {
//   nav.classList.toggle('active');
//   if(btn.innerHTML=="&#9776;") {
//     btn.innerHTML="&#215;";
//   } else if(btn.innerHTML=="&#215;") {
//   btn.innerHTML="&#9776;";}
// })