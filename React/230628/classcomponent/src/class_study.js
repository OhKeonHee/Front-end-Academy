// 클래스를 만들어보자
class Student {
  // 생성자 함수
  constructor({name, age, grade}) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  introduce() {
    return `안녕하세요, 제 이름은 ${this.name}입니다.`;
  }
}
const studentA = new Student({name: '오건희', age: 26, grade: 2});
console.log(Student.introduce());


// 상속에 대하여

class StudentDeveloper extends Student {
  constructor({name, age, grade, favoriteSkill}) {
    super(name, age, grade) // <- 나 이거 상속받았다 알려주기  // super()
    this.favoriteSkill = favoriteSkill;
  }
}