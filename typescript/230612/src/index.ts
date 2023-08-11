// 1. 타입스크립트 반복기 & 생성기
// - 자바스크립트 => iterable 객체 / iterator 객체
// - iterable: 무언가를 순서대로 처리할 수 있는
// - 자바스크립트에서 iterable 객체 => 특정 객체가 가지고 있는 아이템 요소들을 하나씩 차례대로 가져와서 순서대로 반복처리할 수 있는 객체 (* 배열객체, 문자열)

// ================ iterable 객체만의 특징!!
// 1) for ...of문 사용가능!!
// 2) 전개연산자(...) 사용가능
// 3) 구조분해 할당 가능

// ===== console (iterable) =====
// let hi = "hello";
// for(let ch of hi) {console.log(ch)} // -> h, e, l, l, o

// let chArray = [...hi];
// chArray -> ['h', 'e', 'l', 'l', 'o']

// let [ch1, ch2] = hi;
// ch1 -> h
// ch2 -> e

// ================ iterator 객체만의 특징!!!
// 1) next() 메서드를 가지고 있음
// > value, done 2개의 프로퍼티 값을 가지고 있으며, 해당 값을 반환합니다.

// ===== console (iterator) =====
// let arr = [1, 2, 3, 4, 5];
// let it = arr[Symbol.iterator]();
// > it
//   Array Iterator {}
//     [[Prototype]]: Array Iterator
//       next: ƒ next()
//       Symbol(Symbol.toStringTag): "Array Iterator"
//       [[Prototype]]: Object

// it.next();
// {value: 1, done: false}
// it.next();
// {value: 2, done: false}
// it.next();
// {value: 3, done: false}
// it.next();
// {value: 4, done: false}
// it.next();
// // {value: 5, done: false}
// it.next();
// {value: undefined, done: true}

// =================== generator 함수!!!
// > generator 함수를 활용해서 만든 객체는 모두 iterable 객체
// > function 함수이름() { return 반환값 }
// > function* 함수이름() { yield 반환값 }

// #########################################예제

// import { createRangeIterable } from "./test";
// const iterator = createRangeIterable(1, 3 + 1);
// while(true) {
//   const {value, done} = iterator.next();
//   console.log(value);
//   if(done) break;
// }
// // 1 2 3

// import { range } from "./range";
// for (let value of range(1, 3 + 1)) {
//   console.log(value);
// }
// // 1 2 3

// import { createRangeIterable } from "./test";
// const iterator = createRangeIterable(1, 3 + 1);
// for (let value of iterator) {
//   console.log(value);
// } // 에러! iterator 가 iterable 이 아님

// import { createRangeIterable } from "./test";
// const iterator = new createRangeIterable(1, 3 + 1);
// for (let value of iterator) {
//   console.log(value);
// }


// 지금 하고 있는 타입스크립트에 대한 내용을 100% 다 구현하지 못해도 리액트 진행은 크게 문제 X 다만,

// Iterable<T>: 구현하고자 하는 클래스가 심볼.이터레이터 메서드를 제공했을 때 사용할 수 있는 타입 형식
// Iterator<T>: 반복기가 생성할 값의 타입을 정의할 때 사용가능!!

// import { StringIterable } from "./test";
// for (let value of new StringIterable(["hello", "world", "!"])) {
//   console.log(value)
// }

// import { generator } from "./generator.js";
// for(let value of generator()) {
//   console.log(value)
// } // ->
// // generator started...
// // 1
// // 2
// // 3
// // generator finished...


// // ================ 타입스크립트에서 setinterval() 함수 사용방법!!!
// const period = 1000;
// let count = 0;
// console.log(`program started...`);
// const id = setInterval(() => {
//   if(count >= 3) {
//     console.log(`program finished...`)
//     clearInterval(id)
//   } else {
//     console.log(count++);
//   }
// }, period);
// // -> 1초마다 하나하나 뜸
// // program started...
// // 0
// // 1
// // 2
// // program finished...


// import { rangeGenerator } from "./generator.js";
// let iterator = rangeGenerator(1, 3 + 1);
// while(true) {
//   const {value, done} = iterator.next();
//   console.log(value);
//   if(done) break;
// }
// // ->
// // 1
// // 2
// // 3
// // undefined

// for(let value of rangeGenerator(4, 6 + 1)) {
//   console.log(value);
// }
// // ->
// // 4
// // 5
// // 6

// import { gen12345 } from "./generator.js";
// for(let value of gen12345()) {
//   console.log(value)
// }

// 제너레이터 함수를 사용하면, 반환값으로 yield를 사용한다!!
// yield문은 다른 생성기를 통해서 반환된 값 혹은 배열객체를 통해서 반환된 값도 재반환 가능!!!

// 2. 타입스크립트에서 사용하는 Promise 객체
// - 자바스크립트에서 Promise 객체를 왜 사용했을까?
// - Promise 객체에는 2가지의 콜백함수를 가지고 있다는점
// - 해당 콜백함수의 역할이 다르다는 점
// - 콜백함수로 정의한 명령문을 실행시키기 위해서 사용했던 별도의 메서드가 있었다는 점

// * 메서드는 객체타입이 가지고 있을 수 있는 하나의 요소 중 하나다!!
// ** 객체를 생성하기 위해 "클래스"

// Promise 왜 사용하는가
// 리액트!! 라이브러리 언어 (*자바스크립트를 활용해서 보다 쉽게 UI/UX를 기획, 출력하도록 도와주는 언어) 사용!!

// 노드JS => 자바스크립트를 웹브라우저 HTML, CSS => 서버를 개발하거나 혹은 SPA

