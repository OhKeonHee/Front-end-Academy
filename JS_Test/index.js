// ** 자바스크립트의 조건문
// if : 참일때, 명령문 실행
// else : 거짓일 때
// else if : 첫번째 조건이 부정일 때, 실행
// ==============================================================
// Q. 철수 나이에 대한 출력 (철수란 이름과 학원도 정의해줘라)
// const profile = {
//   name : "철수",
//   academy : "그린아카데미",
//   age : parseInt(prompt("나이를 입력해주세요"))
// }

// if (profile.age >= 20) {
//   alert("성인입니다");
// } else if (profile.age >= 8) {
//   alert("학생입니다");
// } else {
//   alert("어린이입니다");
// }

// ** 자바스크립트의 반복문
// - 패턴이 존재하는 반복적인 작업을 해야할 때 사용하는 명령어
// - while문 잊어라
// - for문 클래식 : for(1. 초기값; 2. 조건식; 4. 증감문) { 3. 반복할 실행문 }
// - 초기값 : 거의 대부분 let 키워드를 사용해서 "변수"로 지정 / 0부터 시작하는게 대부분
// - 조건식 : 몇 번 반복할 것인가를 정의 => 반복하고자 하는 수 정의 => 배열 혹은 객체의 개수만큼 반복 / 배열 혹은 객체명.length

// ==============================================================
// Q. green이라는 어린이집에 철수, 영희, 훈이, 민수, 민지가 다니고 있다
//   green 어린이집 친구들을 한명 씩 콘솔창에 출력해라

// let green = ["철수", "영희", "훈이", "민수", "민지"]

// for(let i = 0; i < green.length; i++) {
//   console.log(green[i]);
// }

// ==============================================================
// Q. 핸드폰 인증번호 6자리랜덤
// let number = Math.floor(Math.random() * 1000000);
// console.log(number)

// ==============================================================
// Q. 사용자로부터 3개의 값을 받기
//    해당 숫자 3개 중 가장 작은 값을 콘솔창에 출력!
//    단, 수학객체 Math.min()을 사용하지 않고 조건식으로만 해당 값을 구해라

// let num1 = parseInt(prompt("첫 번째 숫자 입력"));
// let num2 = parseInt(prompt("두 번째 숫자 입력"));
// let num3 = parseInt(prompt("세 번째 숫자 입력"));

// function solution(a, b, c) {
//   if (a < b) {
//     answer = a;
//   } else {
//     answer = b;
//   }

//   if (c < answer) {
//     answer = c;
//   }

//   return answer;
// }

// console.log(solution(num1, num2, num3))

// ==============================================================
// Q. 삼각형 판별하기
//    사용자로부터 3개의 값을 받기 (삼각형의 3변)
//    해당 값을 통해 삼각형을 만들 수 있다면, 콘솔창에 Yes 출력
//    없다면, 콘솔창에 No 출력

// let num1 = parseInt(prompt("첫 번째 변 길이 입력"));
// let num2 = parseInt(prompt("두 번째 변 길이 입력"));
// let num3 = parseInt(prompt("세 번째 변 길이 입력"));

// function solution(a, b, c) {
//   let answer = "YES"
//   let max = ""
//   let tot = a + b + c

//   if(a > b) {
//     max = a;
//   } else {
//     max = b;
//   }

//   if ( c > max) {
//     max = c;
//   }

//   if (tot - max <= max){
//     answer = "NO"
//   }
//   return answer;
// }

// console.log(solution(num1, num2, num3))

// ==============================================================
// Q. 나눠먹을 수 있는 빵 개수 
//   사용자에게 빵을 몇 개 줄 수 있는지 물어보고 답을 받아주세여.
//   그리고, 우리 16명이 전달받은 빵을 각각 몇개씩 나눠먹을 수 있는지 콘솔창에 출력

// let bread = parseInt(prompt("빵 몇개 줄래?"))

// function solution(e) {
//   if(e < 16) {
//     console.log("좀 더 주시져?");
//   } else {
//     let answer = Math.floor(e / 16);
//     return answer
//   }
// }

