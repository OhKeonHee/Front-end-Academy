// 자바스크립트에서 클래스는 동일한 요소를 담고 있는 객체를 보다 쉽고, 효율적으로 재생성하기 위해서 만들어진 문법!!! => ES6인 최신버전의 문법!!

// 클래스를 선언할 때에는 반드시 class 키워드 사용!!! 클래스는 프로토타입의 객체를 선언하는 일종의 룰 = A.K.A 붕어빵 틀
// ex )
class Student {
  //필드
  name;
  grade;
  age;

  //생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  study() {
    console.log("열심히 공부하는 친구")
  }

  introduce() {
    console.log(`안녕하세요 ${this.name} 입니다.`)
  }
}
const studentC = new Student("빵순이", "A", 21);
console.log(studentC);

// 👇 이렇게 하나하나 쓰기 귀찮아서 위에처럼 틀을 만들어줌
// let studentA = {
//   name: "홍길동",
//   grade: "A+",
//   age: 20,
//   major: "computer",
//   memo() {
//     console.log("열심히 공부하는 친구");
//   }
// }
// let studentB = {
//   name: "웅앵웅",
//   grade: "B",
//   age: 22,
//   major: "korean",
//   memo() {
//     console.log("국어공부하는 친구");
//   }
// }

