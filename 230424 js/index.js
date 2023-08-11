// // ##### 프로토타입 & 인스턴스 객체 만들기 #####

// const Book = function(title, pages, done) {
//   this.title = title;
//   this.pages = pages;
//   this.done = done;

//   this.finish = function() {
//     this.done === false ? str = "읽는 중" : str = "완독";
//     return str;
//   }
// }

// //콘솔창
// const book1 = new Book("자바스크립트", 650, false);
// book1;
// // Book {title: '자바스크립트', pages: 650, done: false, finish: ƒ}
// book1.finish();
// // '읽는 중'


// ##### 객체 생성 최상위 단위: Object() #####
// Object() > Book > book1

// .__proto__ : 인스턴스 객체 프로토타입 확인
// ex) book1.__proto__;
// .prototype : 생성자 함수 프로토타입 확인
// ex) Book.prototype;

// => Book.prototype; : Object()

// ex)
// const Book = function(title, pages, done) {
//   this.title = title;
//   this.pages = pages;
//   this.done = done;
// }
// Book.prototype.finish = function() {
//     this.done === false ? str = "읽는 중" : str = "완독";
//     return str;
// }

// //콘솔창 확인하기
// const nBook1 = new Book("자바스크립트", 648, false);
// // 인스턴스 객체 선언
// nBook1;
// // Book {title: '자바스크립트', pages: 648, done: false}done: falsepages: 648title: "자바스크립트"[[Prototype]]: Object
// // 
// nBook1.finish();
// // '완독'

// 1.생성자 함수 or 클래스
// 2.사용자 정의 객체
// 3. 유사한 혹은 동일한 프로퍼티 또는 메서드를 가지고 있는 객체를 대량으로 생산하고 싶어서

// 만약 100% 똑같지는 않지만 새로운 버전의 생성자 함수가 필요하다면?

// function Book (title,price) {
//   this.title = title;
//   this.price = price;
// }
// Book.prototype.buy = function() {
//   console.log(`${this.title}을 ${this.price}에 구매하였습니다.`)
// }

// 콘솔창
// const nBook1 = new Book("우동", 10000);
// nBook1;
// nBook1.buy();



// 만약 교재정보를 추가로 담는 또 다른 생성자 함수가 필요하다면?

// function Textbook(title, price, major) {
//   Book.call(this, title, price);
//   this.major = major;
// }
// Textbook.prototype.buyTextbook = function() {
//   console.log(`${this.major} 전공서적, ${this.title}을 구매했습니다!`)
// }
// Object.setPrototypeOf(Textbook.prototype, Book.prototype);
// // Textbook 프로토타입(부모객체)에 Book(자녀객체)을 연결 => 생성자 함수의 상속

// 콘솔창
// const book2 = new Textbook("알고리즘", 5000, "컴퓨터공학");
// book2;
// book2.buyTextbook();
// book2.buy(); => 생성자 함수의 상속 없이는 작동 X

//################## 클래스 정의법 #################
// * 생성자 함수를 활용한 객체 생성방법 : 고전적인, 전통적인 방법임
// * 2015년 ES6버전 : 클래스 객체 생성방법이 추가됨

// class BookC {
//   constructor(title, price) {
//     this.title = title;
//     this.price = price;
//   }
//   buy() {
//     console.log(`${this.title} 을(를) ${this.price} 원에 구매하였습니다.`)
//   }
// }
// // ### BookC의 상속을 받는 새로운 클래스 정의
// class TextbookC extends BookC {
//   constructor(title, price, major) {
//     super(title, price); //title과 price는 그대로 상속받는다 => super()
//     this.major = major;
//   }
//   buyTextBook() {
//     console.log(`${this.major} 전공서적, ${this.title}을 구매하였습니다.`)
//   }
// }

// ---- 콘솔창 ----
// const book1 = new BookC("자료구조", 15000);
// book1;
// > BookC {title: '자료구조', price: 15000}
// book1.buy();
// > index.js:98 자료구조 을(를) 15000 원에 구매하였습니다.

// const book2 = new TextbookC("인공지능", 5000, "컴퓨터공학");
// > undefined
// book2;
// > TextbookC {title: '인공지능', price: 5000, major: '컴퓨터공학'}
// book2.buy();
// > index.js:98 인공지능 을(를) 5000 원에 구매하였습니다.