// TS => 서버측과 관련된 메서드 혹은 프로퍼티 주를 이루는 문법!!!

// API, 동기: 동시로 이뤄지고 VS 비동기: 동시로 이뤄지지 않는 것

// ============== 자바스크립트에서 콜백함수로 비동기처리하는 방식!!
// // ============== 자바스크립트에서 콜백함수로 동기처리하는 방식!!
// function displayA() {
//   console.log("A");
// }
// function displayB() {
//   console.log("B");
// }
// function displayC() {
//   console.log("C");
// }

// function displayA() {
//   console.log("A");
// }
// function displayB(callback) {
//   setTimeout(() => {
//     console.log("B");
//     callback()
//   }, 2000);
// }
// function displayC() {
//   console.log("C")
// }
// displayA();
// displayB(displayC);


// 나쁜 예 )
// function displayLetter() {
//   console.log("A");
//   setTimeout(() => {
//     console.log("B");
//     setTimeout(() => {
//       console.log("C");
//       setTimeout(() => {
//         console.log("D")
//         setTimeout(() => {
//           console.log("stop!!")
//         }, 1000)
//       }, 1000)
//     }, 1000)
//   }, 1000)
// }


// ========== 타입스크립트에서 비동기 콜백함수!!!
// fs = file system => 노드 JS운영하기 위한 운영체제 시스템 파일이 모여있는 곳
// Buffer: 노드js가 제공하는 클래스 중 하나!! (*컴푸터가 프로그래밍 작업을 수행하기 위한 바이너리 데이터 = 0, 1을 저장하는 기능을 수행!)
// readFileSync: 노드js에서 어떤 특정 파일을 읽고난 후 Buffer라는 타입으로 데이터를 전달해주는 역할!!
// 동기타입으로 데이터를 전달해주는 함수
// 비동기타입으로 데이터를 전달해주는 readFile
// readFile.ts 참조

// import { readFilePromise } from "./readFile.js";

// readFilePromise("./package.json")
//   .then((content: string) => {
//     console.log(content);
//     return readFilePromise("./tsconfig.json")
//   })
//   .then((content: string) => {
//     console.log(content);
//     return readFilePromise(".")
//   })
//   .catch((err: Error) => console.log(`error: `, err.message))
//   .finally(() => console.log(`프로그램 종료`));
// console 창 결과 화면 ->
// {
//   "name": "230612",
//   "version": "1.0.0",
//   "description": "",
//   "main": "index.js",
//   "type": "module",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "start": "ts-node src/index.ts"
//   },
//   "author": "",
//   "license": "ISC",
//   "dependencies": {
//     "@types/node": "^20.3.0"
//   }
// }

// {
//   "compilerOptions": {
//     "target": "ESNext",
//     "module": "ESNext",
//     "moduleDetection": "force",
//     "allowJs": true,
//     "strict": true,
//     "strictNullChecks": false,
//     "outDir": "dist",
//     "downlevelIteration": true
//   },
//   "ts-node": {
//     "esm": true
//   },
//   "include": ["src"]
// }
// error:  EISDIR: illegal operation on a directory, read
// 프로그램 종료

// Promise.resolve(1)
//   .then(value => console.log(value)) // -> 1
// Promise.resolve("hello") 
//   .then(value => console.log(value)) // -> hello
// Promise.resolve([1, 2, 3])
//   .then(value => console.log(value)) // -> [1, 2, 3]
// Promise.resolve({name: "Jack", age: 32})
//   .then(value => console.log(value)) // -> { name: 'Jack', age: 32 }



// Promise.reject(new Error(`에러 발생`))
//   .catch((err: Error) => console.log(`error`, err.message))

// // then 메서드 체인
// Promise.resolve(1)
//   .then((value: number) => {
//     console.log(value) // -> 1
//     return Promise.resolve(true)
//   })
//   .then((value: boolean) => {
//     console.log(value) // -> true
//     return [1, 2, 3]
//   })
//   .then((value: number[]) => {
//     console.log(value) // ->[ 1, 2, 3 ]
//     return {name: "Jack", age: 32}
//   })
//   .then((value: {name: string, age: number}) => {
//     console.log(value) // -> { name: 'Jack', age: 32 }
//   })

// Promise.all 메서드 : promise 객체들을 배열형태로 받아서 해당 값을 반환하는 메서드!!

// const getAllResolveResult = <T>(promises: Promise<T>[]) => Promise.all(promises)

// getAllResolveResult<any>([Promise.resolve(true), Promise.resolve("hello")])
//   .then(result => console.log(result)); // -> [ true, 'hello' ]

// getAllResolveResult([Promise.reject(new Error(`error`)), Promise.resolve(1)])
//   .then(result => console.log(result))
//   .catch(error => console.log(`error: `, error.message))

// 배열에 담긴 Promise 객체 중 거절(reject)객체가 발생하게 되면, resolve객체의 값을 생략하고, 바로 reject객체의 값만 반환합니다.


// ================= async & await
// async await => Promise 객체의 탄생 배경 => 무분별한 콜백함수로 인한 복잡한 버그를 사전에 차단하고자!! => promise 메서드 체이닝을 활용한 제 2의 콜백지옥을 해소하고자 async함수와 await 키워드(* 예약어)가 탄생하게 됨

// 무조건 await 키워드는 async함수에서만 사용할 수 있음, async함수에서 await라는 키워드를 사용하는 경우, 함수의 해당 명령어를 비동기적으로 실행할 수 있음

// const test = async() => {
//   const value = await Promise.resolve(1)
//   console.log(value);
// }