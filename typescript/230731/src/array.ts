let numbers = [1, 2, 3];
let strings = ['Hello', 'world'];
let object = { name: 'Jack', age: 32 }; // -> 배열이 아닌 객체임

// ** 배열 안에 다양한 메서드 => 해당 요소가 배열인지 아닌지를 식별해주는 메서드 
// -> Array.isArray(numbers) => true / false
console.log(Array.isArray(numbers), Array.isArray(object)); // -> true false

// ** 배열 타입정의 해주기
let numArray: number[] = [1, 2, 3];
let strArray: string[] = ['Hello', 'World'];

// ** 배열안에 객체
type IPerson = { name: string, age?: number };
// 1) let personArray1: object[] = [{ name: 'Jack' }, { name: 'Jane', age: 32 }];
// 2) let personArray2: IPerson[] = [{ name: 'Jack' }, { name: 'Jane', age: 32 }];

// ** 함수안에 배열을 매개변수로 지정하는 경우, 타입정의하는 법
export const arrayLength = <T>(array: T[]): number => array.length;
export const isEmpty = <T>(array: T[]): boolean => arrayLength(array) == 0;

// ** 배열안에 전개연산자 사용법
let array1: number[] = [1];
let array2: number[] = [2, 3];

let mergedArray: number[] = [...array1, ...array2];
console.log(mergedArray); // -> [ 1, 2, 3 ]