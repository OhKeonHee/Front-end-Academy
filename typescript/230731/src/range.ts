// range() : 특정 수(*값)로 구성된 배열을 생성할 때 사용할 수 있는 함수

export const range = (from: number, to: number): number[] => from < to ? [from, ...range(from + 1, to)] : [];