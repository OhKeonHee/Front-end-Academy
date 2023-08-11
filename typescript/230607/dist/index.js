// import { testMakePerson } from "./test.js";
// testMakePerson();
//=========================================
// let n: number = 1;
// let b: boolean = true;
// let n2 = 2; // 데이터값을 추론해서 알아서 n2를 number로 생각
// let count = 10;
// let message = "Your count";
// let result = `${message} is ${count}`
// console.log(result);
//========================================
// interface IPerson {
//   name: string;
//   age?: number; // -> ?로 굳이 밑에서 사용안해도된다는걸 표시
// }
// let good = {
//   name: "Jack",
//   age: 32
// };
// let bad1: IPerson = {
//   name: "Jane"
// }
//=========================================
// interface test {
//   name: string;
//   age: number;
//   etc?: boolean;
// }
// 
// let take: test = {
//   name: "Jack",
//   age: 22
// }
// 👇 똑같음
// let take: {
//   name: string;
//   age: number;
//   etc?: boolean;
// } = {
//   name: "Jack",
//   age: 22
// }
//====================================== 익명
// let test: {
//   name: string;
//   age: number;
//   etc?: boolean;
// } = {
//   name: "Jack",
//   age: 22
// }
// function printMe(me: {name: string, age: number, etc?: boolean}) {
//   console.log(
//     me.etc?
//     `${me.name} ${me.age} ${me.etc}` :
//     `${me.name} ${me.age} ${me.etc}`
//   )
// }
//==================================== 클래스
// class Person1 { // 클래스 객체타입으로
//   name: string;
//   age?: number;
// }
// let jack1: Person1 = new Person1();
// jack1.name = "Jack";
// jack1.age = 32;
// console.log(jack1);
// class Person2 { // 클래스 객체를 constructor 생성자 함수로 간편히하는 방법
//   constructor (public name: string, public age?: number) {}
// }
// let jack2: Person2 = new Person2("Jack", 32);
// console.log(jack2);
// // 클래스를 정의할 때, 인터페이스를 활용하는 방법 ->
// // class 클래스 이름 implements 인터페이스 이름
// interface IPerson3 {
//   name: string;
//   age?: number;
// }
// class Person3 implements IPerson3 {
//   constructor(public name: string, public age?: number) {}
// }
// let jack3: IPerson3 = new Person3("Jack", 32);
// console.log(Person3);
// class A {
//   static test = 1; //static으로 고정값(정적)으로 정의해줌
// }
// let testVal = A.test;
//=======================================구조 분해 할당
// const fruits = ["사과", "복숭아"];
// // let apple = fruits[0];
// // let peach = fruits[1];
// // let [apple, peach] = ["사과", "복숭아"]; 
// // 👇
// let [apple, peach] = fruits;
// // 나머지 변수를 활용한 구조분해할당
// let [teacher, ...students] = ["kim", "lee", "park", "oh"];
// teacher // -> kim 할당
// students // -> ["lee", "park", "oh"] 할당
// // 변수 값을 교환하는 구조분해할당
// let x = 10;
// let y = 20;
// [x, y] = [y, x]; // x에는 y값을, y에는 x값을 넣는다.
// // 객체를 활용한 구조분해할당
// const member = {
//   name: "kim",
//   age: 26
// };
// let {name, age} = member;
// name // -> "kim"
// age // -> 26
// let name2, age2;
// {name2, age2} = {name: "kim", age: 26};
// name // -> "kim"
// // 중첩된 객체에서 구조분해할당
// const student = {
//   name: "영심이",
//   score: {
//     history: 85,
//     science: 94
//   },
//   friends: ["kim", "lee", "park"]
// }
// //👇 같은방식
// let {
//   name,
//   score: {
//     history,
//     science
//   },
//   friends : [f1, f2, f3]
// } = student
// history // -> 85
// f2 // -> "lee"
// import { IPerson, ICompany } from "./test.js";
// let jack: IPerson = {
//   name: "jack",
//   age: 32
// }
// let apple: ICompany = {
//   name: "apple",
//   age: 43
// }
// let {name, age} = jack;
// console.log(name, age)
// // 타입스크립트에서 나머지 매개변수 활용
// let address: any = {
//   country: "korea",
//   city: "seoul",
//   address1: "Gangnam",
//   address2: "Sinsa",
//   address3: "789st"
// }
// const {country, city, ...detail} = address;
// console.log(detail); // -> { address1: 'Gangnam', address2: 'Sinsa', address3: '789st' }
let part1 = {
    name: "jane"
};
let part2 = {
    age: 22
};
let part3 = {
    city: "seoul",
    country: "korea"
};
let merged = { ...part1, ...part2, ...part3 };
console.log(merged); // -> { name: 'jane', age: 22, city: 'seoul', country: 'korea' }
let person = {
    name: "jack",
    age: 32
};
person.name; // <- person.name
// 타입 단언하는 방법
let obj = {
    name: "jack"
};
let name1 = obj.name; // 타입 변환 방식으로 값을 가져온 형태
let name2 = obj.name; // 타입 단언 방식으로 값을 가져온 형태
export {};
