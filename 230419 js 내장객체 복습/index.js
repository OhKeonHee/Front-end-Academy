// 웹 브라우저의 최상위 객체 : window

// 객체 > 속성(프로퍼티) / 기능(메서드)
// 객체.프로퍼티 / 객체.메서드
// window.alert(); // <-- 이게 정석, 하지만 window는 모든객체의 최상위 이기에 생략하는 것이었다.
// 콘솔 창에 window를 치면 많은 함수가 나온다. -> 이걸로 오늘 수업함

// window 객체
// > screen 객체 : .innerWidth / .width
// > navigator 객체 : .userAgent
// > location 객체 : .reload() // 새로고침 알아서

// ------------------------ 01 (popup창 띄우기)
// window.open("popup.html", "popup1","width=320, height=450, left=2000, top=200"); 
// -> popup1이라는 이름을 넣어줘야 기본 웹페이지 내부에서 새창으로 안뜨고 ㄹㅇ popup창으로 창 분할로 뜸

// ------------------------ 01 (popup창 띄우기, 버튼.ver)
// window.open("popup.html", "이벤트팝업","width=600, height=500, left=2000, top=200");


// ------------------------ 02 (버튼을 누르면 popup창 띄우기, 화면 정가운데에 띄우기)
// window.innerWidth; // 우리가 보고있는 화면의 출력되는 너비
// window.print; // 화면 인쇄 창 띄움

// const btn = document.querySelector("button");
// const popWidth = 600;
// const popHeight = 500;

// btn.addEventListener("click", function() {
//   let left = (screen.availWidth - popWidth) / 2; //screen은 내장객체 사용한거임
//   let top = (screen.availHeight - popHeight) / 2;

//   window.open("popup.html", "pop1", `width=${popWidth} height=${popHeight} left=${left} top=${top}`)
// })

// ------------------------ 03 ([navigator 객체 / .userAgent ] 장치에 따른 이미지 변화)
// let info = navigator.userAgent.toLowerCase();
// let osImg = null;

// if (info.indexOf('windows') >= 0) {
//   osImg = 'windows.png'
// } else if(info.indexOf('macintosh') >= 0) {
//   osImg = 'macintosh.png'
// } else if(info.indexOf('iphone') >= 0) {
//   osImg = 'iphone.png'
// } else if(info.indexOf('android') >= 0) {
//   osImg = 'android.png'
// }

// document.write("<img src=\"/image/"+ osImg +"\">");
// let scr = screen;
// let sc_w = scr.width;
// let sc_h = scr.height;

// document.write("모니터 해상도 너비: " + sc_w + "px", "<br />");
// document.write("모니터 해상도 높이: " + sc_h + "px", "<br />");


// ------------------------ 04 (location 객체 / .reload() // 아이디 비번 받기)
// let id = "today";
// let pw = 1234;

// let user_id = prompt("당신의 아이디는?");

// if(id == user_id) {
//   let user_pw = parseInt(prompt("당신의 비밀번호는?"));

//   if(pw == user_pw) {
//     document.write(user_id + "님 반갑습니다");
//   } else {
//     alert("비밀번호가 일치하지 않습니다");
//     location.reload();
//   }
// } else {
//   alert("아이디가 일치하지 않습니다");
//   location.reload();
// }

// ------------------------ 05 (jquery 사용 // 마우스 포인터 따라다니기)
// let pointSize = $(".pointer").width();
// $("#wrap").mousemove(function(e) {
//   $(".pointer").css("top", e.pageY-pointSize);
//   $(".pointer").css("left", e.pageX-pointSize);
//   $(".pointer").fadeIn();
// });

// $("#wrap").on("mouseleave", function() {
//   $(".pointer").fadeOut
// })

// ------------------------ 06 (Date객체)
// Date 객체 : 현 시점의 년도, 월, 일, 날짜, 요일, 시간 등 을 사용하고자 할 때 이용하는 내장객체
// Date 객체 메서드 :
// > toDateString() : Date에서 날짜 부분만 표시할 때
// > toTimeString() : Date에서 시간 부분만 표시할 때

// > 내장되어 있는 Date 객체를 사용하는 방법 : let 참조변수 = new Date()

// 자바스크립트 시간 세계관 :
// > 1초 = 1000밀리초
// > 1분 = 60 * 1000ms
// > 1시간 = 60 * 60 * 1000ms
// > 1일 = 24 * 60 * 60 * 1000ms

// ❗❗❗⛔ 특정 날짜 데이터를 사용하고자 할 때, 월(Month)의 값은 1이 아닌, 0에서 시작 // 월만 그럼
// let today = new Date();
// let nowMonth = today.getMonth() + 1;
// let nowDate = today.getDate();
// let nowDay = today.getDay();

// document.write("<h1>오늘 날짜 정보</h1>");
// document.write("현재 월 : " + nowMonth, "<br />");
// document.write("현재 일 : " + nowDate, "<br />");

// let classOpen = new Date("2023-02-28");
// let theMonth = classOpen.getMonth() + 1;
// let theDate = classOpen.getDate();

