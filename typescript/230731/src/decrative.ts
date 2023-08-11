// 선언형 프로그래밍 예시

import { range } from "./range.ts";
import { fold } from "./fold.ts";
import { filter } from "./filter.ts";

// let numbers: number[] = range(1, 101);
// console.log(numbers); // 1~100까지 배열로 나옴

// let result = fold(numbers, (result, value) => result + value, 0);
// console.log(result) // 5050

let numbers: number[] = range(1, 101);
const isOdd = (n: number): boolean => n % 2 != 0;
let result = fold(filter(numbers, isOdd), (result, value) => result + value, 0);
console.log(result);