function func(a: number, b: number) {
  return a + b;
}
  
//화살표 함수 타입정의
const add = (a: number, b: number): number => a + b;

// 매개변수에 기본값 정의하기
function introduce(name = "홍길동", tall?: number) { 
  console.log(`name : ${name}`);
  if(typeof tall === "number") {
    console.log(`tall : ${tall}`);
  }
}
introduce("홍길동", 182);

// introduce(name = "홍길동", tall?: number, age: number) -> introduce("홍길동", 182); [error뜸]
// introduce(name = "홍길동", age: number, tall?: number) -> introduce("홍길동", 182); [ O ]
// ?(선택적 매개변수)는 반드시 필수 매개변수보다 뒤에 선언해줘야함!!

// =====================================================
// 나머지 매개변수 => ...rest
function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}

getSum(1, 2, 3);
getSum(1, 2, 3, 4); // rest -> 갯수 제한 없음

function getSum1(...rest: [number, number, number]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}

getSum1(1, 2, 3);
getSum1(1, 2, 3, 4); // 튜플타입으로 number 3개를 지정했으면 오류남

// 함수타입의 표현식
// 타입별칭 (*type)

type Add = (a: number, b: number) => number = (a, b) => a + b;

const sub: Add = (a, b) => a - b;
const multi: Add = (a, b) => a * b;
const divide: Add = (a, b) => a / b;

// 호출 시그니처
// 하이브리드 타입 (* 함수타입 정의 + 일반객체 요소 추가)

type Operation2 = {
  (a: number, b: number): number;
  name : string;
}

const add3: Operation2 = (a, b) => a + b;
add3(1, 2);
add3.name;

// 함수 타입 호환성!!!
// 특정 함수 타입을 다른 함수 타입에 적용할 때, 문제가 없는지 판단하는 것을 의미
// 이때 적용가능 여부 판단의 기준은 크게 2가지 : 
// 1) 반환값 타입 호환
// 2) 매개변수 타입 호환

type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; //(O)
b = a; //(X)

// 함수타입에서 매개변수의 개수가 같은 경우, 기존 타입 계층구조와는 달리, 서브타입에 슈퍼타입이 적용가능함!!
// (* 한마디로, 다운캐스팅 가능! / 업캐스팅 불가능!)
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

c = d;
d = c;

type Animal = {
  name: string;
}

// 객체가 더 많은 Dog가 서브타입
type Dog = {
  name: string;
  color: string;
}

let animalFunc = (animal: Animal) => {
  console.log(animal.name)
}

let dogFunc = (dog: Dog) => {
  console.log(dog.color)
}

animalFunc = dogFunc; //[X]
dogFunc = animalFunc; //[O]


// 매개변수의 개수가 다른 경우
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2 //[O] 서브타입에 슈퍼타입 담기 가능
func2 = func1 //[X] 슈퍼타입에 서브타입 담기 불가능! // 업캐스팅 안됨

// 함수 오버로딩
// 동일한 함수를 매개변수의 개수 및 타입에 따라 여러가지 버전으로 만드는 타입스크립트만의 독특한 문법
// 예를 들면, 매개변수가 1개일 때는 모든 매개변수에 20을 곱한 값을 반환, 매개변수가 3개일 땐 모든 매개변수를 더한 값을 반환!! 명령가능!!

// 함수 오버로딩을 사용하려면, 반드시 오버로드 용 시그니처 정의가 우선!!

// 함수 오버로드 시그니처 👇
function func3(a: number): void;
function func3(a: number, b: number, c: number): void;

// 함수 오버로딩 실행문 👇
function func3(a: number, b?: number, c?: number) {
  if(typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}
// 인자 갯수에 따라 같은 함수라도 결과값이 달라짐
func3(1); // 결과값 : 20
func3(1, 2); // 오버로드 시그니처에 인자 2개짜리를 정의해주지 않았기에 오류!
func3(1, 2, 3); // 결과값 : 6


// 사용자 정의 타입
type Dog1 = {
  name: string;
  isBark: boolean; // 강아지가 짖나 안짖나를 사용자 정의로 줌 // boolean으로 true/false
}
type Cat1 = {
  name: string;
  isScratch: boolean;
}

type Animal1 = Dog1 | Cat1; // 합집함 |

//👇 위에 정의한 변수가 바뀌면 밑에 함수는 쓸수가 없어짐
// function warning(animal: Animal1) {
//   if("isBark" in animal) { // 강아지면
//     console.log(animal.isBark ? "짖는다" : "안짖는다") // 강아지면 짖는다, 아니면 안짖는다 출력
//   } else if("isScratch" in animal) { // 고양이면
//     console.log(animal.isScratch ? "할켰다" : "안할켰다")
//   }
// }

// isDog함수의 animal 매개변수가 Dog 타입인지 아닌지 확인하는 사용자 정의 타입
function isDog(animal: Animal1): animal is Dog1 {
  return (animal as Dog1).isBark !== undefined;
}
// isCat함수의 animal 매개변수가 Cat 타입인지 아닌지 확인하는 사용자 정의 타입
function isCat(animal: Animal1): animal is Cat1 {
  return (animal as Cat1).isScratch !== undefined;
}

function warning1(animal: Animal1) {
  if(isDog(animal)) {
    console.log(animal.isBark ? "짖는다" : "안짖는다")
  } else {
    console.log(animal.isScratch ? "할켰다" : "안할켰다")
  }
}

