// ** 타입변수, T를 활용한 제네릭 형태의 함수
const identity = <T>(n : T): T => n; 

console.log(identity(true)); // true
console.log(identity(false)); // false