// let ques = prompt("강아지 이름을 알려주세요.");

// class Pet {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }
//   run() {
//     alert(`${this.name} is running`);
//     location.reload();
//   }
// }

// let quesCat = prompt("고양이의 이름을 알려주세요.");
// let quesCatKind = prompt("고양이의 품종을 알려주세요.");
// class Cat extends Pet {
//   constructor(name, kind, color) {
//     super(name, color);
//     this.kind = kind;
//   }
//   mycat() {
//     alert(`이름 : ${this.name}, 품종 : ${this.kind}, 색깔 : ${this.color}`);
//   }
// }
// const dog = new Pet(ques, "yellow");
// dog.run();
// const cat = new Cat(quesCat, quesCatKind, "흰색");
// cat.mycat();

// ################## 문자열 및 배열 ##################

// 자바스크립트 쓰임새
// 1 ) 전통 프론트엔드 개발 : 웹브라우저 화면에 펼쳐질 수 있는 기술
// 2 ) 백엔드 연동 스킬 : 비동기 방식 데이터 수집

// ---- 콘솔창 ----
// let num = 123;
// num; => 123 // Number 라는 내장 객체가 있기 때문에
// let str = "Hello"; // String 라는 내장 객체가 있기 때문에
// ---- ----

// 문자열에서 문자의 위치를 확인하는 2가지 메서드
// 1 ) chartAt() : 매개변수 값에 해당하는 인덱스 문자열을 반환할 때 사용
// 2 ) indexOf() : 매개변수 값에 해당하는 문자의 인덱스 넘버를 반환할 때 사용

// ---- 콘솔창 (chartAt())----
// > let str = "Good morning!";
// > str;
// 'Good morning!'
// > str.length;
// 13
// > str[5]; //대괄호 치고 숫자를 입력하면 문자열에서 그 숫자에 위치한 문자를 반환 (chartAt()와 같은 역할)
// 'm'
// > str.chartAt(5);
// 'm'
// ---- ----

// ####### Question )
// - 사용자로부터 특정 텍스트(*문자)를 수집하고, 해당 텍스트에 특정 문자가 몇 번 사용되었는지 확인해보는 프로그램 만들기

// const string = prompt("영어 단어를 입력하세요.");
// const letter = prompt("어떤 문자를 체크할까요??");

// function counting(str, ch) {
//   let count = 0;

//   for(let i = 0; i < str.length; i++) {
//     if (str.charAt(i) === ch)
//     count += 1; //i값이 증가하면서 찾으려고하는 문자 ch와 일치할때마다 count변수에 1씩 더해준다.
//     }
//     return count;
// }

// const result = counting(string, letter);
// document.write(`"${string}" 에는 "${letter}" 단어가 [ ${result} ] 개 있습니다.`);

// ---- 콘솔창 (indexOf())----
// > let str1 = "Good morning, everyone. Beatiful morning"
// > str1;
// 'Good morning, everyone. Beatiful morning'
// > str1.indexOf("morning");
// 5
// > str1.indexOf("evening"); //indexOf()는 문자열이 존재하지 않을 땐 무조건 (-1)을 반환한다. (나중에 조건식으로 써먹을 수 있음)
// -1
// ///// morning이 2갠데?? -- 두 번째 인덱스를 찾고 싶을 때
// > let firstIndex = str1.indexOf("morning"); //먼저 첫번째 인덱스값을 저장해놓고
// > firstIndex;
// 5
// > str1.indexOf("morning", firstIndex + 1); // 저장해놓은 인덱스값에 + 1 을 해줌
// 34
// ---- ----

// #################### 입력 날짜 계산 #######################
// const theYear = document.querySelector("#year");
// const theMonth = document.querySelector("#month");
// const theDate = document.querySelector("#date");
// const btn = document.querySelector("#btn");

// const current = document.querySelector("#current");
// const resultDays = document.querySelector("#days");
// const resultHours = document.querySelector("#hours");

// const today = new Date();
// current.innerText = `${today.getFullYear()} 년 ${today.getMonth() + 1} 월 ${today.getDate()} 일 ${today.getHours()} 시 ${today.getMinutes()} 분 현재`

// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   const theDay = new Date(theYear.value, theMonth.value - 1, theDate.value);

