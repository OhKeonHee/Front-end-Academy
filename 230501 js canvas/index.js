// 캔버스에서 스타일을 지정하는 방법!!

// fillStyle = color;
// strokeStyle = color;

// rgb / rgba / 16진수 / 색상이름

// 그라데이션 : 복수의 컬러를 은은하게 사용하고자 할 때 사용하는 스타일 기법

// 1) 선형 그라데이션
// - createLinearGradient(x1, y1, x2, y2);
// - 색 중지점 할당 메서드 : addColorStop(position, color);

// 2) 원형 그라데이션
// - createRadialGradient(x1, y1, r1, x2, y2, r2);


// 패턴 채우기
// - createPattern(Image, type);

// 그림자효과 추가하기
// - 1) shadowOffsetX = x축으로부터 그림자가 얼마나 떨어져 있는가
// - 2) shadowOffsetY = y축으로부터 그림자가 얼마나 떨어져 있는가
// - 3) shadowBlur = 그림자의 밝기여부
// - 3) shadowColor = 그림자의 색상

// 텍스트 선 관련 스타일 속성
// - 1) 선 굵기 속성 : ctx.lineWidth = 값
// - 2) 선의 끝 모양 : lineCap = butt || round || square( square : 선 양쪽 끝에 높이가 선 너비의 1/2인 사각형을 추가!)
// - 3) 선 교차 스타일 : lineJoin = bavel || miter || round

// const canvas = document.querySelector("canvas");
// const ctx = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// ctx.globalAlpha = 0.4;
// ctx.fillStyle = "rgba(255, 0, 0, 0.2)";
// ctx.fillRect(50, 50, 100, 50);

// ctx.fillStyle = "rgb(0, 0, 255)";
// ctx.fillRect(150, 50, 100, 50);

// ctx.fillStyle = "rgb(0, 255, 0)";
// ctx.fillRect(250, 50, 100, 50);

// ctx.fillStyle = "rgb(255, 255, 0)";
// ctx.fillRect(350, 50, 100, 50);

// --------------------- 선형 그라데이션 ---------------------

// let linGrad = ctx.createLinearGradient(0, 0, 0, 200); // top 0 left 0 인 위치에 100X200 사이즈의 상자를 만들때 (시작점인 왼쪽 위 모서리 0, " 0, 사각형 기준 왼쪽하단 모서리 0, 오른쪽 모서리 200)
// linGrad.addColorStop(0, "#000");
// linGrad.addColorStop(0.6, "#fff");
// linGrad.addColorStop(1, "#eee");

// ctx.fillStyle = "linGrad";
// ctx.fillRect(0, 0, 100, 200);

// --------------------- 원형 그라데이션 ---------------------

// let radGrad = ctx.createRadialGradient(55, 60, 10, 80, 90, 100);
// radGrad.addColorStop(0, "white");
// radGrad.addColorStop(0.4, "yellow");
// radGrad.addColorStop(1, "orenge");

// ctx.fillStyle = radGrad;
// ctx.beginPath();
// ctx.arc(100, 100, 80, 0, Math.PI * 2, false);
// ctx.fill();

// --------------------- 패턴 넣기 ---------------------

// let img = new Image();
// img.onload = function() {
//   let pattern = ctx.createPattern(img, "repeat");
//   ctx.fillStyle = pattern;
//   ctx.fillRect(0, 0, 200, 200);
// }

// img.src = "/images/pattern.png";

// --------------------- 그림자 넣기 ---------------------

// let radGrad = ctx.createRadialGradient(55, 60, 10, 80, 90, 100);
// radGrad.addColorStop(0, "white");
// radGrad.addColorStop(0.4, "yellow");
// radGrad.addColorStop(1, "orenge");

// ctx.shadowColor = "#ccc";
// ctx.shadowOffsetX = 15;
// ctx.shadowOffsetY = 20;
// ctx.shadowBlur = 10;

// ctx.fillStyle = radGrad;
// ctx.arc(100, 100, 80, 0, Math.PI * 2, false);
// ctx.fill();

// --------------------- 선 모양 3개 비교 (선의 끝 모양 : lineCap) ---------------------

// const lineCap = ["butt", "round", "square"];

// ctx.strokeStyle = "#222";
// for(let i = 0; i < lineCap.length; i++) {
//   ctx.lineWidth = 15;
//   ctx.lineCap = lineCap[i];
//   ctx.beginPath();
//   ctx.moveTo(50, 50 + i * 30);
//   ctx.lineTo(350, 50 + i * 30);
//   ctx.stroke();
// }

// --------------------- 선 모양 3개 비교 (선 교차 스타일 : lineJoin) ---------------------

// const lineJoin = ["bavel", "miter", "round"];