// console.log(solution(bread));

// ==============================================================
// Q. N까지 숫자 더하기
//    사용자로부터 특정 숫자 받기
//    그리고 그 숫자만큼 더하기 한 결과를 콘솔에 출력

// let num = parseInt(prompt("숫자 입력"));

// function solution(e) {
//   for(i = 0; i < e; i++) {
//     let answer = (1 + e) * (e / 2);
//     return answer
//   }
// }

// 강사님 ver
// function solution(e) {
//   let answer = 0;
//   for(let i = 0; i <= e; i++) {
//     answer += i;
//   }
//   return answer
// }

// console.log(solution(num));

// ==============================================================

// Q. 배열 [5, 7, 1, 3, 2, 9, 11]
//    해당 배열에서 ❗최소값을 찾아 콘솔창에 출력

// const arr = [5, 7, 1, 3, 2, 9, 11];

// function solution(e) {
//   let answer = "";
//   let max = 12;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < max) {
//       max = arr[i];
//     }

//     answer = max;
//   }
//   return answer;
// }

// console.log(solution(arr));

// ==============================================================

// Q. 배열 [12, 77, 38, 41, 53, 92, 85]
//    홀수 값만 더하기하고, 더한 결과값과 이 중 가장 작은 수만 콘솔창에 출력

// const arr = [12, 77, 38, 41, 53, 92, 85];

// function solution(event) {
//   let answer = [];
//   let sum = 0;
//   let min = Number.MAX_SAFE_INTEGER

//   for(let el of event) {
//     if (el % 2 === 1) {
//       sum += el;
//       if(el < min) {
//         min = el;
//       }
//     }
//   }
//   answer.push(sum);
//   answer.push(min);
//   return answer;
// }

// console.log(solution(arr));

// ==============================================================

// Q. 사용자로부터 이메일과 비밀번호 정보를 받고, 해당 이메일과 비밀번호 정보가 일치하는지 검증하기
//    검증할 이메일 및 비밀번호 : email = email@naver.com / password = 1234

// let email = "email@naver.com";
// let password = "1234"

// let userEmail = prompt("이메일을 입력해줘");
// let userPassword = prompt("비밀번호를 입력해줘");

// function validation(userEmail, userPassword) {
//   if(userEmail !== email && !userEmail.includes("@")){
//     alert("이메일 주소를 다시 확인해주세여⛔")
//     return false
//   } else if (userPassword !== password) {
//     alert("비밀번호를 다시 확인해주세요⛔")
//     return false
//   } else {
//     alert("아이디와 비밀번호가 일치합니다😊")
//     return true
//   }
// }

// console.log(validation(userEmail, userPassword));

// ==============================================================

// Q. 브라우저의 인증번호 전송버튼을 클릭했을 때 인증번호가 표시되도록 만들기

// Ver.1
// <div style="display: flex; gap: 10px;">
//   <div id="target">000000</div>
//   <button onclick="auth()">인증번호 전송</button>
// </div>

// function auth() {
//   let token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
//   document.querySelector("#target").innerText = token;
// }

// Ver.2
// <div style="display: flex; gap: 10px;">
//   <div id="target">000000</div>
//   <button>인증번호 전송</button>
// </div>

// const target = document.querySelector("#target");
// const button = document.querySelector("button");

// button.addEventListener("click", (e) => {
//   e.preventDefault;

//   const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
//   target.innerText = token;
// })

// Q. 브라우저의 인증번호 전송버튼을 클릭했을 때 인증번호가 표시되도록 만들기
//    (인증번호 생성 마다 글자 색상 바뀌기)

// function auth() {
//   const target = document.querySelector("#target")
//   let token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
//   // let colorCode = "#" + Math.round(Math.random() * 0xffffff).toString(16);
//   target.innerText = token;
//   // target.style.color = colorCode;
//   target.style.color = "#" + token;
// }


