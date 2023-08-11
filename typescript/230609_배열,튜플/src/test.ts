// export const split = (str: string, delim: string = ""): string[] => str.split(delim);

// export const join = (strArray: string[], delim: string = ""): string => strArray.join(delim);

// 제네릭 타입 : 안에 입력되는 값의 타입에 맞춰서 전체 타입을 결정하는 방식
// export const arrayLength = <T>(array: T[]):number => array.length;
// export const isEmpty = <T>(array: T[]): boolean => arrayLength<T>(array) == 0;

export const range = (from: number, to: number): number[] => {return from < to ? [from, ...range(from + 1, to)] : []}
