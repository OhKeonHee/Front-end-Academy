// ##### 기본 캔버스 지정 #####
// const canvas = document.querySelector("canvas");
// const ctx = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight

// ================================================

// // destination
// ctx.fillStyle = "#ccc"
// ctx.fillRect(100, 50, 100, 100);

// ctx.globalCompositeOperation = "lighten";

// // source
// ctx.fillStyle = "red";
// ctx.beginPath();
// ctx.arc(180, 120, 50, 0, Math.PI * 2, false);
// ctx.fill();

// ### globalCompositeOperation 타입 종류
//  source-over
//  : source를 destination 위에 배치
//  source-in
//  : 교집합
//  source-out
//  : source - 교집합
//  source-atop
//  : 교집합 & destination 불투명
//  lighten / darken
//  : 교집합 색 밝게/어둡게
//  copy
//  : 나중에 그린 요소만
//  xor
//  : 교집합 투명

// ############### 글씨 위에 이미지 씌우기
// ctx.beginPath();
// ctx.font = "bold 300px sans-serif";
// ctx.fillText("GOOD", 100, 320);

// ctx.globalCompositeOperation = "source-in";

// ctx.beginPath();
// let img = new Image();
// img.onload = function() {
//   ctx.drawImage(img, 0, 0, 1200, 600);
// }

// img.src = "/flower.jpg";
//#####################

// ###################### Math.random을 활용한 원 20개 그리기 ######################
// function Circle(x, y, radius, color) {
//   this.x = x;
//   this.y = y;
//   this.radius = radius;
//   this.color = color;

//   this.draw = function() {
//     ctx.beginPath();
//     ctx.fillStyle = this.color;
//     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//     ctx.fill();
//   }
// }

// const objs = [];
// for(let i = 0; i < 20; i++) {
//   const radius = Math.floor(Math.random() * 50) + 10;
//   const x = Math.random() * (canvas.width - radius * 2) + radius;
//   const y = Math.random() * (canvas.height - radius * 2) + radius;
//   const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
//   objs.push(new Circle(x, y , radius, color));
// }

// for(let i = 0; i < objs.length; i++) {
//   objs[i].draw();
// }