// Q. 숫자가 0까지만 카운팅이 되고, 멈출 수 있도록 코드를 변경해보세요.

// let time = 10;

// setInterval(function() {
//   if(time >= 0) {
//     console.log(time)
//     time = time -1;
//   }
// }, 1000)


// Q. setinterval() 함수를 활용해서 콘솔창에 3분부터 0초까지 출력이 되게끔 코드를 작성하세요.

// let time = 180;

// setInterval(function() {
//   if(time >= 0) {
//     let min = String(Math.floor(time / 60)).padStart(2, "0");
//     let sec = String(time % 60).padStart(2, "0");

//     console.log(min + ":" + sec)
//     time = time - 1;
//   }
// }, 1000)

// Q. 인증번호 발송 폼 만들기
// const result = document.querySelector("#result");
// const sendBtn = document.querySelector("#send");
// const submitBtn = document.querySelector("#submit");
// const timer = document.querySelector("#timer");
// result.innerText = "000000"

// sendBtn.addEventListener("click", (e) => {
//   e.preventDefault();

//   let rndNum = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
//   result.innerText = `${rndNum}`;
//   result.style.color = `#${rndNum}`;

//   let time = 600;
//   setInterval(function () {
//     if(time >= 0) {
//       let min = Math.floor(time / 60);
//       let sec = String((time % 60)).padStart(2, "0");

//       timer.innerText = min + " : " + sec;
//       time = time - 1;
//     } else {
//       // submitBtn.setAttribute("disabled", "");
//       // ↕ 같음
//       submitBtn.disabled = true;
//     }
//   }, 1000);
// })

// Q. 회원가입 폼 만들기
// let isStarted = false;
// const target = document.querySelector("#target");
// const submit = document.querySelector("#submit");
// const timer = document.querySelector("#timer");
// const finish = document.querySelector("#finish");

// submit.addEventListener("click", (e) => {
//   e.preventDefault();

//   if(isStarted === false) {

//     isStarted = true;
//     const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
//     target.innerText = token;
//     target.style.color = "#" + token;
  
//     let time = 179;

//     setInterval(function() {
//       if(time >= 0) {
//         let min = String(Math.floor(time / 60)).padStart(2, "0");
//         let sec = String(time % 60).padStart(2, "0")
//         time = time - 1
//         timer.innerText = (min + ":" + sec) 
//       } else {
//         finish.disabled = true;
//         isStarted = false;
//       }    
//     }, 1000);
//   } 
// });

// const changefocus1() = () => {
//   let phone1 = document.querySelector("#p1").value;
//   if(phone1.length === 3) {
//     document.querySelector("#p2").focus()
//   }
// }
// const changefocus2() = () => {
//   let phone2 = document.querySelector("#p2").value;
//   if(phone2.length === 4) {
//     document.querySelector("#p3").focus()
//   }
// }
// const changefocus3() = () => {
//   let p1 = document.querySelector("#p1").value;
//   let p2 = document.querySelector("#p2").value;
//   let p3 = document.querySelector("#p3").value;
  
//   if(p1 && p2 && p3) {
//     document.querySelector("button").disabled = false;
//   } else {
//     document.querySelector("button").disabled = true;
//   }
// }

// Q. 비밀번호 확인 폼
// const check = function() {
//   let email = document.querySelector("#email").value;
//   let pw1 = document.querySelector("#password1").value;
//   let pw2 = document.querySelector("#password2").value;

//   if(email && pw1 && pw2) {
//     document.querySelector("#submit").disabled = false
//   } else {
//     document.querySelector("#submit").disabled = true
//   }
// }



