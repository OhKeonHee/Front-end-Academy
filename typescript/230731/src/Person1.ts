// 1 ) -----
class Person1 {
  name: string;
  age?: number;
}

let jack1: Person1 = new Person1();

jack1.name = 'Jack';
jack1.age = 32;

// 2 ) -----
class Person2 {
  // 필드값
  // name: string;
  // age?: number;
  // 필드값 생략!! => 생성자 함수 안에 매개변수에 접근제한자를 입력!! (ex: public)

  //생성자 함수
  constructor(public name: string, public age?: number) {
    this.name = name;
    this.age = age;
  }
}

let jack2 = new Person2('Jack', 32);

// 3) -----
interface IPerson {
  name: string;
  age?: number;
}

class Person3 implements IPerson {
  constructor(public name: string, public age?: number) {}
}
let jack3 = new Person3('Jack', 32);

// 4) ----- 추상클래스를 만드는 방법 (*abstract)
// 추상 클래스는 자신의 속성이나 매서드 앞에 abstract를 붙여서 나를 상속하는 다른 클래스에서 해당 속성 및 매서드를 구현하게 만드는 목적이 있다!!
  // 4-1) ----- abstract -1
  abstract class AbstractPerson4 {
    abstract name: string;
    constructor(public age?: number) {}
  }
  // ex )
  // class Person4 extends AbstractPerson4 {} // extends로 Person4가 AbstractPerson4의 값을 가져옴

  // 4-2) ----- abstract -2
  abstract class Person4 {
    constructor(public theName: string, public theAge: number) {}

    get name() {
      return this.theName;
    }
    get age() {
      return this.theAge;
    }
  }

// abstract를 활용한 추상클래스의 경우, 인스턴스 객체를 만들 수 없다!!
// const person = new Person4('Jack', 32) // => 추상클래스의 인스턴스를 만들수 없음 오류!!
// 👇👇 상속으로... (super를 꼭 사용!)
class Person5 extends Person4 {
  constructor(theName: string, theAge: number) {
    super(theName, theAge)
  }
}
const PersonT1:Person5 = new Person5('Jack', 10);
console.log(`Person Info: ${PersonT1.theAge}`);

  // 4-2) ----- abstract -3
  abstract class Animal {
    constructor(public _age:number) {}

    get age() {
      return this._age;
    }
    set age(_age: number) {
      this._age = _age;
    }
  }

  class cat extends Animal {
    constructor(_age: number) {
      super(_age)
    }
  }