//   let passed = theDay.getTime() - today.getTime();
//   let passedDays = Math.floor(passed / (1000 * 24 * 60 * 60));
//   let passedHours = Math.floor(passed / (1000 * 60 * 60));

//   resultDays.innerText = `날짜로는 ${passedDays}일 남았고,`;
//   resultHours.innerText = `시간으로는 ${passedHours}시간이 남았습니다.`;

//   theYear.value = "";
//   theMonth.value = "";
//   theDate.value = "";
// })


// ################## 문자열에서 문자를 확인하는 3가지 메서드 ##################

// 1 ) startsWith() : 특정 문자나 문자열로 시작하는지 확인
// > 문자열.startsWith(문자, 인덱스 넘버) : 특정 인덱스 넘버에 문자가 존재하는지 여부 확인

// 2 ) endsWith() : 특정 문자나 문자열로 끝나는지 확인
// > 문자열.endsWith(문자, 전체 길이) : 문자열의 전체 길이 가운데 마지막 문자열에 해당 문자여부 확인할 때

// 3 ) includes() : 특정 문자나 문자열에 어떤 문자가 포함되었는지 확인할 때 includes() 메서드 사용

// ---- 콘솔창 (startsWith())----
// > let str2 = "Hello, everyone";
// > str2.startsWith("Hello");
// true
// > str2.startsWith("hello");
// false
// > str2.startsWith("He");
// true
// > str2.startsWith("Hello, ev");
// true
// > str2.startsWith("el", 1); //el이라는 단어가 있는지 확인, index값 => el이라는 단어의 index가 1인지
// true
// > str2.startsWith("o", 4);
// true
// ---- ----

// ---- 콘솔창 (endsWith())----
// > let str2 = "Hello, everyone";
// > str2.endsWith("everyone")
// true
// > str2.endsWith("Everyone")
// false
// > str2.endsWith("one.")
// true
// > str2.length;
// 16
// >str2.endsWith("one." 16);
// true
// >str2.endsWith("one." 15);
// false
// >str2.endsWith("lo" 5);
// true
// ---- ----

// ---- 콘솔창 (includes())----
// > let str2 = "Hello, everyone";
// > str2.includes("every")
// true
// ---- ----

// ################## 문자열에서 공백을 제거하는 3가지 메서드 ##################
// 1 ) 문자열.trim() : 문자열의 앞뒤 공백제거
// 2 ) 문자열.trimStart() : 문자열의 앞 공백제거
// 3 ) 문자열.trimEnd() : 문자열의 뒤 공백제거

// ---- 콘솔창 (trim())----
// > let str3 = " ab cd ef ";
// > str3.trim();
// 'ab cd ef'
// > str3.trimStart();
// 'ab cd ef '
// > str3.trimEnd();
// ' ab cd ef'
// ---- ----

// ################## 문자열에서 대소문자 바꾸는 2가지 메서드 ##################
// 1 ) 문자열.toUpperCase() : 문자열 대문자로
// 2 ) 문자열.toLowerCase() : 문자열 소문자로

// ---- 콘솔창 (upper&lower())----
// > let str4 = "Good morning.";
// > str4.toUpperCase();
// 'GOOD MORNING'
// > str4.toLowerCase();
// 'good morning'
// ---- ----

// ❗❗❗ ################## 문자열에서 특정 문자열만 추출할 때 사용하는 2가지 메서드 ##################
// 1 ) 문자열.substring(시작위치, 끝위치) : 시작위치부터 끝위치 직전까지의 문자열을 추출 및 반환
// > 문자열.substring(시작위치) : 시작위치부터 끝까지 반환
// 2 ) 문자열.slice(시작위치, 끝위치) : 시작위치부터 끝위치 직전까지의 문자열을 추출 및 반환
// > 문자열.slice(시작위치) : 시작위치부터 끝까지 반환

// 둘이 똑같지만 다른점 한가지는 slice()는 음수 값을 쓸 수가 있음
// substring()의 위치값은 (-)가 오면 0으로 가짐

// ---- 콘솔창 (upper&lower())----
// > let str4 = "Good morning.";
// > str4.substring(5);
// 'morning'
// > str4.slice(0, 4);
// 'Good'
// > str4.slice(-5, 12);
// 'ning'
// ---- ----