// document.write("<h1>개강일 날짜 정보</h1>");
// document.write("현재 월 : " + theMonth, "<br />");
// document.write("현재 일 : " + theDate, "<br />");

// let today = new Date();
// let nowYear = today.getFullYear();

// let theDate = new Date(nowYear, 11, 31); // 월을 주의 // 사실상 이래야 12/31임
// let diffDate = theDate.getTime() - today.getTime();

// let result = Math.ceil(diffDate / (60 * 60 * 24 * 1000));
// document.write("연말 D-Day : " + result + " 일 남았습니다.");

// ------------------------ 07 (기념일 계산기)
// let now = new Date();
// let toNow = now.getTime();

// let firstDay = new Date("2023-04-04");
// let toFirst = firstDay.getTime();

// let passedTime = toNow - toFirst;
// let passedDay = Math.round(passedTime / (24 * 60 * 60 * 1000));
// document.querySelector("#accent span").innerText = passedDay + "일";

// function calcDate(e) {
//   let future = toFirst + e*(24 * 60 * 60 * 1000);
//   let someDay = new Date(future);
//   let year = someDay.getFullYear();
//   let month = someDay.getMonth() + 1;
//   let date = someDay.getDate();
//   document.querySelector("#date" +e).innerText = year + " 년 " + month + " 월 " + date + " 일";
// }
// calcDate(100);
// calcDate(200);
// calcDate(365);
// calcDate(500);

// ------------------------ 08 (디지털 시계 만들기)
// const hour = document.querySelector('.hour');
// const min = document.querySelector('.min');
// const sec = document.querySelector('.sec');

// function clock() {
//   const now = new Date();

//   hour.innerText = now.getHours();
//   min.innerText = now.getMinutes();
//   sec.innerText = now.getSeconds();
// }

// setInterval(clock, 1000); // 1초씩 시간을 업데이트 해줘야하니까 setInterval로 clock함수를 1초씩 가져옴

// ------------------------ 09 (아날로그 시계 만들기)
// setInterval(() => {
//   const now = new Date();

//   const h = now.getHours();
//   const m = now.getMinutes();
//   const s = now.getSeconds();
  
//   const degH = h * (360 / 12) + m * (360 / 12 / 60);
//   const degM = m * (360 / 60);
//   const degS = s * (360 / 60);
  
//   const elementH = document.querySelector(".lineHour");
//   const elementM = document.querySelector(".lineMin");
//   const elementS = document.querySelector(".lineSec");
  
//   elementH.style.transform = `rotate(${degH}deg)`;
//   elementM.style.transform = `rotate(${degM}deg)`;
//   elementS.style.transform = `rotate(${degS}deg)`;
// },1000)

// ------------------------ 10 (만 보 걷기)
// const today = new Date();
// const firstDay = new Date("2023-02-28");
// const result= document.querySelector("#result");

// let passedTime = today.getTime() - firstDay.getTime();
// let passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24));

// result.innerText = passedDay

// ------------------------ 11 (오늘의 날짜 & 시간)
// const today = new Date();

// const displayDate = document.querySelector("#today");

// const year = today.getFullYear();
// const month = today.getMonth() + 1;
// const date = today.getDate();
// const day1 = today.getDay();

// let day2 = " ";
// switch(day1) {
//   case 0 :
//     day2 = "일요일"; break;
//   case 1 :
//     day2 = "월요일"; break;
//   case 2 :
//     day2 = "화요일"; break;
//   case 3 :
//     day2 = "수요일"; break;
//   case 4 :
//     day2 = "목요일"; break;
//   case 5 :
//     day2 = "금요일"; break;
//   case 6 :
//     day2 = "토요일"; break;
// }

// displayDate.innerHTML = `${year}년 ${month}월 ${date}일 ${day2}`

// const displayTime = document.querySelector("#clock");

// let clock = () => {
//   let current = new Date();
//   let hrs = current.getHours();
//   let mins = current.getMinutes();
//   let secs = current.getSeconds();

//   let period = "AM"
//   if(hrs == 0) {
//     hrs = 12;
//   } else if (hrs > 12) {
//     hrs = hrs - 12;
//     period = "PM"
//   }

//   hrs = (hrs < 10) ? "0" + hrs : hrs;
//   mins = (mins < 10) ? "0" + mins : mins;
//   secs = (secs < 10) ? "0" + secs : secs;
//   displayTime.innerText = `${period} ${hrs} : ${mins} : ${secs}`
// }

// setInterval(clock,1000);

// let num = 2.1234

// let maxNum = Math.max(10, 5, 8, 30); //result : 30
// let minNum = Math.min(10, 5, 8, 30); //result : 5
// let roundNum = Math.round(num);//result : 2
// let floorNum = Math.floor(num);//result : 2
// let ceilNum = Math.ceil(num);//result : 3
// let randomNum = Math.random();//result : 1보다 작은 실수형 랜덤 출력
// let piNum = Math.PI;//result : 원주율 π

// document.write(maxNum, "<br />");
// document.write(minNum, "<br />");
// document.write(roundNum, "<br />");
// document.write(floorNum, "<br />");
// document.write(ceilNum, "<br />");
// document.write(randomNum, "<br />");
// document.write(piNum, "<br />");