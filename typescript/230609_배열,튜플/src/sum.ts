// 명령형 프로그래밍
// 입력데이터값 설정 => 출력할 수 있는 가공된 함수 사용 => 출력 데이터값 확인
// let sum: number = 0;
// for(let i = 1; i <= 100; i++) {
//   sum += i;
// }

// console.log(sum); // -> 5050

//======================== 홀수의 합 (명령형)
// let oddSum = 0;
// for(let i = 1; i <= 100; i+= 2) {
//   oddSum += i;
// }
// console.log(oddSum); // -> 2500

//======================= 짝수의 합 (명령형)
let evenSum = 0;
for(let i = 0; i <= 100; i += 2) {
  evenSum += i;
}
console.log(evenSum); // -> 2550

//====================== 제곱근의 합 (명령형)
let squareSum = 0;
for(let i = 1; i <= 100; i++){
  squareSum += i * i
}
console.log(squareSum); // -> 338350