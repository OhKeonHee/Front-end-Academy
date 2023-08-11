// 배열타입 정의 => number[], boolean[], T[], <T>
// 아이템요소가 아직 결정되지 않은 상태에서 타입 정의하는 경우 => 제네릭 타입 사용하는 경우, 타입변수 = T로 마킹(꼭 T가 아닌 V, Q, X.. 상관없지만 통상적으로 T 사용)

function g1<T>(a: T): void {}

function g2<T, Q>(a: T, b: Q): void {}

// 화살표 함수 제네릭 타입 사용 시
const g3 = <T>(a: T): void => {}
const g4 = <T, Q>(a: T, b: Q): void => {}


// 객체 타입 정의 => 인터페이스 타입
interface IValuable<T> {
  value: T;
}

class Valuable<T> {
  constructor(public value: T) {}
}