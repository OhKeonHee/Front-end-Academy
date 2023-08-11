// ========== 타입스크립트에서 비동기 콜백함수!!!
// fs = file system => 노드 JS운영하기 위한 운영체제 시스템 파일이 모여있는 곳
// Buffer: 노드js가 제공하는 클래스 중 하나!! (*컴푸터가 프로그래밍 작업을 수행하기 위한 바이너리 데이터 = 0, 1을 저장하는 기능을 수행!)
// readFileSync: 노드js에서 어떤 특정 파일을 읽고난 후 Buffer라는 타입으로 데이터를 전달해주는 역할!!
// 동기타입으로 데이터를 전달해주는 함수
// 비동기타입으로 데이터를 전달해주는 readFile


// import { readFileSync } from "fs";
// const buffer: Buffer = readFileSync("./package.json");
// const content: string = buffer.toString();
// console.log(content)

// import { readFile } from "fs";
// readFile("./package.json", (err: Error, buffer: Buffer) => {
//   if(err) throw err
//   else {
//     const content: string = buffer.toString()
//     console.log(content)
//   }
// })

import { readFile } from "fs";
export const readFilePromise = (filename: string): Promise<string> => {
  return new Promise<string>((resolve: (value: string) => void, reject: (error: Error) => void) => {
    readFile(filename, (err: Error, buffer: Buffer) => {
      if(err) reject(err)
      else resolve(buffer.toString())
    })
  })
}