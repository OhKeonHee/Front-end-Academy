// // ============================ typescript로 콜백함수 쓰기
// export const init = (callback: () => void) => {
//   console.log("default init finished");
//   callback();
//   console.log("all init finished");
// }

// // ================== 고차함수 VS 보통함수 풀어서 써보기 (export 용으로)
// export type NumberToNumberFunc = (arg0: number) => number;
// export const add = (a: number): NumberToNumberFunc => {
//   const _add: NumberToNumberFunc = (b: number): number => {
//     return a + b;
//   }
//   return _add;
// }

// const add3 = (a: number): (arg0: number) => number => (b: number): number => a + b;

// // ================================ 클래스
// export class A {
//   constructor(public value: number = 1) {}
//   method(): void {
//     console.log(`value: ${this.value}`)
//   }
// }

// ========================== 메서드 체인
export class calculator {
  constructor(public value: number = 0) {}
  add(value: number) {
    this.value += value
    return this
  }
  multiply(value: number) {
    this.value *= value
    return this
  }
}