// for(let i = 0; i < lineJoin.length; i++) {
//   ctx.lineWidth = 20;
//   ctx.lineJoin = lineJoin[i];
//   ctx.beginPath();
//   ctx.moveTo(60, 60 * i + 50);
//   ctx.lineTo(100, 60 * i + 15);
//   ctx.lineTo(140, 60 * i + 50);
//   ctx.stroke();
// }

// --------------------- 그림판 만들기 (선굵기, 색상 변경가능) ---------------------

// const canvas = document.querySelector("canvas");
// const toolbar = document.querySelector("#toolbar");
// const ctx = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// // 마우스보다 밑에서 그림이 그려지기 때문에 밑 2줄 코드 작성
// const canvasOffsetX = canvas.offsetLeft; // 캔버스 기준에서 명확한 X좌표값 가져오기
// const canvasOffsetY = canvas.offsetTop; // 캔버스 기준에서 명확한 y좌표값 가져오기

// let isDrawing = false;
// let lineWidth = 2;

// canvas.addEventListener("mousedown", (e) => {
//   isDrawing = true;
// })
// canvas.addEventListener("mousemove", (e) => {
//   if(!isDrawing) return;
//   ctx.lineWidth = lineWidth; // 밑에 "change"함수를 적용시키기
//   ctx.lineCap = "round";
//   ctx.lineTo(e.pageX - canvasOffsetX, e.pageY - canvasOffsetY); // 윈도우 자체 좌표에서 캔버스 좌표를 빼줘야 마우스가 움직이는 기준으로 그려지기 완성!
//   ctx.stroke();
// })
// canvas.addEventListener("mouseup", (e) => {
//   isDrawing = false;
//   ctx.beginPath(); // 마우스 때면 전에 있던 그림과 안이어지고 새로 그리겠다.
// })

// toolbar.addEventListener("change", (e) => {
//   if(e.target.id === "stroke") {
//     ctx.strokeStyle = e.target.value; // 사용자가 바꾼 색상을 strokeStyle의 값으로 가져와라
//   }
//   if(e.target.id === "lWidth") {
//     lineWidth = e.target.value // 사용자가 바꾼 굵기를 lineWidth의 값으로 가져와라
//   }
// })

// // --지우기 버튼
// toolbar.addEventListener("click", (e) => {
//   if(e.target.id === "reset") {
//     ctx.clearRect(0, 0, canvas.width, canvas.height); // 캔버스 전체넓이 0~캔버스 넓이, 0~캔버스 높이
//   }
// })

// ----------------------------------------------------------------------------


// --------------------- translate(), save(), restore() ---------------------

// const canvas = document.querySelector("canvas");
// const ctx = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// ctx.fillStyle = "#ccc";
// ctx.fillRect(10, 10, 100, 100);

// ctx.save(); // 이 밑 줄부터 저장할게
// ctx.translate(150, 150); // 위치 이동 시키기
// ctx.fillStyle = "#222";
// ctx.fillRect(10, 10, 100, 100);
// ctx.restore(); // 복구할게 // save()와 restore()는 같이 움직임

// ctx.fillStyle = "red"
// ctx.fillRect(50, 50, 80, 20);

// -- 한번더
// const canvas = document.querySelector("canvas");
// const ctx = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// ctx.fillStyle = "#ccc";
// ctx.fillRect(50, 50, 100, 100);

// ctx.save();
// ctx.scale(3,2)
// ctx.strokeRect(20, 70, 100, 50);
// ctx.restore();

// ctx.strokeRect(200, 50, 100, 50);


// --------------------- 버튼 누르면 랜덤색 사각형이 기본 회색 사각형 기준으로 생성되면서 빙글빙글 돌아요

// const canvas = document.querySelector("canvas");
// const ctx = canvas.getContext("2d");
// const button = document.querySelector("button");
// const origin = {
//   x: window.innerWidth / 2,
//   y: window.innerHeight / 2
// }
// const alpha = 0.7;

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// // - 기본 회색 박스
// ctx.fillStyle = "#ccc";
// ctx.fillRect(origin.x, origin.y, 100, 100); 


// button.onclick = function rotateCtx() {
//   let color = randomRGB(); // 콜백함수 사용

//   ctx.globalAlpha = alpha; // 투명도
//   ctx.translate(origin.x, origin.y);
//   ctx.rotate((Math.PI / 180) * 30); //시계방향 30도
//   ctx.fillStyle = color;
//   ctx.fillRect(0, 0, 100, 100);
//   ctx.translate(-origin.x, -origin.y); //원점으로 돌아가야하기 때문
// }

// function randomRGB() { //rgb값이 랜덤으로 가지게
//   let red = Math.floor(Math.random() * 256);
//   let green = Math.floor(Math.random() * 256);
//   let blue = Math.floor(Math.random() * 256);

//   return `rgb(${red}, ${green}, ${blue})`; //콜백하려면 return을 해야죠
// }