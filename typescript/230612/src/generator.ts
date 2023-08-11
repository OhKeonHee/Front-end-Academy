export function* generator() {
  console.log(`generator started...`);
  let value = 1;
  while(value < 4)
    yield value++;
  console.log(`generator finished...`)
}

export function* rangeGenerator(from: number, to: number) {
  let value = from;
  while(value < to) {
    yield value++;
  }
}

// 제너레이터 함수를 사용하면, 반환값으로 yield를 사용한다!!
// yield문은 다른 생성기를 통해서 반환된 값 혹은 배열객체를 통해서 반환된 값도 재반환 가능!!!

function* gen12() {
  yield 1;
  yield 2;
}

export function* gen12345() {
  yield* gen12()
  yield* [3, 4]
}