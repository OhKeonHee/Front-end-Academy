// #################### 수강생 명단 JSON에서 가져오기 ####################
// let xhr = new XMLHttpRequest();
// xhr.open("GET", "student.json");
// xhr.send();

// xhr.onreadystatechange = function() {
//   if(xhr.readyState == 4 && xhr.status == 200) {
//     let students = JSON.parse(xhr.responseText);
//     renderHTML(students);
//     // document.getElementById("result").innerHTML = `
//     // <h1>${student.name}</h1>
//     // <ul>
//     // <li>전공 : ${student.major}</li>
//     // <li>학년 : ${student.grade}</li>
//     // </ul>
//     // `
    
//   }
// };

// function renderHTML(students) {
//   let output = "";
//   for(let student of students) {
//     output += `
//       <h2>${student.name}</h2>
//       <ul>
//         <li>전공 : ${student.major}</li>
//         <li>학년 : ${student.grade}</li>
//       </ul>
//     `;
//   }
//   document.getElementById("result").innerHTML = output;
// }


// 예외처리!!! = 오류처리!!!

// *사용자로부터 특정 숫자를 받아서 어떤 프로그램을 실행시킨다면??
// - 사용자가 숫자를 입력하지 않았을 때의 오류

// #################### 예외처리 (try-catch 문) ####################

// try {
//   console.log("시작");
//   add(); //add한게 없어서 오류 (일부러 오류낸거임)
//   console.log("실행 중...");
// } catch(err) {
//   console.error(`오류 발생 : ${err}`); 
//   console.error(`오류 발생 : ${err.name}`);// error 발생 시 error이름만 나오게하거나 메시지만 나오게하거나
//   console.error(`오류 발생 : ${err.message}`);
// }

// console.log("끝");

// let json = '{"grade" : 3, "age" : 25}'

// try {
//   console.log("시작");
//   let user = JSON.parse(json);
//   if (!user.name) {
//     throw "사용자 이름이 없습니다." 
//     //return이나 break처럼 움직이며 try문에서 오류메시지를 사용하고 싶을 경우 사용
//   }
// } catch(err) {
//   console.error(err)
// }

// console.log("끝");

// #################### 상품정보 가져오기 ####################

// const result = document.querySelector("#result");
// const url = "https://reqres.in/api/products/10"

// let xhr = new XMLHttpRequest();
// xhr.open("GET", url, true);
// xhr.send();

// xhr.onreadystatechange = function() {
//   if (xhr.readyState == 4 && xhr.status == 200) {
//     let product = JSON.parse(xhr.responseText);
//     console.log(product);
//     result.innerHTML = `
//     <p>상품명 : ${product.data.name}</p>
//     <p>생산년도 : ${product.data.year}년도식</p>
//     <p>테스트 : ${product.support.text}</p>
//     `;                                                                         
//   }
// }

// #################### 10보다 작은 숫자를 입력하세요 ####################

// const userNumber = document.querySelector("#user-number");
// const button = document.querySelector("button");
// const result = document.querySelector("#result");

// button.addEventListener("click", (e) => {
//   e.preventDefault;
//   let n = userNumber.value;
//   try {
//     if (n === "" || isNaN(n)) { // isNaN() : 문자가 글인지 숫자인지 판별
//       throw "숫자를 입력하세요."
//     }
//     n = parseInt(n); // n이 공백이거나 문자인지 판별을 위에서 끝낸 후 숫자형으로 바꿔줌
//     if (n <= 10) {
//       result.innerText = n;
//     }
//     if (n > 10) {
//       throw "10보다 작은 수를 입력해주세요."
//     }
//   } catch(err) {
//     alert(err);
//   } finally {
//     userNumber.value = "";
//   }
// })

// ##### 비동기 프로그래밍 #####
// 1) 동기 처리 방식 : 소스 작성 순서대로 처리를 하는 방식
// 2) 비동기 처리 방식 : 소스 작성순서와 상관없는 처리 방식

// AJAX : Asynchronus Javascript & Xml

// * 스레드 : 프로그램에서 어떠한 프로세스를 실행하는 단위
// - 싱글(단일)스레드 : 한 번에 하나의 프로세스 실행
// - 멀티스레드 : 한 번에 여러 개의 프로세스 실행

// 자바스크립트 기본 처리방식 : 동기
// * callback 함수 = 자바스크립트 비동기 처리방식을 위한 필수요소

// ex 1-a)
// function displayA() {
//   console.log("A");
// }
// function displayB() {
//   console.log("B");
// }
// function displayC() {
//   console.log("C");
// }
// displayA();
// displayB();
// displayC();

// ex 1-b)
// function displayA() {
//   console.log("A");
// }
// function displayB(callback) {
//   setTimeout(() => {
//     console.log("B");
//     callback();
//   }, 2000)
// }
// function displayC() {
//   console.log("C");
// }
// displayA();
// displayB(displayC);
// // >2초 뒤 B, C 출력됨 => displayB 비동기화

// ex 2-a)
// function order(커피) {
//   console.log(`${coffee} 주문접수`)
// };
// function display(result) {
//   console.log(`${result} 준비완료`)
// };
// order("아메리카노");
// display("아메리카노");

// ↓ 비동기화

// ex 2-b)
// function order(coffee, callback) {
//   console.log(`${coffee} 주문접수`)
//   setTimeout(() => {
//     callback(커피);
//   }, 3000)
// };
// function display(result) {
//   console.log(`${result} 준비완료`)
// };
// order("아메리카노", display);

