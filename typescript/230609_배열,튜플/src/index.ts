// let array = new Array;

// array.push(1);
// array.push(2);
// array.push(3);

// console.log(array); // -> [ 1, 2, 3 ]

// let numbers = [1, 2, 3];
// let string = ["Hello", "World"];

// console.log(numbers, string); // -> [ 1, 2, 3 ] [ 'Hello', 'World' ]

// // 배열에 기억해야하는 중요한 메서드 : 객체.isArray() => 앞에 입력한 객체가 배열인지 아닌지를 참, 거짓으로 판단해주는 메서드

// let a = [1, 2, 3];
// let o = {name: "Jack", age: 32}; // -> 배열 아닌 객체

// console.log(Array.isArray(a), Array.isArray(o)); // -> true false

// // typescript 에서의 배열
// let numArray: number[] = [1, 2, 3];
// let strArray: string[] = ["Hello", "World"];

// type IPerson = {
//   name: string,
//   age?: number
// };

// let personArray: IPerson[] = [
//   {name: "Jack"},
//   {name: "Jack", age: 26}
// ]

// ======================================= split
// import { split } from "./test";
// console.log(
//   split("hello"),
//   split("h_e_l_l_o", "_")
// )
// ======================================= join
// import { join } from "./test";
// console.log(
//   join(["h", "e", "l", "l", "o"]),
//   join(["h", "e", "l", "l", "o"], "_")
// );

// //======================================== 배열 for문
// const numbers: number[] = [1, 2, 3, 4, 5];
// for(let i = 0; i < numbers.length; i++) {
//   const item: number = numbers[i];
//   console.log(item);
// }

// // ================= 배열 구조할당 (*객체 / 함수 / 배열)

// let array: number[] = [1, 2, 3, 4, 5];
// let [first, second, third, ...rest] = array;
// console.log(first, second, third, rest); // -> 1 2 3 [ 4, 5 ]

// //======================================== for... in문 (타입스크립트)
// // 배열의 인덱스 값을 기준으로 반복문으로 실행하는 타입
// let names = ["Jack", "Jane", "Steve"];
// for (let index in names) {
//   const name = names[index];
//   console.log(`[${index}]: ${name}`) // -> [0]: Jack [1]: Jane [2]: Steve
// }

// //======================================== for... of문 (타입스크립트)
// // 배열의 아이템 값을 기준으로 반복문을 실행하는 타입
// for(let name of ["Jack", "Jane", "Steve"]) {
//   console.log(name); // -> Jack Jane Steve
// }

// ==================================
// import { arrayLength, isEmpty } from "./test";
// let numArray: number[] = [1, 2, 3];
// let strArray: string[] = ["Hello", "World"];

// type IPerson = {
//   name: string,
//   age?: number
// };

// let personArray: IPerson[] = [
//   {name: "Jack"},
//   {name: "Jack", age: 32}
// ];

// console.log(
//   arrayLength(numArray),
//   arrayLength(strArray),
//   arrayLength(personArray),
//   isEmpty([]),
//   isEmpty([1])
// )

// // ================================
// const identity = <T>(n: T): T => n;
// console.log(
//   identity<boolean>(true) // -> true
// )

// //=============================

// let array1: number[] = [1];
// let array2: number[] = [2, 3];

// let mergedArray: number[] = [...array1, ...array2, 4];
// console.log(mergedArray); // -> [ 1, 2, 3, 4 ]

// ============================= 1 ~ 10 까지 출력
// import { range } from "./test";
// let numbers: number[] = range(1, 9 + 1);
// console.log(numbers);


// //=============================
// // 타입스크립트를 활용한 배열의 map, reduce, filter 메서드 예제!!
// // 클래스 => 메서드 체인!!

// const multiply = (result: number, val: number) => result * val;

// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let tempResult = numbers
// .filter(val => val % 2 != 0)
// .map(val => val * val)
// .reduce(multiply, 1);

// let result = Math.round(Math.sqrt(tempResult));
// console.log(result); // -> 945

// ================================
import { range } from "./test.js";

// const array: number[] = range(1, 10 + 1);
// const half = array.length / 2;

// // 배열 짝수 홀수 나누기
// let odds: number[] = array.filter((value) => value % 2 != 0);
// // -> [ 1, 3, 5, 7, 9 ]
// let evens: number[] = array.filter((value) => value % 2 == 0);
// // -> [ 2, 4, 6, 8, 10 ]

// // 배열 절반 쪼개기
// let belowHalf: number[] = array.filter((value, index) => index < half); // -> [ 1, 2, 3, 4, 5 ]
// let overHalf: number[] = array.filter((value, index) => index >= half); // -> [ 6, 7, 8, 9, 10 ]

// // 1 ~ 5 배열 제곱값 배열하기
// let squres: number[] = range(1, 5 + 1).map((val: number) => val * val);
// console.log(squres); // -> [ 1, 4, 9, 16, 25 ]