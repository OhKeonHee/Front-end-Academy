// 필드안에 초기값을 반드시 명시해주어야 한다!!

// 타입스크립트 클래스의 필드값은 기본적으로 public이라는 디폴트값을 가지고 있다
// 필드값에 접근하지 못하도록 하기 위해선 private이라는 값을 적용하면 된다!!
// protected 값은 외부에서는 수정이 불가능하지만, 확장 클래스에선 제한적으로 수정이 가능하도록 설정한 필드 속성

class Employee {
  //필드
  name: string = "";
  age: number = 0;
  position: string = "";

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("워커홀릭");
  }
}

const employee2

// 타입스크립트에서 클래스는 또 하나의 타입으로도 사용가능!!!
const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {}
}

// 타입스크립트에서도 클래스 상속 가능!! 단, 타입스크립트에서 클래스 상속 시, super메서드를 호출해서 확장하고자 하는 (* 카피하고자 하는) 생성자를 호출해야함
class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number = 1;

  // 생성자
  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position);
    this.officeNumber = officeNumber
  }
}

// 인터페이스를 구현하는 클래스!!
// 타입스크립트에서 인터페이스의 또 다른 역할!!
interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

// 타입스크립트에서 클래스를 생성할 때, 사용하는 [ implements ]는 해당 인터페이스를 생성하고자 하는 클래스에서 모두 만족하도록 구현하게끔 만드는 키워드!! 
class Character implements CharacterInterface {
 
}
