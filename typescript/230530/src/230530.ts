// import { hello } from "./test";

// hello();

// 3. 
// 1 ) 원시 타입
// number

// let num1: number = 123;
// let num2: number = -123;
// let num3: number = 0.123;
// let num4: number = -0.123;
// let num5: number = NaN;

// string

// let str1: string = "hello";
// let str2: string = 'hello';
// let str3: string = `hello`;
// let str4: string = `hello ${num1}`;

//boolean

// let bool1: boolean = true;
// let bool2: boolean = false;

//null
// let null1: null = null;

//undefined
// let unde1: undefined = undefined;

//2 ) 리터럴 타입

// let numB: 10 = 10;
// let strA: "hello" = "hello";
// let boolA: true = true;

// 4.
// 배열

// let numArr: number[] = [1, 2, 3];

// let strArr: string[] = ["hello", "world", "good"]

// let boolArr: Array<boolean> = [true, false, true]
// let boolArr1: boolean[] = [true, false, true];

// // 배열에 들어가는 요소들이 다양한 경우
// let multiArr: (number | string)[] = [1, "hello"];

// // 다차원 배열의 타입을 정의하는 경우
// let doubleArr: number[][] = [
//   [1, 2, 3],
//   [4, 5]
// ]

// 튜플 : 길이 및 타입이 고정된 배열을 만들고자 할 때
// 길이와 타입이 고정된 배열

// let tup1: [number, number] = [1, 2];
// let tup2: [number, string, boolean] = [1, "2", true]

// ### 객체 ###
// let user: {
//   id?: number; // ?(물음표)가 있으면 써도되고 안써도됨
//   name: string; // readonly name: string; -> readonly(읽기전용)가 있으면 밑에 수정해도 수정안됨
// } = {
//   name: "오건희"
// }
// user.name = "홍길동"; // 위에 readonly가 있으면 수정안됨

// // ### 타입별칭 ###
// type User = {
//   id: number;
//   name: string;
//   nickname: string;
// };
// let user3: User = {
//   id: 1,
//   name: "오건희",
//   nickname: "닉네임"
// }

// // ### 인덱스 시그니처 ###
// type CountryCodes = {
//   [key : string]: string
// };

// let CountryCodes: CountryCodes = {
//   korea: "Ko",
//   japan: "jp"
// }

// // ### Enum 타입 ###
// enum Role {
//   ADMIN,
//   USER,
//   GUEST
// }

// const user1 = {
//   name: "A",
//   role: Role.ADMIN
// }
// const user2 = {
//   name: "B",
//   role: Role.USER
// }


// // ### any : 타입스크립트 치트키같은 타입!! ###
// // ### unknown : 모든 값을 다 할당할 수 있음, 단 해당값을 다른 변수에는 적용할 수 없음 ###
// let anyVar = 10;
// // anyVar = "hello";

// let anyVar1: any = 10;
// anyVar1 = "hello";
// anyVar1 = true;

// let num10: number = 10;
// num10 = anyVar1;

// // ### void: 아무런 값도 없음을 의미하는 타입 ###
// // ### never: 불가능을 의미하는 타입 ###
// function func2(): void {
//   console.log("hello")
// }

// let a: void;
// a = undefined;

// function func3(): never {
//   while(true) {} // 조건식이 없는 함수는 불가능 따라서 위에 never를 적음
// }

