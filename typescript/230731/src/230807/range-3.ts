const numArray: number[] = [1, 2, 3];
for(let value of numArray) console.log(value); // -> 1, 2, 3\

const strArray: string[] = ['hello', 'world', '!'];
for(let value of strArray) console.log(value); // hello world !
// 얘도 일종에 반복기임
// 배열을 정의하고 for of문을 사용함

// 타입 및 자바스크립트의 '반복기 함수'
// 반복기 함수의 특징
// 1) next() 메서드
// 2) next() 메서드 > value, done 객체속성을 반환함