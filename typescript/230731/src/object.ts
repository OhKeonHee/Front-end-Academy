// ** 타입변환 (*type conversion)
// 제네릭 타입 (타입스크립트 기본타입: 숫자, 문자열, 논리형, 겍체)
// 제네릭 타입 표기하는 방법 : <타입변수>

let person: object = { name: 'Jack', age: 32 };
let take = (<{ name: string }>person).name;

// ** 타입단언 ( type.ts --> )
export default interface INameable {
  name: string;
}