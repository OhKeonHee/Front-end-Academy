// const isAllTrue = (values: boolean[]) => values.every((value) => value == true);

// console.log(isAllTrue([true, true, true]));
// console.log(isAllTrue([false, true, true]));

const getAllResolveResult = <T>(promises: Promise<T>[]) => Promise.all(promises);
// Promise의 타입선언은 무조건 제네릭타입이어야함
getAllResolveResult<any>([Promise.resolve(true), Promise.resolve('hello')]).then()