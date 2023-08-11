// 동기처리 방식으로 데이터를 가져올 때

import { readFileSync } from "fs";

const buffer: Buffer = readFileSync("./package.json");
const content: string = buffer.toString(); // toString()을 써줘야 정상적으로 볼 수 있음
console.log(content);