// Q. !!! 회원가입 폼 완전체 !!!
// function changePhone1() {
//   const phone1 = document.querySelector("#phone1").value;
//   if(phone1.length === 3) {
//     document.querySelector("#phone2").focus()
//   }
// }
// function changePhone2() {
//   const phone2 = document.querySelector("#phone2").value;
//   if(phone2.length === 4) {
//     document.querySelector("#phone3").focus()
//   }
// }
// function changePhone3() {
//   const phone1 = document.querySelector("#phone1").value;
//   const phone2 = document.querySelector("#phone2").value;
//   const phone3 = document.querySelector("#phone3").value;
//   if(phone1.length === 3 && phone2.length === 4 && phone3.length === 4) {
//     document.querySelector("#token_button").style = "background-color: #fff; color: #0068ff; cursor: pointer;"
//     document.querySelector("#token_button").removeAttribute("disabled")
//   }
// }

// function getToken() {
//   const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
//   document.querySelector("#token").innerText = token;

//   document.querySelector("#token_button").style = "background-color: #fff;"
//   document.querySelector("#token_button").setAttribute("disabled", "true")

//   document.querySelector("#token_timer_confirm_button").style = "background-color: #0068ff; color: #fff; cursor: pointer;"
//   document.querySelector("#token_timer_confirm_button").removeAttribute("disabled");

//   getTokenTimer();
// }

// let interval;
// function getTokenTimer() {
//   let timer = 179;

//   interval = setInterval(() => {
//     if(timer >= 0) {
//       const minutes = String(Math.floor(timer / 60)).padStart(2, "0");
//       const seconds = String(timer % 60).padStart(2, "0");
//       timer -= 1;
  
//       document.querySelector("#token_timer").innerText = minutes + ":" + seconds
//     } else {
//       document.querySelector("#token_timer").innerText = "000000";
//       document.querySelector("#token_button").style = "";
//       document.querySelector("#token_button").setAttribute("disabled", "true");
//       document.querySelector("#token_timer").innerText = "03:00";
//       document.querySelector("#token_timer_confirm_button").style = "";
//       document.querySelector("#token_timer_confirm_button").setAttribute("disabled", "true");
//     }
//   }, 1000) 
// }

// function getTokenTimerConfirm() {
//   clearInterval(interval)
//   document.querySelector("#token_timer_confirm_button").style = "background-color: #fff;";
//   document.querySelector("#token_timer_confirm_button").setAttribute("disabled", "true");
//   document.querySelector("#token_timer_confirm_button").innerText = "인증 완료";
//   alert("인증이 완료되었습니다.")

//   document.querySelector("#signup_button").style = "background-color: #fff; color: #0068ff; border: 1px solid #0068ff; cursor: pointer;";
// }

// function signup() {
//   const email = document.querySelector("#email").value;
//   const writer = document.querySelector("#writer").value;
//   const password1 = document.querySelector("#password1").value;
//   const password2 = document.querySelector("#password2").value;
//   const location = document.querySelector("#location").value;
//   const genderWoman = document.querySelector("#gender_woman").checked;
//   const genderMan = document.querySelector("#gender_man").checked;

//   let isValid = true;
//   if(email.includes("@") === false) {
//     document.querySelector("#error_email").innerText = "이메일이 올바르지 않습니다.";
//     isValid = false;
//   } else {
//     document.querySelector("#error_email").innerText = "";
//   }
//   if(writer === "") {
//     document.querySelector("#error_writer").innerText = "이름이 올바르지 않습니다.";
//     isValid = false;
//   } else {
//     document.querySelector("#error_writer").innerText = "";
//   }
//   if(password1 === "") {
//     document.querySelector("#error_password1").innerText = "비밀번호를 입력해주세요.";
//     isValid = false;
//   } else {
//     document.querySelector("#error_password1").innerText = "";
//   }
//   if(password2 === "") {
//     document.querySelector("#error_password1").innerText = "비밀번호가 일치하지 않습니다.";
//     document.querySelector("#error_password2").innerText = "비밀번호가 일치하지 않습니다.";
//     isValid = false;
//   }
//   if(location !== "서울" && location !== "경기" && location !== "인천") {
//     document.querySelector("#error_location").innerText = "지역을 선택해주세요.";
//     isValid = false;
//   } else {
//     document.querySelector("#error_location").innerText = "";
//   }
//   if(genderWoman === false && genderMan === "false") {
//     document.querySelector("#error_gender").innerText = "성별을 선택해주세요.";
//     isValid = false;
//   } else {
//     document.querySelector("#error_gender").innerText = "";
//   }
  
