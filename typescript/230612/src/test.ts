// export class createRangeIterable {
//   constructor(public from:number, public to:number) {}
//   [Symbol.iterator]() {
//     const that = this;
//     let currentValue = that.from; 
//     return {
//       next() {
//         const value = currentValue < that.to ? currentValue++ : undefined;
//         const done = value == undefined;
//         return {value, done};
//       }
//     }
//   }
// }

// export class StringIterable implements Iterable<string> {
//   constructor(private strings: string[], private currentIndex: number = 0) {}
//   [Symbol.iterator](): Iterator<string> {
//     const that = this;
//     let currentValue = that.currentIndex;
//     let length = that.strings.length;

//     const iterator: Iterator<string> = {
//       next(): {value: string, done: boolean} {
//         const value = currentValue < length ? that.strings[currentValue++] : undefined;
//         const done = value == undefined;
//         return {value, done};
//       }
//     }
//     return iterator
//   }
// }
