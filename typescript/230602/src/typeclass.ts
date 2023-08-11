// 타입별칭 생성

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;  
}

let user: User = {
  id: 1,
  name: "홍길동",
  nickname: "cromidi",
  birth: "2000.01.01",
  bio: "안녕",
  location: "서울시"  
}

// 타입스크립트, 인덱스 시그니처

// type CountryCodes = {
//   Korea: string;
//   UnitedStates: string;
//   UnitedKingdom: string;
// }👇 매번 쓸순 없으니 간략하게 인덱스 시그니처로
type CountryCodes = {
  [key: string]: string;
}

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedStates: "us",
  UnitedKingdom: "uk"
}

// 제네릭 타입 별칭
type Map2<T> = {  // <T> (타입변수) -> 타입을 미리 설정하지 않고 들어오는 타입에 따라 적용
  [key: string]: T
}
let stringMap2: Map2<string> = {
  key: "string"
}

// 제네릭 인터페이스
interface KeyPair<K, V> {
  key: K,
  value: V;
}

let KeyPair: KeyPair<string, number> = {
  key: "key",
  value: 0
}

// 제네릭 인터페이스 + 인덱스 시그니처
interface Map4<V> {
  [key: string]: V
}
let stringMap3: Map4<string> = {
  key: "value"
}

//===================================
interface Student {
  type: "student";
  school: string;
}
interface Developer {
  type: "developer";
  skill: string;
}
interface User1<T> {
  name: string;
  profile: Student | Developer; // -> 유니온집합(합집합)으로 User1을 만듬
}

function goToSchool(user: User1<Student>) {
  if(user.profile.type !== "student") {
    console.log("잘못오셨슴다");
    return;
  }

  const school = user.profile.school;
  console.log(`${school}로 등교 완료`)
}

const developerUser: User1<Developer> = {
  name: "엉덩이",
  profile: {
    type: "developer",
    skill: "typescript"
  }
}
const studentUser: User1<Student> = {
  name: "통키",
  profile: {
    type: "student",
    school: "피식대학"
  }
}