// Promise 객체(* 자바스크립트 내장 객체 / new) 활용, 비동기 처리방식 예시

let likePizza = true;

// 제작코드
const pizza = new Promise((resolve, reject) => {
  if(likePizza) resolve('피자를 주문합니다.');
  else reject('피자를 주문하지 않습니다.');
});

// 실행코드
pizza
.then((result) => console.log(result))
.catch(err => console.log(err))
.finally(() => console.log('완료')); 
// finally메서드를 쓰게 되면 무조건 finally값으로 종결됨

// 프로미스 객체 진행상태: pending(* 대기상태) => fulfilled(* 처리성공) / rejected(* 실패상태)