//  ################## 문자열에서 특정 구분자에 따라서 문자를 쪼갤 때 사용하는 메서드 : split(구분자) ##################

// ---- 콘솔창 (split()) ----
// > str5 = "Hello everyone";
// > let array1 = str5.split(" ");
// undefined
// > array1;
// (2) ['Hello', 'everyone'] // 쪼개면서 배열형태로 바뀜
// > array1[0];
// 'Hello'
// > array1[1];
// 'everyone'
// > let array2 = str5.split(""); // 모든 문자를 쪼개고 싶다면 구분자에 아무것도 안쓴다.
// undefined
// > array2;
// (14) ['H', 'e', 'l', 'l', 'o', ' ', 'e', 'v', 'e', 'r', 'y', 'o', 'n', 'e']
// ---- ----

// #########이메일 형식을 이용해 사용자의 이름과 도메인명 구분하기 (split()) #############
// const button = document.querySelector("button");
// const email = document.querySelector("#userEmail");
// const result = document.querySelector("#result");

// button.addEventListener("click", () => {
//   let username = "";
//   let domain = "";

//   if(email.value !== "") {
//     username = email.value.split("@")[0];
//     username = username.substring(0,2);
//     domain = email.value.split("@")[1];
//     result.innerText = `${username}...@${domain}`;
//     email.value = "";
//   }
// })

// ################## 정규 표현식 ##################
// : 특정 패턴을 사용해서 문자열을 표현하는 언어

// - 숫자 digit 클래스 
// \d : 0~9사이의 숫자
// \D : 숫자가 아닌 모든 문자

// - 공백 space 클래스
// \s : 공백, 탭, 줄바꿈 의미
// \S : 공백이 아닌 모든 문자

// - 단어 word 클래스
// \w : 단어에 들어가는 문자 및 숫자를 의미
// \W : 단어에 들어가지 않는 모든 문자

// ---- 콘솔창 () ----
// > let regexp = /\d{3}/; // 0~9 사이의 숫자 중 3자리의 숫자를 찾아와라, //사이에 패턴을 정의해줌
// undefined
// > regexp.test("Hello"); // test() : 정규표현식에서 사용자가 정의한 함수와 일치하면 true 아니면 false
// false
// > regexp.test(123);
// true
// > regexp.test(12);
// false // 사용자는 3자리를 정의했기 때문

// > let str = "ES2023 is powerful!";
// undefined
// > str.match(/is/); // match() : 정의한 패턴을 찾고 있다면 알려주고 아니면 null
// ['is', index: 7, input: 'ES2023 is powerful!', groups: undefined]
// > str.match(/ES6/);
// null

// > /es/.test(str);
// false //대문자로 되어있기 때문
// > /es/i.test(str); // i => 대소문자를 가리지말고 찾아와라
// true
// > /es/g.test(str); // g => 패턴과 일치하는 모든 것
// true
// > /es/ig.test(str);
// true

// > str.match(/ES/);
// ['ES', index: 0, input: 'ES2023 is powerful!', groups: undefined]
// > str.match(/ES\d/); // \d 숫자찾아오기
// ['ES2', index: 0, input: 'ES2023 is powerful!', groups: undefined]
// > str.match(/ES\d\d\d\d/);
// ['ES2023', index: 0, input: 'ES2023 is powerful!', groups: undefined]

// > let hello = "Hello everyone.";
// > /^H/.test(hello); // ^ => ~로 시작하는지 확인, //H라는 단어로 시작하는지 여부
// true
// > /^h/.test(hello); //대소문자 구분!
// false
// > /one.$/.test(hello); // $ => ~로 끝나는지 확인
// true
// > /e.$/.test(hello);
// true
// > /one$/.test(hello); // .으로 끝나기 때문에 false
// false

// > "ES2023".match(/[0-9]/g); // 숫자열이 있는 패턴을 모두 찾아라
// (4) ['2', '0', '2', '3']
// > "ES2023".match(/^[0-9]/g);
// null  // 숫자로 안시작함
// > "ES2023".match(/[^0-9]/g); // 0~9 배열 안에 ^을 쓰면 반대 개념으로 숫자를 제외한것을 찾아줌
// (2) ['E','S']
// ---- ----

// ################## 정규표현식에서 반복적인 검색을 할 때 사용하는 표현방법 ##################

// 1) 패턴{n} : 패턴이 n번 반복되는 것을 찾아라

