// // function addNum(a, b = 매개변수) {
// //   let sum = a + b;
// //   document.write(sum, "<br />");
// // }

// // addNum(2,3 = 인자값); -> 인자값이 있어야 나옴
// let num1 = parseInt(prompt("첫번째 숫자 입력"));
// let num2 = parseInt(prompt("두번째 숫자 입력"));
// addNum(num1, num2);

// function addNum(a, b) {
//   let sum = a + b;
//   document.write(sum, "<br />");
// }
// ####################################################

// let text_1 = prompt("당신의 이름을 적어주세요.");
// let text_2 = prompt("당신의 거주지를 적어주세요.");

// function myFnc(name, area) {
//   document.write(`안녕하세요. ${name}입니다.`, "<br />");
//   document.write(`사는 곳은 ${area}입니다.`, "<br /><br />")
// }

// myFnc(text_1, text_2);

// ########################################################

// let rightId = "korea";
// let rightPw = 1234;

// function login(id, pw) {
//   if(id == rightId) {
//     if(pw == rightPw) {
//       document.write(`${id}님 방문을 환영합니다.`)
//     }else {
//       alert("잘못된 비밀번호입니다.");
//     }
//   }else {
//     alert("존재하지 않는 아이디입니다.");
//   }
// }

// let userId = prompt("아이디를 입력해주세요.");
// let userPw = prompt("비밀번호를 입력해주세요.");

// login(userId, userPw);

//###############################################

// function sum() {
//   let sum = 0;
//   for(let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   document.write(sum); //결과값 : 60 출력
// }

// sum(10, 20, 30);

//###############################################

// return :
// 함수문 안에서 return이 실행된다면, 반복문 break문과 동일하게 코드를 강제로 종료

// 정의문에서 return이 실행된다면, 함수를 호출했을 때의 결과값을 반환!

// let num1 = parseInt(prompt("첫 번째 숫자는?"));
// let num2 = parseInt(prompt("두 번째 숫자는?"));
// let result = addNum(num1, num2);
// alert("두 수를 더한 값은 " + result + "입니다.");

// function addNum(a, b) {
//   // let sum = a + b;
//   // return sum; 👇
//   return a + b;
// }

//##############################################

// function testAvg(e) {
//   let sum = 0;
//   for(let i = 0; i < arrSubject.length; i++) {
//     sum += parseInt(prompt(e[i] + "점수는?"));
//   }
//   let avg = sum / e.length;
//   return avg;
// }

// let arrSubject = ["국어", "수학"];
// let result = testAvg(arrSubject);

// document.write(`평균점수는 ${result}점 입니다.`);

//##############################################

{/* <div id="galleryZone">
    <p>
      <img src="/image/imgfile/pic_1.jpg" alt="" id="photo">
    </p>
    <p>
      <button onclick="gallery(0)">이전</button>
      <button onclick="gallery(1)">다음</button>
    </p>
</div>

let num = 1;
function gallery(event) {
  if(event) {
    if(num == 9) return;
    num++;
  } else {
    if(num == 1) return;
    num--;
  }
  let imgtag = document.getElementById("photo");
  imgtag.setAttribute("src", "/image/imgfile/pic_" + num + ".jpg");
} */}

//##############################################
//재귀함수
// let num = 0;
// function testFnc() {
//   num++
//   document.write(num, "<br />");
//   if(num == 10) return;

//   testFnc();
// }

// testFnc(); 결과값 : 1 ~ 10 쭉 나옴

//##############################################

// let myVar = 100; //전역변수는 온 군데에 영향을 끼침
// test(); // 따라서 결과값 100나옴
// document.write("myVar is " + myVar);  

// function test() {
//   // let myVar = 50; //test함수 내에서만 영향을 끼침
//   myVar = 50; //이러케 쓰면 지역변수가 이길 수 있음 (let을 안쓰는 경우)
// }

//##############################################
// (function() {
//   let num = 100;
//   function menu() {
//     num += 100;
//     alert(num);
//   }
  
//   menu();
// }());


// function menu() {
//   alert(num);
// }
//##############################################
//JS로 스타일 주기 써먹을때 많을듯!!!
function showDetail() {
  document.querySelector(`#desc`).style.display = "block";
  document.querySelector('#open').style.display = "none"
}
function closeDetail() {
  document.querySelector(`#desc`).style.display = "none";
  document.querySelector('#open').style.display = "block"
}

let coverImage = document.querySelector(`#cover`);
coverImage.onclick = function() {
  alert(`아이유 선행 박수받아..`)
}

coverImage.onmouseover = function() {
  coverImage.style.border = "15px solid skyblue"
}
coverImage.onmouseout = function() {
  coverImage.style.border = ""
}