// // Call Back 지옥
// function displayLetter() {
//   console.log("A")
//   setTimeout(() => {
//     console.log("B")
//     setTimeout(() => {
//       console.log("C")
//       setTimeout(() => {
//         console.log("D")
//         setTimeout(() => {
//           console.log("STOP!")
//           }, 1000)
//         }, 1000)
//       }, 1000)
//     }, 1000)
//   }
// displayLetter();

// ##### 프로미스 객체 #####
// promise : 무분별한 콜백함수 사용의 부작용을 최소화하기 위한 객체
// resolve, reject : 프로미스객체의 매개변수
// 조건값이 true, false일 때 실행할 함수
// // ex)
// let likePizza = true;

// const pizza = new Promise((resolve, reject) => {
//   if (likePizza) {
//     resolve('피자를 주문합니다.');
//   } else {
//     reject('피자를 주문하지 않습니다.')
//   }
// });

// pizza
//   .then(
//     result => console.log(result)
//   )
//   .catch(
//     err => console.log(err)
//   )
//   .finally(
//     () => console.log('완료')
//   );

// ### Promise 객체 진행 단계 ###
// 1. pending : 프로미스 객체 만들고 대기
// 2. fulfilled : 만든 객체를 활용해 true값 도착
// 3. rejected : 만든 객체를 활용해 false값 도착

// #################### 커피주문 3초 후 주문완료 표시 ####################

// let coffee = prompt("어떤 커피를 주문하시겠습니까?", "아메리카노");
// const order = new Promise((resolve, reject) => {
//   if (coffee != null && coffee != "") {
//     document.querySelector(".start").innerText = `${coffee} 주문접수`;
//     setTimeout(() => {
//       resolve(coffee);
//     }, 3000)
//   } else {
//     reject("커피를 주문하지 않았습니다.")
//   }
// });

// function display(coffee) {
//   document.querySelector(".end").innerText = `${coffee} 준비완료 🥤`
//   document.querySelector(".end").classList.add("active");
//   document.querySelector(".start").classList.add("done");
// }

// function showErr(err) {
//   document.querySelector(".start").innerText = err;
// }

// order
//   .then(display)
//   .catch(showErr)

// #################### 피자 step .ver1 (callback함수를 이용한 step밟기) ####################
// const step1 = (callback) => {
//   setTimeout(() => {
//     console.log('피자 도우 준비 🕑 ');
//     callback();
//   }, 2000);
// }

// const step2 = (callback) => {
//   setTimeout(() => {
//     console.log('토핑 완료 🕘 ');
//     callback()
//   }, 1000);
// }

// const step3 = (callback) => {
//   setTimeout(() => {
//     console.log('굽기 완료 🕚 ');
//     callback()
//   }, 2000);
// }

// console.log("피자를 주문합니다!");
// step1(function() {
//   step2(function() {
//     step3(function() {
//       console.log("피자가 준비되었습니다 🍕 ");
//     })
//   })
// })

// #################### 피자 step .ver2 (resolve, then()을 이용한 step밟기 // callback을 대체한 Promise겍체 활용) ####################
// const pizza = () => { //pizza라는 상수에 할당한 익명함수
//   return new Promise((resolve, reject) => { //함수를 호출할 때 반환할 return값 정의
//     resolve("피자를 주문합니다.");
//    //resolve가 then으로 이동하면 그 then을 통해 step1으로 이동(message 라는 임시변수가 됨)
//   });
// };

// const step1 = (message) => { //👆의 값을 message로 받음
//   console.log(message);
//   return new Promise((resolve,reject) => {  // 또 Promise()를 돌림
//     setTimeout(() => {
//       resolve('피자 도우 준비 🕑 ');
//     }, 3000)
//   });
// }
// const step2 = (message) => {
//   console.log(message);
//   return new Promise((resolve,reject) => { //반복
//     setTimeout(() => {
//       resolve('토핑 완료 🕘 ');
//     }, 1000)
//   });
// }
// const step3 = (message) => {
//   console.log(message);
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       resolve('굽기 완료 🕚 ');
//     }, 1000)
//   });
// }

// pizza()     //Promise()의 실질적 실행문
//   .then((result) => step1(result))    
//   .then((result) => step2(result))
//   .then((result) => step3(result))
//   .then((result) => console.log(result))  //더 이상 Promise객체를 돌리지 않고 👇로 보냄
//   .then(() => {
//     console.log('피자가 준비되었습니다 🍕 ') //마지막 result
//   })

//============================================

// 서버에 있는 JSON 파일을 가져올 때 사용하는 객체 이름은?? 
// => XMLHttpRequest (* 프로미스 객체 반환이 불가!!)
// 👆 새로운 방법 => fetch (* 프로미스 객체를 반환할 수 있음 :: / 따라서 요즘 많이 사용함)

// 프로미스 객체의 3단계 진행과정
// 1단계(준비) : pending
// 2단계(완료) : fulfilled
// 3단계(거절) : rejected

// ---- console ----
// > fetch('student.json')
// Promise {<pending>}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: Response
// ---- ----

// #################### 수강생 명단 JSON에서 가져오기 .ver(fetch)####################

// fetch('student.json') // xhr과 달리 opne(),send()같은 메서드가 필요없음
// .then(response => response.json()) // response라는 인자값으로 인자값 뒤에 json메서드를 붙히면 객체값으로 변함
// .then(json => {
//   let output = ""; //출력할 내용 정의
//   json.forEach(student => { 
//     output += `
//       <h2>${student.name}</h2>
//       <ul>
//         <li>전공 : ${student.major}</li>
//         <li>학년 : ${student.grade}학년</li>
//       </ul>
//     `
//   });
//   document.querySelector("#result").innerHTML = output; // 출력할 공간 정의
// })
// .catch(error => console.log(error));
