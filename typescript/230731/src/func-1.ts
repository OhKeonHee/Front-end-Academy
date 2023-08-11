// ** 고차함수 (function.ts --> )
const add1 = (a: number, b: number) => a + b; // -> 보통함수
// const add2 = (a) => (b) => a + b; // 고차함수
const add2 =
  (a: number): ((number) => number) =>
  (b: number): number =>
    a + b; // 클로저
console.log(add2(1)(2))

export type NumberToNumberFunc = (number) => number;
export const add = (a: number): NumberToNumberFunc => {
  const  _add: NumberToNumberFunc = (b: number): number => {
    return a + b;
  }
  return _add
}

// 함수 안에 매개변수로 객체값을 가져올 때의 타입정의
export type Person = {
  name: string;
  age: number;
}
export const makePerson = (name: string, age: number): Person => {
  const person = {name, age};
  return person;
}
console.log(makePerson('jack', 33));