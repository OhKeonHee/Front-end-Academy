// 타입 일치시키기
// const numPromise: Promise<number> = new Promise<number>(() => {});
// const strPromise: Promise<string> = new Promise<string>(() => {});
// const arrayPromise: Promise<number[]> = new Promise<number[]>(() => {});

import { readFile } from "fs";

export const readFilePromise = (filename: string) => 
  new Promise<string>((resolve: (value: string) => void, reject: (error: unknown) => void) => {
    readFile(filename, (err: unknown, buffer: Buffer) => {
      if(err) reject(err)
      else resolve(buffer.toString());
    })
  })