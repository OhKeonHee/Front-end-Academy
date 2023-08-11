//#########구구단 1~5단
// for (i = 1; i <= 5; i++) {
//   document.write("<h2>" + i + "단" + "</h2>")
//   for (k = 1; k <= 9; k++) {
//     document.write(i + " X " + k + " = " + (i * k) + "<br>");
//   }
//   document.write("<br>");
// }

// ###########테이블 만들기
// let num = 1;
// let t = "<table border=1>";
// for(let i = 1; i <=5; i++) {
//   t+="<tr>";
//   for(let k = 1; k <=5; k++) {
//     t+="<td>" + num + "</td>";
//     num++
//   }
//   t+="</tr>"
// }
// t+="</table>";
// document.write(t);


//####객체 설정하기
//방법 1

// let tv = new Object();
// tv.color = "white";
// tv.price = 300000;
// tv.info = function() {
//   document.write("tv 색상 : " + this.color, "<br />");
//   document.write("tv 가격 : " + this.price, "<br />");
// }

// //방법2

// let car = {
//   color: "black",
//   price: 5000,
//   info: function() {
//     document.write("car 색상 : " + this.color, "<br />");
//   document.write("car 가격 : " + this.price, "<br />");
//   }
// }

// document.write("<h1>TV 객체 매서드 호출</h1>")
// tv.info();
// document.write("<h1>CAR 객체 매서드 호출</h1>")
// car.info();
