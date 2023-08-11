// 노드는 이벤트 기반으로 작업을 수행한다

function first() {
  second();
  console.log('첫 번째');
}
function second() {
  third();
  console.log('두 번째');
}
function third() {
  console.log('세 번째');
}

first();
