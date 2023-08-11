function fnc() {
  console.log("1");
  console.log("2");
  console.log("3");
}
fnc(); // -> 1 2 3

// generator
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}
// iterator 처럼 next()내장 함수를 쓸 수 있음
// let g1 = gen();
// > g1 // -> gen {<suspended>}
// > g1.next();
// {value: 1, done: false}
// > g1.next();
// {value: 2, done: false}
// > g1.next();
// {value: 3, done: false}
// > g1.next();
// {value: undefined, done: true}

// iterable 처럼 for문 쓸 수 있음
// let g2 = gen();
// > for (let i of g2) console.log(i);
// 1
// 2
// 3


// ##############################################

// // ### 경걍선 노선 버튼 ###
// function* train() {
//   yield "판교";
//   yield "상동";
//   yield "경기광주";
//   yield "곤지암";
//   yield "초월";
//   yield "이천";
//   yield "부발";
//   yield "여주";
//   yield "세종대왕릉";
//   yield "신존도예촌";
// }

// let gyeonggang = train();

// const button = document.querySelector("button");
// const result = document.querySelector("#result");

// button.addEventListener("click", () => {
//   let current = gyeonggang.next();
//   if(current.done !== true) {
//     result.innerHTML = current.value;
//   } else {
//     result.innerHTML = `종점입니다!`;
//     button.setAttribute("disabled", "disabled");
//   }
// })

// ==================== Promise 사용
const pizza = new Promise((resolve, reject) => {
  if(true) {
    resolve(`피자를 주문합니다!!`);
  } else {
    reject(`피자를 주문하지 않았습니다.`)
  }
});

pizza
  .then(
    result => console.log(result)
  )
  .catch(
    err => console.log(err)
  );

// -> 
// 1
// 2
// 3
// 피자를 주문합니다!!