// ** split 메서드: 문자열을 배열로 전환할 때!!

export const split = (str: string, delim: string = ''): string[] => str.split(delim);
// -> delim: 어느문자를 기준으로 나눌 것인지(구분자)