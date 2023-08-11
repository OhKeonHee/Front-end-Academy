import { arrayLength, isEmpty } from "./array.ts";
let numArray: number[] = [1, 2, 3];
let strArray: string[] = ["Hello", "World"];

type IPerson = {name: string, age?: number};
let personArray: IPerson[] = [
  {name: "Jack"},
  {name: "Jane", age: 32},
]

console.log(
  arrayLength(numArray), // true
  arrayLength(strArray), // false
  arrayLength(personArray), // 3 2 2
  isEmpty([]), // true
  isEmpty([1]) // false
)