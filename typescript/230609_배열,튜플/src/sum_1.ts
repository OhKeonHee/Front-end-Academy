// 선언형 프로그래밍
// 프로그래밍을 하기 위한 입,출력 데이터 값을 이원화시킬 수 있고, 이로 인해서 데이터 커스터마이징 및 대규모 프로젝트 진행 시, 보다 효율적인 디버깅이 가능!!
import { range } from "./test.js";
import { fold } from "./fold.js";
import { filter } from "./filter.js";
import { map } from "./map.js";

let numbers: number[] = range(1, 100 + 1);
console.log(numbers); 
// // -> [
//    1,  2,  3,   4,  5,  6,  7,  8,  9, 10, 11, 12,
//    13, 14, 15,  16, 17, 18, 19, 20, 21, 22, 23, 24,
//    25, 26, 27,  28, 29, 30, 31, 32, 33, 34, 35, 36,
//    37, 38, 39,  40, 41, 42, 43, 44, 45, 46, 47, 48,
//    49, 50, 51,  52, 53, 54, 55, 56, 57, 58, 59, 60,
//    61, 62, 63,  64, 65, 66, 67, 68, 69, 70, 71, 72,
//    73, 74, 75,  76, 77, 78, 79, 80, 81, 82, 83, 84,
//    85, 86, 87,  88, 89, 90, 91, 92, 93, 94, 95, 96,
//    97, 98, 99, 100
//  ]

// ========================== 1부터 100까지 홀수의 합 (선언형)
const isOdd = (n: number): boolean => n % 2 != 0;

let result1 = fold(
  filter(numbers, isOdd),
  (result, value) => result + value, 0);
console.log(result1); // -> 2500

// ========================== 1부터 100까지 짝수의 합(선언형)
const isEven = (n: number): boolean => n % 2 == 0;
let result3 = fold(
  filter(numbers, isEven),
  (result, value) => result + value, 0
);
console.log(result3); //2550


//====================== 제곱근의 합 (선언형)
let result2 = fold (
  map(numbers, value => value * value),
  (result, value) => result + value, 0);
console.log(result2)