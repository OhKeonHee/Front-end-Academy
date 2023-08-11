import { range } from "./range-1.ts";

for (let value of range(1, 4)) console.log(value); // -> 1 2 3
// range.ts에 있는 range함수에 from: 1, to: 4를 넣고 from이 to보다 작을 때 까지 from + 1값을 배열에 넣음