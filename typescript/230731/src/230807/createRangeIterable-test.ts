import { createRangeIterable } from "./createRangeResult.ts";

const iterator = createRangeIterable(1, 4);
while(true) {
  const {value, done} = iterator.next();
  if(done) break;
  console.log(value); // 1 2 3
}