//   if(isValid === true) {
//     alert("회원가입을 축하합니다.")
//   }
// }

// Q. 사용자로부터 대소문자 구분 없이 입력받고 대문자로 출력하기
// let str = String(prompt("대소문자 상관없이 영단어를 입력해보세요"));

// function solution(e) {
//   let answer = "";
//   for (let el of e) {
//     if (el === el.toLowerCase()){
//       answer += el.toUpperCase();
//     } else {
//       answer += el.toUpperCase();
//     }
//   }
  
//   return answer;
// }

// console.log(solution(str));

// ============================= 대소문자 관련 TEST =========================

// Q. 사용자로부터 대소문자 구분 없이 입력받고 대문자는 소문자로 소문자는 대문자로 출력하기
// let str = String(prompt("대소문자 상관없이 영단어를 입력해보세요"));

// function solution(e) {
//   let answer = "";
//   for (let el of e) {
//     if (el === el.toUpperCase()){
//       answer += el.toLowerCase();
//     } else {
//       answer += el.toUpperCase();
//     }
//   }

//   return answer;
// }

// console.log(solution(str));

// Q. 사용자로부터 대소문자 섞인 영단어를 받고 해당 단어 중 대문자가 총 몇개인지 확인하기
// 내가 .ver (배열로 받아서 갯수 세기)
// let str = String(prompt("대소문자 상관없이 영단어를 입력해보세요"));

// function solution(e) {
//   let answer = [];
//   for (let el of e) {
//     if (el === el.toUpperCase()){
//       answer.push(el);
//     }
//   }

//   return answer.length;
// }

// console.log("[ " + str + " ]" + " 단어에서 대문자는 총 " + solution(str) + "개 입니다.");

// 강사님 .ver (++ -> 증감연산)
// let str = String(prompt("대소문자 상관없이 영단어를 입력해보세요"));

// function solution(e) {
//   let answer = 0;
//   for (let el of e) {
//     if (el === el.toUpperCase()) {
//       answer++;
//     }
//   }

//   return answer;
// }

// console.log("[ " + str + " ]" + " 단어에서 대문자는 총 " + solution(str) + "개 입니다.");

// Q. 사용자로부터 대소문자가 섞인 영단어 받고, 사용자로부터 찾고싶은 단어가 무엇인지 받기
//    화면에 찾고싶은단어, O은 총 OO개 있습니다 출력

// let str = String(prompt("대소문자 상관없이 영단어를 입력해보세요"));
// let word = String(prompt("찾고 싶은 단어는?"));

// function solution(a, b) {
//   let answer = 0;
//   for (let el of a) {
//     if (el === b){
//       answer++;
//     }
//   }

//   return answer;
// }

// console.log("[ " + str + " ]" + " 단어에서 " + word +"는 총 " + solution(str, word) + "개 입니다.");

// Q. 사용자로부터 대문자 A를 받았을 때, 콘솔창에 #으로 출력되게 해주세요.
// (* 단, 소문자 a를 받았을 때에도 동일하게 #이 출력되야댐)
// let str = String(prompt("A또는 a를 #으로 바꾸기"));

// function solution(e) {
//   let answer = e;
//   answer = answer.replace("A", "#");
//   answer = answer.replace("a", "#");

//   return answer;
// }

// console.log(solution(str));


// Q. 자동차 10부제
// ex ) 차번호 1234 / 오늘 (* 17일) / 자동차 끝번호가 7로 끝나는 차는 운행을 하면 안됨
// 1. 사용자로부터 오늘 날짜를 받고, 차량번호 4자리 수를 받는다
// 2. 만약 해당 차량번호가 오늘 10부제에 걸리게 되면,
// "오늘은 차량운행 불가!" 알림창 / "안전운전하세요"

