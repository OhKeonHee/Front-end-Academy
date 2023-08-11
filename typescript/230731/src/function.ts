// ** 자바스크립트 일반적인 함수
// function add(a, b) {
//   return a + b;
// }

// ** 타입스크립트를 활용한 함수 타입정의 기본세팅
// 1) 매개변수 2) 반환값
// function add(a: number, b: number): number {
//   return a + b;
// }

// ** 함수의 반환값이 없는 경우, 타입정의 : void
// function printMe(name: string, age: number): void {
//   console.log(`name: ${name}, age: ${age}`);
// }

// ** 함수 자체에 타입을 정의 : "함수 시그니처" 적용
// 변수에 타입을 정의했던 것처럼, 타입주석을 작성!!!
// let printMe: (string, number) => void = function(name: string, age: number): void {
//   console.log(`name: ${name}, age: ${age}`);
// }

// ** type 키워드 => "type" 키워드를 활용해서 타입을 정의
// type stringNumberFunc = (string, number) => void;

// let f: stringNumberFunc = function(a: string, b: number): void {};


// interface INameable {
//   name: string;
// }
// function getName(o: INameable | undefined) {
//   return o !=undefined ? o.name : 'unknown name';
// }
// let n = getName(undefined);

// console.log(getName({ name: 'Jack' }));


// ** 함수 타입 정의
// 함수 표현식에서 타입을 정의하는 방법!!!
// 자바스크립트 책 => Deep Dive (*도마뱀)
// 함수는 객체다!!
// 자바스크립트, 객체지향언어

// ** Function 클래스의 인스턴스 객체로 사용
// function add(a, b) {
//   return a + b;
// }
// let add = new Function('a', 'b', 'return a + b');
// let result = add(1, 2);

// ** 1급 시민 : 변수에 함수를 할당 / 다른 함수의 인자값으로 활용 // 다른 함수에 반환값으로 활용할 수 있음
// 자바스크립트 함수 종류 : 클래스 / 화살표 / 익명
// let functionExp = function (a, b) {
//   return a + b;
// }

// let value = (function (a, b) {
//   return a + b;
// })(1, 2);
// console.log(value)

// ** 타입스크립트에서 화살표함수!! 사용가능
// 화살표 함수를 사용할 때, 사용방식에 따라 실행문 표기도 달라짐

// "실행문" 방식으로 함수 정의
// 대표적 언어 : C언어
// 컴퓨터의 cpu에서 실행되는 코드 => 결과값을 자동으로 알려주지 않는 특징
// 실행된 결과값을 확인하기 위해선 return문을 써야함
// const arrow1 = (a: number, b: number):number => {
//   return a + b;
// }

// "표현식문" 방식으로 함수 정의
// cpu에서 실행된 결과값을 자동으로 알려줌
// 굳이 return문을 사용하지 않아도 됨
// const arrow2 = (a: number, b: number): number => a + b;

// 타입스크립트 및 자바스크립트는 복합실행문을 사용할 수 있는 함수
// function isGreater (a: number, b: number): boolean {
//   return a > b;
// }

// ** ( callback.ts --> )
// export const init = (callback: () => void) => {
//   console.log('default initialization finished');
//   callback();
//   console.log('all initialization finished');
// }
// =================================

// const calc = (value: number, cb: (number) => void): void => { // return문이 없으면 void!!!!!
//   let add = (a, b) => a + b
//   function multiply(a, b) {return a * b}

//   let result = multiply(add(1, 2), value)
//   cb(result)
// }
// calc(30, (result: number) => console.log(`result is ${result}`))

// ========================
import { NumberToNumberFunc, add } from "./func-1.ts";

let fn: NumberToNumberFunc = add(1)
let result = fn(2);
console.log(result)
console.log(add(1)(2))