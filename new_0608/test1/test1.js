// Q1.
// 사용자로부터 "영문 및 숫자"가 포함된 문자를 받은 후 숫자만 선별하여 콘솔창에 출력하기

// let text = String(prompt("영문과 숫자를 섞어 입력해주세요."));

// let text_arr = text.split("");
// // console.log(text_arr);
// let result_arr = [];

// for(let i = 0; i < text.length; i++) {
//   if(isNaN(text_arr[i]) == false) {
//     result_arr.push(text_arr[i]);
//   }
// }
// let result = result_arr.join("");
// console.log(result);

// ==============================
// 강사님 ver
// let str = prompt("영문과 숫자를 섞어 입력해주세요.");
// function solution(str) {
//   let answer = "";
//   for(let el of str) {
//     if(!isNaN(el)) {
//       answer += el;
//     }
//   }
//   return answer;
// }
// console.log(answer);


// Q2.
// 사용자로부터 "반복되는 영문대문자"를 전달받은 후 해당 영문대문자와 반복된 횟수를 콘솔창에 출력하기

// let str = prompt("영대문자를 반복해서 써주세여.");

// function solution(str) {
//   let answer = "";
//   let cnt = 1;
//   for(let i = 0; i < str.length; i++) {
//     if(str[i] === str[i + 1]) {
//       cnt++;
//     } else {
//       answer += str[i];
//       if(cnt > 1) {
//         answer += cnt;
//         cnt = 1;
//       }
//     }
//   }
//   return answer;
// }

// console.log(solution(str));


// Q3.
let str = "found7, time, study, Yduts, emit, 7Dnuof";

function solution(str) {
  let answer = "YES";
  str = str.toLowerCase().replace(/[^a-z]/g, "") // -> a ~ z를 제외한 모든요소 없애기

  if(str.split("").reverse().join("") !== str) {
    return "NO";
  }
  return answer;
};
console.log(solution(str));