// ***** 내가 한거
// let today = prompt("오늘 날짜 입력");
// let car = prompt("차량번호 4자리 입력");

// function solution(a, b) {
//   let answer = ""
//   let i = a.split("");
//   let j = b.split("");
//   if(i[i.length - 1] == j[j.length - 1]) {
//     answer = "오늘은 차량운행 불가";
//   } else {
//     answer = "안전운전 해라"
//   }
//   return answer
// }
// alert(solution(today, car));

// ***** 강사님 ver
// let today = String(prompt("오늘날짜?"));
// let carNum = String(prompt("차량번호?"));

// function solution(e) {
//   let take = carNum.charAt(3); //3번째 문자
//   if (e !== "") {
//     if (e % 10 == take) {
//       alert(`오늘 차량운행 불가`);
//     } else {
//       alert(`안전운전!`)
//     }
//   }
// }
// solution(today)

// Q. 사용자로부터 영어단어를 입력받으세요!
//   그리고, 콘솔창을 통해 해당 영단어의 가운데 문자만 출력되도록 코드를 완성하세요!!
//   * 만약 짝수일 경우, 가운데 2개 문자열이 출력되도록 완성하세요
// let engtxt = prompt("영단어 입력해라");

// function solution(s) {
//   let strLength=s.length;
//   let start=Math.round(s.length/2)-1;
  
//   if(strLength%2==1){
//       return s.slice(start,start+1)
//   }
//   else{
//       return s.slice(start,start+2)
//   }
// }
// console.log(solution(engtxt));

// Q. [good, time, good, time, student]
//   위 배열객체에서 중복되는 단어를 제거한 상태로 콘솔창에 아래 배열객체를 출력해주는 코드를 작성
//   정답 : [good, time, student]

// const arr = [good, time, good, time, student];

// function solution(e) {
//   let answer = "";
//   answer = e.filter((v, i) => {
//     return e.indexOf(v) === i;
//   })

//   return answer;
// }

// Q. 다음 2개의 배열객체를 오름차순 정렬 형태로 합쳐서 콘솔창에 출력하세요.
// let a = [1, 3, 5]
// let b = [2, 3, 6, 7, 9];

// ===== 나의 풀이 (set을 이용해 중복된 값 제거, 전개연산자...을 사용)
// let arr = [...a, ...b]
// let result = arr.sort(function(a, b) {
//   return a - b;
// });

// console.log([...new Set(result)])

// ===== 강사님 풀이
// function solution(arr1, arr2) {
//   let answer = [];
//   let n = arr1.length; // 3
//   let m = arr2.length; // 5
//   let p1 = p2 = 0;

//   while(p1 < n && p2 < m) {
//     if(arr1[p1] <= arr2[p2]) {
//       answer.push(arr1[p1++])
//     } else {
//       answer.push(arr2[p2++])
//     }
//   }
//   while(p1 < n) answer.push(arr1[p1++]);
//   while(p2 < m) answer.push(arr2[p2++]);
//   return answer
// }


// Q. 다음 2개의 배열객체를 비교한 후 공통원소만 따로 추출하여 별도의 객체에 담아 콘솔창에 출력
// 단, 콘솔창에 출력할 때 오름차순
let a = [1, 3, 9, 5, 2]
let b = [3, 2, 5, 7, 8]

// ===== 나의 풀이
// let arr = [...a, ...b];
// let char = arr.filter((c, index) => {
//   return arr.indexOf(c) !== index;
// })

// let result = char.sort(function(a, b) {
//   return a - b;
// })
// console.log(result);


// ===== 강사님의 풀이
function solution(arr1, arr2) {
  let answer = [];
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let p1 = p2 = 0;

  while(p1 < arr1.length && p2 < arr2.length) {
    if(arr1[p1] == arr2[p2]) {
      answer.push(arr1[p1++]);
      p2++;
    } else if(arr1[0] < arr2[0]) {
      p1++;
    } else {
      p2++;
    }
  }
  return answer;
}

console.log(solution(a, b))