// 2) 패턴{n,} : 패턴이 최소 n번 이상 반복되는 것을 찾아라

// 3) 패턴{m, n} : 패턴이 최소 m번 이상, 최대 n번 이하 반복되는 것을 찾아라

// ---- 콘솔창 () ----
// > let str = "Oooops";
// > str.match(/o{2}/);
// ['oo', index: 1, input: 'Oooops', groups: undefined]
// > str.match(/o{2,}/);
// ['ooo', index: 1, input: 'Oooops', groups: undefined]
// > str.match(/o{2,4}/);
// ['ooo', index: 1, input: 'Oooops', groups: undefined]
// > str.match(/o{2,4}/i);
// ['Oooo', index: 0, input: 'Oooops', groups: undefined]
// ---- ----

// ################## 조건에 일치하는 문자열을 찾는 특수문자 ##################

// [] : 특정 식의 시작과 끝
// ex ) [1-9] => 1에서 9까지

// ^x : x로 시작하는 문자열
// x$ : x로 끝나는 문자열
// x+ : x가 한 번 이상 반복되는 문자열
// x? : x가 0번 또는 한 번 있는 문자열
// x* : x가 0번 이상 반복되는 문자열

// . : 특정 문자 하나를 찾을 때 사용
// ex ) [x.z] : x라는 문자와 z라는 문자 사이에 문자 하나만 존재하는 패턴을 찾아라 => xAz(o), xADz(x)

// * 숫자패턴
// /^[0-9]+$/ : 숫자 있는거 싹다 찾아
// * 양의 정수 패턴
// /^[0-9]\d*/ : 양수 있는거 싹다 찾아
// * 음의 정수 패턴
// /^\-[0-9]\d*/ : 음수 있는거 싹다 찾아라
// * 영문자 패턴
// /^[a-zA-Z]+$/
// * 영문자 및 숫자 패턴
// /^[a-zA-Z0-9]+$/

// * ####### 문자열과 배열 변환하는 방법 #######

// 1) split() 방법
// > let str5 = "Hello, everyone";
// > str5.split("");
// > let array2 = str5.split(""); // 모든 문자를 쪼개고 싶다면 구분자에 아무것도 안쓴다.
// > array2;
// (15) ['H', 'e', 'l', 'l', 'o', ',', ' ', 'e', 'v', 'e', 'r', 'y', 'o', 'n', 'e']

// 2) ... (전개연산자) 방법
// > let str5 = "Hello, everyone";
// array3 = [...str5];
// (15) ['H', 'e', 'l', 'l', 'o', ',', ' ', 'e', 'v', 'e', 'r', 'y', 'o', 'n', 'e']

// 3) Array 쓰는 방법
// > let str5 = "Hello, everyone";
// > array4 = Array.from(str5);
// (15) ['H', 'e', 'l', 'l', 'o', ',', ' ', 'e', 'v', 'e', 'r', 'y', 'o', 'n', 'e']

// > let str4 = "Good morning.";
// > str4.toUpperCase();

// let str = prompt("영문 소문자로 된 문자열을 입력하세요.");

// result1 = str.slice(0,1).toUpperCase();
// result2 = str.slice(1);
// document.write(result1 + result2);

// const firstCh = str[0].toUpperCase();
// const remainCh = str.slice(1);
// const result = firstCh + remainCh;
// document.write(result);


// * 배열 : 여러개의 객체를 한꺼번에 묶거나 일부분을 삭제 및 수정하거나 할 때 사용할 수 있는 객체 타입

// ** 배열을 생성하는 방법 3가지

// 1) 빈 배열을 만들고 값 할당

// 2) 리터럴 표기법으로 생성

// 3) Array객체의 인스턴스 객체로 생성

// 배열 => 반복문!

// let colors = ["red", "green", "blue", "white", "black"];

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors)
// }

// 역순으로 정렬하는 방법 : reverse();
// 크기에 따라 정렬하는 방법 : sort();

// 배열 요소에서 맨 끝에 값을 추가하거나 제거하는 방법
// -요소.pop() : 맨 마지막 값을 제거하는 메서드
// 위 배열 객체 예시에서 apple 제거
// -요소.push() : 맨 마지막 값을 추가하는 메서드

