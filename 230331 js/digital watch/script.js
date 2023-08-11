// // setInterval() : 일정한 시간 간격으로 코드를 반복해서 실행하는 메서드 함수
// // clearInterval() : setInterval()메서드를 취소할 때 사용하는 메서드 함수
// // setInterval() : 일정한 시간 후에 코드를 실행하고 종료하는 메서드
// // clearInterval() : setTimeout() 메서드를 제거하는 메서드


// //############시계 만들기
// <body>
//   <div class="wrap">
//     <div class="time hour">00</div>
//     <div class="divider">:</div>
//     <div class="time min">00</div>
//     <div class="divider">:</div>
//     <div class="time sec">00</div>
//   </div>
// </body>

// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }

// .wrap {
//   margin: 10px auto;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   column-gap: 10px;

//   font-size: 48px;
//   font-weight: bold;
// }

// .time {
//   letter-spacing: 5px;
//   text-align: center;
//   width: 80px;
//   color: crimson;
// }
// // const hour = document.querySelector('.hour');
// // const min = document.querySelector('.min');
// // const sec = document.querySelector('.sec');
// // // => 전역 변수 (*Global Variables)

// // function clock() {
// //   const now = new Date();
// //   // => 지역 변수 (*local Variables)

// //   hour.innerText = now.getHours()+"시";
// //   min.innerText = now.getMinutes();
// //   sec.innerText = now.getSeconds();
// // }

// // setInterval(clock, 1000);
//##########################################

//############사용자의 모니터 화면에 따라 달라지는 사진과 너비높이값
// let info = navigator.userAgent.toLowerCase();
// let osImg = null;

// if(info.indexOf('windows') >= 0) {
//   osImg = 'windows.png';
// } else if (info.indexOf('macintosh') >= 0) {
//   osImg = 'macintosh.png';
// } else if (info.indexOf('iphone') >= 0) {
//   osImg = 'iphone.png';
// } else if (info.indexOf('android') >= 0) {
//   osImg = 'android.png';
// }

// document.write("<img src=\"/img/"+ osImg +"\">", "<br />");
// let scr = screen;
// let sc_w = scr.width;
// let sc_h = scr.height;

// document.write("모니터 해상도 너비: " + sc_w + "px", "<br />");
// document.write("모니터 해상도 높이: " + sc_h + "px", "<br />");