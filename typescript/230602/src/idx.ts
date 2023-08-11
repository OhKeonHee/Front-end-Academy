//인덱스드 엑세스 타입이란, 인덱스를 이용해서 타입 내 특정 프로퍼티 타입을 추출하는 방법!!!

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
};

const post: Post = {
  title: "네이버 타이틀",
  content: "네이버 게시물",
  author: {
    id: 1,
    name: "오건희"
  }
}

function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.id} - ${author.name}`);
}

// keyof 연산자: 객체타입으로부터 프로퍼티의 모든 key들을 추출하는 연산자!!

interface Person {
  name: string;
  age: number;
  location: string;
}

// keyof는 오직 타입에만 적용할 수 있는 연산자임. 변수 및 객체 값은 절대 사용불가!!
function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person: Person = {
  name: "헝길덩",
  age: 26,
  location: "서울시"
}


// 맵드타입 : 기존의 객체 타입을 기반으로 새로운 객체타입을 만드는 -타입스크립트만의 독특한 문법-
interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key]
} // -> ex ) key가 "id"일 때, id: User[id]: number

function fetchUser(): User {
  return {
    id: 1,
    name: "개똥이",
    age: 24
  }
}

function updateUser(user: PartialUser) {
  //서버로부터 받아온 사용자의 데이터를 업데이트하도록 하는 실행문
}
updateUser ({
  age: 24 // -> 위 type PartialUser에서 ?를 안써주면 오류뜸 뭘가져올지 모른다는 뜻의 ?를 써주자
})

//====================================================

// 템플릿 리터럴 타입
type Color = "red" | "black" | "green";
type Animal = "dog" | "cat" | "chicken";

type ColoredAnimal = `${Color}-${Animal}`; // Color 타입과 Animal타입을 묶었음 // 모든 조합을 알아서 묶었음 ex) red-dog,black-dog.....
