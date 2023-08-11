import { readFile, readFileSync } from "fs";

// package.json 파일 동기 방식으로 읽어오기
console.log("read package.json using sync api...");
const buffer: Buffer = readFileSync("./package.json");
console.log(buffer.toString());

// package.json 파일 비동기 방식으로 읽어오기
readFile('./package.json', (error: unknown, buffer: Buffer) => {
  console.log("read package.json using async api...");
  console.log(buffer.toString());
})

// Promise 객체와 async / await 활용하여 비동기 방식으로 읽어오기
const readFilePromise = (filename: string): Promise<string> => 
  new Promise<string>((resolve, reject) => {
    readFile(filename, (error: unknown, buffer: Buffer) => {
      if(error) reject(error);
      else resolve(buffer.toString());
    });
  });
  
  // const promise = async function() {
  //   const content = await readFilePromise('./package.json');
  //   console.log("read package.json using Promise & async api...");
  //   console.log(content);
  // };
  // promise();

  // 👇👇👇 고차함수 방식으로

  (async () => {
    const content = await readFilePromise('./package.json');
    console.log("read package.json using Promise & async api...");
    console.log(content);
  })();