// 배열요소에서 맨 앞에 값을
// -요소.shift() : 맨 앞에 값을 제거하는 메서드
// -요소.unshift() : 맨 앞에 값을 추가하는 메서드

// 특정위치에 어떠한 요소를 추가하거나 제거하는 메서드
// : splice();

// slice(인수) : 해당 인수부터 끝까지 요소를 모두 선택
// slice(인수, 인수) : 첫번째 입수부터 두번째 인수 바로 직전까지 선택

// splice(인수) : 해당 인수부터 끝까지 요소를 모두 선택
// splice(인수, 인수) : 첫번째 입수에에서 두번째 인수개수만큼 요소 선택해서 삭제

// splice() : 원본 배열을 수정합니다.
// slice() : 원본 배열을 수정하지 않습니다

// ############# 특정위치에 어떠한 요소를 추가하거나 제거하는 메서드 #############
// : splice();

// slice(인수) : 해당 인수부터 끝까지 요소를 모두 선택
// slice(인수, 인수) : 첫 번째 인수부터 두 번째 인수의 바로 직전까지 선택

// splice(인수) : 해당 인수부터 끝까지 요소를 모두 선택
// splice(인수, 인수) : 첫 번째 인수에서 두 번째 인수 갯수만큼 요소를 선택해서 삭제

// *** slice와 splice의 차이점
// splice() : 원본 배열 수정O / slice() : 원본 배열 수정X

// ---- 콘솔창 ----
// > let subject = ["html", "css", "javascript", "react", "typescript"];
// > subject[2];
// 'javascript'
// > subject.splice(2);
// (3) ['javascript', 'react', 'typescript']
// > subject;
// (2) ['html', 'css']

// > let brunch = ["egg", "milk", "apple", "banana"];
// > brunch.splice(2, 0, "coffee", "bread") // 아무것도 제거하지 않는 대신 값을 추가해줌
// []
// > brunch;
// (6) ['egg', 'milk', 'coffee', 'bread', 'apple', 'banana']

// > let colors = ["red", "green", "blue", "white", "black"]
// > let color1 = colors.slice(2);
// > color1;
// (3) ['blue', 'white', 'black']
// > colors;
// (5) ['red', 'green', 'blue', 'white', 'black']

// > let color2 = colors.splice(2);
// > color2;
// (3) ['blue', 'white', 'black']
// > colors;
// (2) ['red', 'green']

// ################## 배열을 html출력 ##################
//<정의가 필요한 부분>

//1. 출력공간에 대한 정의
//- 원래 배열 출력
// - 모든 값을 더한 배열 출력

// 2. 주어진 배열을 더하는 연산식 정의

// 3. 출력방식에 대한 정의
// - 테이블 형식

// const origin = document.querySelector("#origin");
// const result = document.querySelector("#result");

// let numbers = [2, 4, 6, 8, 10];
// showArray(origin, numbers);

// function showArray(area, numbers) {
//   let str = "<table><tr>";
//   for(let i = 0; i < numbers.length; i++) {
//     str += "<td>" + numbers[i] + "</td>"
//   }
//   str += "</tr></table>";
//   area.innerHTML = str;
// }
// // result 부분
// let sum = 0;
// for(let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// numbers.push(sum);
// showArray(result, numbers);

// const origin = document.querySelector("#origin");
// const result = document.querySelector("#result");

// let numbers = prompt("숫자를 입력하세요.");

// 방법 1.
// function tail(e) {
//   let num = "";
//   if (e.length > 1) {
//     num = e.slice(1);
//   } else {
//     num = e;
//   }
//   return num;
// }

// 방법 2.
// const tail = e => {
//   let sum = e.length > 1 ? e.slice(1) : e;
//   return sum;
// }


// origin.innerText = numbers;
// result.innerText = tail(numbers);

// 1. 매개변수 기본값 설정
// 2. 전개연산자 = 전개구문 (* 3가지 사용법)
//   = 1) 나머지 매개변수
//   = 2) 배열 합칠 때
//   = 3) 배열객체 데이터 복사할 때
//   = 4) 구조 분해 할당

// @@1
// function addNum(a, b) {
//   let sum = 0;

//   for (let el of addNum) {
//     sum += el;

//     return sum;
//   }
// }

// console.log(addNum(1,2))

// @@2
// function addNum(...numbers) {
//   let sum = 0;

