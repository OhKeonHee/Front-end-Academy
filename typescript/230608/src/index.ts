// function () {
//   return a + b;
// }

// // 값을 반환하지 않는 함수의 타입 정의

// function printMe(name: string, age: number): void {
//   console.log(`name: ${name}, age: ${age}`);
// }

// // 함수 시그니처 타입
// let printMe2: (string, number) => (arg0: string, arg1: number) => void = function (name: string, age: number): void {}

// // 객체의 타입을 정의하기 위해서 interface
// interface IPerson4 {
//   name: string;
//   age?: number;
// }

// // type 키워드로 타입 별칭 만드는 방법
// type stringNumberFunc = (arg0: string, arg1: number) => void;
// let f: stringNumberFunc = function(a: string, b: number): void{}

// ex
// interface INameable {
//   name: string;
// };

// function getName(o: INameable) {
//   return o != undefined && o.name ? o.name : "unknown name";
// }

// let n = getName(undefined);
// console.log(n);

// console.log(getName(null));

// // ================================================ ts 함수쓰는법
// let functionExp = function(a: number, b: number) {return a + b};
// let value2 = functionExp(1, 2);

// console.log(value2);

// // 타입스크립트에서의 화살표 함수
// const arrow1 = (a: number, b: number): number => a + b;

// // 복합실행문 : 함수의 실행문 안에 복수의 실행할 요소 및 연산자가 존재하는 경우
// function f() {
//   let x = 1, y = 2;
//   let result = x + y + 10;
//   return result;
// }

// // 유의사항 : 화살표 함수를 사용하는 단일실행문의 경우, 실행문의 중괄호{}와 반환값을 정의하는 return문은 함께 동행해야함
// const testfunc1 = (a: number, b: number): boolean => {return a > b}
// const testfunc2 = (a: number, b: number): boolean => a > b


// ============================ typescript로 콜백함수 쓰기 (test.ts에 export만들어줌으로써 module만듬)
// import { init } from "./test";
// init(() => console.log("custom init finished"));

// // =============== 중첩함수 (자바스크립트가 1급시민이어서 할 수 있음)
// const calc = (value: number, cb: (arg0: number) => void): void => {
//   let add = (a: number, b: number) => a + b;
//   function multiply(a: number, b: number) { return a * b };

//   let result = multiply(add(1, 2), value);
//   cb(result);
// }

// calc(30, (result: number) => console.log(`result is ${result}`));

// // ================== 고차함수 VS 보통함수
// const add1 = (a: number, b: number): number => a + b; // 보통함수
// const add2 = (a: number): (arg0: number) => number => (b: number): number => a + b; // 고차함수

// const result = add2(1)(2);
// console.log(result);

// // ================== 고차함수 VS 보통함수 (import 용으로)
// import { NumberToNumberFunc, add } from "./test.js";
// let fn: NumberToNumberFunc = add(1);

// let result = fn(2);
// console.log(result);

// // ======================== 타입스크립트의 함수에서 매개변수 이름과 똑같은 속성을 가진 객체를 만들 때에는 다음과 같이 생략가능
// type Person = {
//   name: string;
//   age: number;
// };

// const makePerson = (name: string, age: number =  10): Person => {
//   const person = {
//     name: name,
//     age: age
//   };
//   return person
// };
// //👇👇 똑같음 (줄일수 있음)
// //const makePerson = (name: string, age: number =  10): Person => ({name, age});

// console.log(makePerson("Jack", 33));
// console.log(makePerson("Jane")); // -> 원래는 오류가 나지만 위에 age: number에 10이라는 값을 줬기에 오류안남

// // ========================== 객체 : 구조할당문 & 함수
// type Person1 = {
//   name: string;
//   age: number;
// };

// const printPerson = ({name, age}: Person1): void => {
//   console.log(`name: ${name}, age: ${age}`);
// }

// printPerson({name: "Jack", age: 18});

// // 인덱스 시그니처
// type KeyValueType = {
//   [key: string]: string;
// }

// const makeObject = (key: string, value: string): KeyValueType => {
//   return ({[key]: value});
// }

// console.log(makeObject("name", "Jack"));
// console.log(makeObject("firstname", "Jane"));

// // ============================ 클래스
// import { A } from "./test";
// let a: A = new A(2)
// a.method();

// class C {
//   static whoAreYou(): string {
//     return `I'm class C`
//   }
// }

// console.log(C.whoAreYou());

// ========================== 메서드 체인
// ex ) 객체.classList.contain()

import { calculator } from "./test.js";

let calc = new calculator;
let result = calc.add(1).add(2).multiply(3).multiply(4).value;

console.log(result); // -> 36