//타입스크립트에서 인터페이스란?
// 타입별칭과 동일하게 특정타입에 이름을 지어주는 타입스크립트만의 독특한 문법
// 타입별칭과 거의 유사

// 인터페이스 타입도 마찬가지로 선택적 프로퍼티(*Optional Property)와
// 읽기전용 프로퍼티를 가지고 있다.

interface Person {
  readonly name: string;
  age?: number;
  SayHi: () => void;
}

const person: Person = {
  name: "홍길동",
  SayHi: () => {}
}

// 인터페이스 확장
// 인터페이스 확장이란, 하나의 인터페이스를 다른 인터페이스들이 상속받아 중복된 프로퍼티를 정의하지 않도록 도와주는 문법!!!

interface Animal2 {
  name: string;
  age: number;
}
interface Dog2 extends Animal2 {
  //👆 extends로 Animal을 가져왔기에 name과 age는 생략한다
  // name: string;
  // age: number;
  isBark: boolean;
}
const dog: Dog2 = {
  name: "쪼꼬",
  age: 8,
  isBark: true
}

interface Cat extends Animal2 {
  // name: string;
  // age: number;
  isScratch: boolean;
}