//   for (let el of numbers) {
//     sum += el;

//     return sum;
//   }
// }

// console.log(addNum(1,2,3,4,5,6))

// @@3
// const fruits = ["apple", "banana", "cherry"];
// const favorite = fruits;
// favorite[1] = "grape";
// console.log(favorite); => ['apple', 'grape', 'cherry']
// console.log(fruits); => ['apple', 'grape', 'cherry']
// =>
// 배열 객체도 객체임.
// 원시유형 자료 전달 X
// 참조주소 전달

// @@ 위 문제를 해결할 방법 (mine)
// const mine = [...fruits];
// mine[1] = "orange";
// console.log(mine); => ['apple', 'orange', 'cherry'] => mine으로 바꾼것만 바뀜(원본에 영향 안줌)
// console.log(favorite); => ['apple', 'grape', 'cherry']
// console.log(fruits); => ['apple', 'grape', 'cherry']

/////////////////////
// function add(a, b) {
//   return a + b;
// }

// const obj = {
//   [`${add(10,20)} key`] : "계산식의 키"
// }
// ---- 콘솔창 ----
// > obj
// {30 key : '계산식의 키'}

// /////
// let user = {
//   name : "홍길동"
// }
// ---- 콘솔창 ----
// > user.age = 25;
// > user
// {name : '홍길동', age : 25}

// /////
// function makeUser(name, age) {
//   return {
//     name : name,
//     age : age
//   }
// }
// ---- 콘솔창 ----
// > let user1 = makeUser("홍길동", 20);
// > user1
// {name : '홍길동', age : 20}

// ====================================================================

// 심벌 : 차별화된 객체 값을 저장하고자 할 때 사용
// ---- console ----
// > let num1 = Symbol();
// > let num2 = Symbol();
// > num1 === num2;
// false           // 같아보여도 안에 들어있는 값은 모름 (외관만 보고 symbol이 같다고 생각 ㄴ)

// ---- console ----
// > let id = Symbol();
// > const member = {
//   name : "Park",
//   [id] : 12345
// }
// > member
// {name : 'Park', Symbol() : 12345}
// > member.id = 6789;
// {name : 'Park', id : 6789, Symbol() : 12345}
// > let grade = Symbol("grade");
// > member[grade] = "VIP";
// > member
// {name : 'Park', id : 6789, Symbol() : 12345, Symbol(grade) : 'VIP'}

// *** 구조분해 할당 : 주어진

// ---- console ----
// > const fruits = ["사과", "복숭아"];
// > let apple = fruits[0];
// > let peach = fruits[1];
// > apple; => '사과'   // 불편;;
// > peach; => '복숭아'

// > let [apple, peach] = ["사과", "복숭아"]; => 구조분해 할당 (병렬식으로 작성한것)

// > const fruits = ["사과", "복숭아"]; => 배열 구조분해 할당
// > let [apple, peach] = fruits;

// ** 주고싶은 값은 4갠대 할당한게 2개라면 그 공간은 "" (여백)으로 대체
// > let [spring, ,fall, ] = ["봄", "여름", "가을", "겨울"];

// ** 전개 연산 구조분해 할당
// ---- console ----
// > let [teacher, ...students] = ["Kim", "Lee", "Park", "Choi"];
// > teacher
// 'Kim'
// > students
// (3) ['Lee', 'Park', 'Choi']

//// 객체 구조 분해 (x, y의 값을 서로 바꾸고싶다??)
// > let x = 10;
// > let y = 20;
// > [x, y] = [y, x];
// (2) [20, 10]

//// 객체 구조 분해 (값 자동매칭 하기)
// > const member = {
//   name : "Kim",
//   age : 25
// }
// > let {name, age} = member; 
// > name
// 'Kim'

// > let {name : userName, age} = member;
// > userName // name 변수 안에 userName
// 'Kim'
// ---- ----

//// 중첩된 객체인 경우
// const student = {
//   name : "홍길동",
//   score : {
//     history : 85,
//     science : 94
//   },
//   friends : ["Kim", "Lee", "Park", "Choi"];
// }

// let {
//   name,
//   score : {
//     history,
//     science
//   },
//   friends : [f1, f2, f3]
// } = student

// ---- console ----
// > history
// 85
// > f2
// 'Lee'
// > science
// 94