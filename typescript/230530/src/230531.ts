// // // ### 넘버 타입 (*부모타입 = 슈퍼타입)으로 정의했다!
// // let num1: number = 10;
// // num1 = 20;
// // num1 = -999;

// // // ### 리터럴 타입 (*자녀타입 = 서브타입)으로 정의했다!
// // let num2: 10 = 10;

// // // ### 업 캐스팅 : 자녀타입에서 부모타입으로 값을 할당하는 것
// // // ### 다운 캐스팅 : 부모타입에서 자녀타입으로 값을 할당하는 것
// // num1 = num2;

// // // unknown은 무슨 타입을 쓰던 상관없음
// // let a: unknown = 1;
// // let b: unknown = "hello";
// // let c: unknown = true;
// // let d: unknown = null;
// // let e: unknown = undefined;

// // 타입스크립트의 객체는 프로퍼티를 기준으로 타입을 정의
// // 추가적인 프로퍼티 값이 존재할수록 서브타입으로 성격이 변경됨

// function func1(): void {
//   // console.log("hi");
//   return undefined;
// }

// // 타입 별칭 예시

// type Animal = {
//   name: string;
//   color: string;
// };

// type Dog = {
//   name: string;
//   color: string;
//   breed: string;
// }

// let animal: Animal = {
//   name: "기린",
//   color: "yellow"
// };

// let dog: Dog = {
//   name: "뽀삐",
//   color: "brown",
//   breed: "진돗개"
// };

// // 타입스크립트의 객체는 프로퍼티를 기준으로 타입을 정의!!
// // 추가적인 프로퍼티 값이 존재할수록 서브타입으로 성격이 변경됨
// animal = dog;
// // dog = animal;

// type Book = {
//   name: string;
//   price: number;
// };

// type ProgrammingBook = {
//   name: string;
//   price: number;
//   skill: string;
// }

// let book: Book;
// let programmingBook: ProgrammingBook = {
//   name: "타입스크립트",
//   price: 33000,
//   skill: "react"
// }

// book = programmingBook;

// let book2: Book = {
//   name: "타입스크립트",
//   price: 33000,
//   skill: "react" -> 얘는 안됌(book에는 skill이 없음)
// }

// // 초과 프로퍼티 검사 : 변수를 객체 리터럴로 초기화할 때, 발동하는 타입스크립트만의 특수한 기능
// // 초기에 정의된 프로퍼티 외 다른 초과된 프로퍼티를 갖는 객체를 변수에 할당할 수 없도록 막는 기능

// // ### 타입계층구조, 객체타입, 대수(*Algebraic) 타입
// // 대수타입 : 여러 개의 타입을 합성해서 만드는 타입
// // 대수타입 종류 : 모든 타입을 하나로 합치는 합집합 타입(*Union), 두 타입의 공통된 요소만 사용하는 교집합 타입(*Intersection)

// let a: string | number;

// a = 1;
// a = "hello";
// a = true;

// // # Union 타입
// let arr: (number | string | boolean)[] = [1, "hello", true];

// // 
// type Dog = {
//   name: string;
//   color: string;
// }
// type Person = {
//   name: string;
//   language: string;
// }
// type Union1 = Dog | Person;

// let union1: Union1 = {
//   name: "",
//   color: ""
// }
// let union2: Union1 = {
//   name: "",
//   language: ""
// }
// let union3: Union1 = {
//   name: "",
//   color: "",
//   language: ""
// }
// // let union4: Union1 = {
// //   name: ""
// // }
// // 오류 - name만 단독 사용 시

// // # Intersection 타입
// type Intersection = Dog & Person;

// let Intersection1: Intersection = {
//   name: "",
//   color: "",
//   language: ""
// }

// // ### 타입추론 : 타입스크립트는 아직 정의되지 않은 변수의 타입을 "자동"으로 추론함
// let a = 10; -> a를 number로 추론함

