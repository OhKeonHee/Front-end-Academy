// <T>: 타입변수
function func(value) {
    return value;
}
let arr = func([1, 2, 3]);
// 제네릭 타입 & 튜플 타입 같이 사용
let num = func(10);
num.toFixed();
let str = func("string");
// // 타입 좁히기
// if (typeof num === "number") {
//   num.toFixed();
// }
// 제네릭 함수!!
// 제네릭 함수 : 종합적인 함수/일반적인 함수
// 타입변수 <T> 응용!!
function swap(a, b) {
    return [b, a];
}
const [a, b] = swap("1", 2);
function returnFirstValue(data) {
    return data[0];
}
;
let num1 = returnFirstValue([0, 1, 2]);
let str1 = returnFirstValue([1, "hello", "myname"]);
function getLength(data) {
    return data.length;
}
getLength("123");
getLength([1, 2, 3]);
getLength({ length: 1 });
// 제네릭 함수 & 타입변수 활용 => 자바스크립트 map & forEach문 만들기!!!
// src/map.ts & src/foreach.js 파일 참고! 
function map(arr, callback) {
}
export {};
