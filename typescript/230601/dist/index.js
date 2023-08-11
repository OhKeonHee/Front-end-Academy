function func(a, b) {
    return a + b;
}
//화살표 함수 타입정의
const add = (a, b) => a + b;
// 매개변수에 기본값 정의하기
function introduce(name = "홍길동", tall) {
    console.log(`name : ${name}`);
    if (typeof tall === "number") {
        console.log(`tall : ${tall}`);
    }
}
introduce("홍길동", 182);
// introduce(name = "홍길동", tall?: number, age: number) -> introduce("홍길동", 182); [error뜸]
// introduce(name = "홍길동", age: number, tall?: number) -> introduce("홍길동", 182); [ O ]
// ?(선택적 매개변수)는 반드시 필수 매개변수보다 뒤에 선언해줘야함!!
// =====================================================
// 나머지 매개변수 => ...rest
function getSum(...rest) {
    let sum = 0;
    rest.forEach((it) => (sum += it));
    return sum;
}
getSum(1, 2, 3);
getSum(1, 2, 3, 4); // rest -> 갯수 제한 없음
function getSum1(...rest) {
    let sum = 0;
    rest.forEach((it) => (sum += it));
    return sum;
}
getSum1(1, 2, 3);
getSum1(1, 2, 3, 4); // 튜플타입으로 number 3개를 지정했으면 오류남
(a, b) => a + b;
const sub = (a, b) => a - b;
const multi = (a, b) => a * b;
const divide = (a, b) => a / b;
const add3 = (a, b) => a + b;
add3(1, 2);
add3.name;
let a = () => 10;
let b = () => 10;
a = b; //(O)
b = a; //(X)
let c = (value) => { };
let d = (value) => { };
c = d;
d = c;
let animalFunc = (animal) => {
    console.log(animal.name);
};
let dogFunc = (dog) => {
    console.log(dog.color);
};
animalFunc = dogFunc; //[X]
dogFunc = animalFunc; //[O]
let func1 = (a, b) => { };
let func2 = (a) => { };
func1 = func2; //[O] 서브타입에 슈퍼타입 담기 가능
func2 = func1; //[X] 슈퍼타입에 서브타입 담기 불가능! // 업캐스팅 안됨
// 함수 오버로딩 실행문 👇
function func3(a, b, c) {
    if (typeof b === "number" && typeof c === "number") {
        console.log(a + b + c);
    }
    else {
        console.log(a * 20);
    }
}
// 인자 갯수에 따라 같은 함수라도 결과값이 달라짐
func3(1); // 결과값 : 20
func3(1, 2); // 오버로드 시그니처에 인자 2개짜리를 정의해주지 않았기에 오류!
func3(1, 2, 3); // 결과값 : 6
//👇 위에 정의한 변수가 바뀌면 밑에 함수는 쓸수가 없어짐
// function warning(animal: Animal1) {
//   if("isBark" in animal) { // 강아지면
//     console.log(animal.isBark ? "짖는다" : "안짖는다") // 강아지면 짖는다, 아니면 안짖는다 출력
//   } else if("isScratch" in animal) { // 고양이면
//     console.log(animal.isScratch ? "할켰다" : "안할켰다")
//   }
// }
// isDog함수의 animal 매개변수가 Dog 타입인지 아닌지 확인하는 사용자 정의 타입
function isDog(animal) {
    return animal.isBark !== undefined;
}
// isCat함수의 animal 매개변수가 Cat 타입인지 아닌지 확인하는 사용자 정의 타입
function isCat(animal) {
    return animal.isScratch !== undefined;
}
function warning1(animal) {
    if (isDog(animal)) {
        console.log(animal.isBark ? "짖는다" : "안짖는다");
    }
    else {
        console.log(animal.isScratch ? "할켰다" : "안할켰다");
    }
}
export {};
