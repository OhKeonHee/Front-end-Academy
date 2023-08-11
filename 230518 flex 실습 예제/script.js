// 테스트 1 답안
// function sideMenu() {
//   const side_menu = document.querySelector('.trigger');
//   const gnb = document.querySelector('.gnb');
//   const sns = document.querySelector('.sns');

//   side_menu.classList.toggle('active');
//   gnb.classList.toggle('on');
//   sns.classList.toggle('on');

// }

//
// 코테 1

// const arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];

// function solution(arr) {
//   let answer = arr;
//   let sum = answer.reduce((a, b) => a + b ,0);

//   console.log(sum);

//   for (let i = 0; i < arr.length; i++){
//     for(let j = i + 1; j < 9; j++) {
//       if(sum-(answer[i] + answer[j]) == 100) {
//         answer.splice(j, 1);
//         answer.splice(i, 1);
//       }
//     }
//   }

//   return answer
// }

// console.log(solution(arr))


// 코테 2
// const str = ["teacher","time","student","beautiful","good"];

// function solution(e) {
//   let answer = "";
//   let max = Number.MIN_SAFE_INTEGER;

//   for(let el of e) {
//     if(el.length > max) {
//       max = el.length;
//       answer = el;
//     }
//   }
//   return answer
// }

// console.log(solution(str));