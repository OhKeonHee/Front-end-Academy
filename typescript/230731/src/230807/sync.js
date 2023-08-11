// 자바스크립트의 동기처리 방식 예시
// async: 비동기
// sync: 동기

// function displayA() {
//   console.log('A');
// }
// function displayB() {
//   console.log('B');
// }
// function displayC() {
//   console.log('C');
// }
// displayA();
// displayB();
// displayC();


// 자바스크립트의 비동기처리 방식 예시
// ex) setTimeout을 사용해 B를 C보다 늦게 출력
function displayA() {
  console.log('A');
}
function displayB() {
  setTimeout(() => console.log('B'), 2000);
}
function displayC() {
  console.log('C');
}
displayA();
displayB();
displayC();