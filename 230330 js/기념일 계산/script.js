// let 참조변수 = new Date()
// => Date 객체 생성방법

// let today = new Date();
// document.write(today);
// let nowMonth = today.getMonth() + 1;
// nowDate = today.getDate();
// nowDay = today.getDay();

// document.write("<h1>오늘 날짜 정보</h1>");
// document.write(`현재 월: ${nowMonth}`,"<br>");
// document.write(`현재 일: ${nowDate}`,"<br>");
// document.write(`현재 요일: ${nowDay}`,"<br>");

// let classOpen = new Date("2023/2/28");
// let theMonth = classOpen.getMonth() + 1;
// theDate = classOpen.getDate();
// theDay = classOpen.getDay();

// document.write("<h1>개강일 날짜 정보</h1>");
// document.write(`개강월: ${theMonth}`,"<br>");
// document.write(`개강일: ${theDate}`,"<br>");
// document.write(`개강 요일: ${theDay}`,"<br>");

// let today = new Date();
// let nowYear = today.getFullYear();

// let theDate = new Date(nowYear,11,31); //월은 1 줄여줌
// let diffDate = theDate.getTime() - today.getTime();

// let result = Math.ceil(diffDate / (60 * 60 * 24 * 1000));
// document.write(`연말 D-day : ${result} 일 남았습니다,`);


/* D-day */
let now = new Date();
let firstDay = new Date("2023/02/28");
let toNow = now.getTime();
let toFirst = firstDay.getTime();

let passedTime = toNow - toFirst; //mm초로 계산
let passedDay = Math.ceil(passedTime/(24*60*60*1000)); //mm초를 일로 변환
document.querySelector('#accent').innerText = passedDay + "일";

/* D-day function */ //200,1년,500일을 일일이 안만들고 함수로 정의
function calcDate(days) {
  let future = toFirst + days*(24*60*60*1000); 
  let someday = new Date(future); //시간을 시간대로 바꿔줌
  let year = someday.getFullYear();
  let month = someday.getMonth();
  let date = someday.getDate();

  document.querySelector("#date" + days).innerText = year +"년 " + month+"월 " + date +"일";
}
calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);

//##################👆위에 함수로 해버림
// /* 100-day */
// let future = toFirst + 100*(24*60*60*1000); 
// let someday = new Date(future); //시간을 시간대로 바꿔줌
// let year = someday.getFullYear();
// let month = someday.getMonth();
// let date = someday.getDate();

// document.querySelector('#date100').innerText = year +"년 " + month+"월 " + date +"일";

// /* 200-day */
// future = toFirst + 200*(24*60*60*1000); 
// someday = new Date(future);
// year = someday.getFullYear();
// month = someday.getMonth();
// date = someday.getDate();

// document.querySelector('#date200').innerText = year +"년 " + month+"월 " + date +"일";

// /* 365-day */
// future = toFirst + 365*(24*60*60*1000); 
// someday = new Date(future);
// year = someday.getFullYear();
// month = someday.getMonth();
// date = someday.getDate();

// document.querySelector('#date365').innerText = year +"년 " + month+"월 " + date +"일";

// /* 500-day */
// future = toFirst + 500*(24*60*60*1000); 
// someday = new Date(future);
// year = someday.getFullYear();
// month = someday.getMonth();
// date = someday.getDate();

// document.querySelector('#date500').innerText = year +"년 " + month+"월 " + date +"일";
//######################

console.log(someday);