// 자바스크립트 비동기 예시 -2
// ex) callback함수를 사용

function displayA() {
  console.log('A');
}
function displayB(callback) {
  setTimeout(() => {
    console.log('B');
    callback();
  }, 2000)
}
function displayC() {
  console.log('C');
}

displayA();
displayB(displayC);
