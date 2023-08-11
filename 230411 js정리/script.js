// // function calcFunction(매개변수 = 인자값)
// function calcFunction(price, tax = 0.08) {
//   const result = price + price * tax;
//   return result;
// }

// const result1 = calcFunction(100, 0.1);
// console.log(result1);

// // 사용자 입력값 우선 그 다음 개발자 초기값
// // 때문에 매개변수 값 미리 세팅

// // =========================================

// //만약에 함수에 들어갈 수 있는 매개변수 값의 개수가 가변적인 경우, (사용자 입력에 따라 유동적이어야 할 경우!) 아래처럼 표기
// //function 함수명(...매개변수) {}
// function calcSum(...prices) {
//   let result = 0;

//   // for (let el of li)
//   // for(변수 of 객체)
//   // 객체에 들어간 변수의 수만큼 반복

//   for (value of prices) {
//     result += value;
//   }
//   return result;
// }

// const result1 = calcSum(10, 20, 30, 50);
// console.log(result1);

// // =========================================

// // 정석 if문 예시
// let num = 10;

// if(num >= 5) {
//   console.log("참입니다!")
// } else {
//   console.log("아닌데!")
// }

// // if문의 경우, 조건문의 내용이 단순한 경우, else(*false) 문장은 생략 가능!
// // ex)
// if(true) {
//   alert('hello');
// }
// // 조건문에서 만약 true 이면, if(조건식) {결과}에서 {} 생략 가능
// // ex)
// const randomNum = Math.random() * 10;
// if(randomNum >= 5) alert('randomNum는 5 이상!');

// // =========================================

// // 정석 switch문 예시
// const myFruit = '사과';

// switch (myFruit) {
//   case '사과' :
//     alert('사과입니다!');
//     break;
//   case '귤' :
//     alert('귤입니다!');
//     break;
//   default :
//     alert('기타 과일입니다!');
//     break;
// }

// // 하나의 결과에 여러 개의 case 적용 가능
// switch (myFruit) {
//   case '사과' :
//   case '귤' :
//     alert('사과 혹은 귤입니다!');
//     break;
//   default :
//     alert('기타 과일입니다!');
//     break;
// }


// 부정연산자 !
// !! 두 번 쓰면 true