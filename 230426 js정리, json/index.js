// 문자열 & 배열!!
// 배열 => 순서 / 중간 요소 수정, 편집 가능

// ### 배열을 변형하는 메서드 함수  ###

// 1) map() : 배열 요소에 동일한 함수를 적용하고자 할 때
//  > 사용방법 :
//  - map(함수(값))
//  - map(함수(값, 인덱스)) 

// 2) filter() : 배열 요소에 특정한 조건식을 부여해서 해당 값을 추출하고자 할 때
//  > 사용방법 :
//  - filter(함수(값))
//  - filter(함수(값, 인덱스)) 

// 3) reduce() : 배열 요소에 특정 콜백함수를 실행해서 최종적인 하나의 결과값을 만들어낼 때
//  > 사용방법 :
//  - reduce(함수(누산기, 현재값, 인덱스, 원래배열), 초기값)
//  필수입력사항! : 누산기, 현재값
//  비필수입력사항 & 입력권장 : 초기값


// ---- console (map()) ----
// > let numbers = [1, 2, 3, 4, 5];
// > let newNumbers = numbers.map(number => number * 2);
// > newNumbers;
// (5) [2, 4, 6, 8, 10]

// > let newNumbers2 = numbers.map((number, index) => index + (number * 3));
// > newNumbers2;
// (5) [3, 7, 11, 15, 19] // 1은 인덱스값 0 2는 1...........


// ---- console (filter()) ----
// > let scores = [90, 35, 64, 88, 45, 92];
// > let highScore2 = scores.filter((score, index) => {
//   if(score >= 85) {
//     console.log(`index : ${index}, score : ${score}`);
//     return score;
//   }
// })
// index : 0, score : 90
// index : 3, score : 88
// index : 5, score : 92

// > let highScore3 = scores.filter(score => score >= 85);
// > highScore3;
// (3) [90, 88, 92]


// ---- console (reduce()) ----
// > let numbers = [1, 2, 3, 4, 5];
// > let result = numbers.reduce((total, current) => total + current, 0);
// > result;
// 15

// =====================================================================

//  ** Map & Set
// : 객체와 배열의 좋은점만 추출한 자료형태

// 객체의 단점 :
// 1) 객체의 프로퍼티에는 순서가 존재하지 않음 -> for문을 활용해서 특정 구간을 반복하는데 어려움 혹은 제약 존재
// 2) 객체는 프로퍼티의 개수를 알려주는 속성값이 없음

// ---- console (객체단점) ----
// > const member = {
//   name : "Kim",
//   age : 25
// };
// > member;
// {name : 'Kim', age : 25}
// > member.length;
// undefined // 객체의 치명적 단점

// ---- console (배열단점) ----
// > let animals = ["lion", "bear", "bird"];
// > animals.length;
// 3 // 배열의 단점 (무식하게 값만 있음)

// Map & Set => 객체와 배열의 장점만 모음 (각각의 키값, 밸류값, 배열, 인덱스값 까지 다 가지고있음)
// ex )
// let myCup = new Map([
//   ["color", "white"],
//   ["haveHandle", true],
//   ["material", "ceramic"],
//   ["capacity", "300ml"]
// ]);

// > myCup;
// Map(4) {'color' => 'white', 'haveHandle' => true, 'material' => 'ceramic', 'capacity' => '300ml'}
// [[Entries]]
// 0: {"color" => "white"}
//   key : "color"
//   value : "white"
// 1:{"haveHandle" => true}
// 2:{"material" => "ceramic"}
// 3:{"capacity" => "300ml"}
// 4:{"type" => "mini"}
// size: 5
// [[Prototype]]: Map

// > myCup.set("type", "mini"); // 추가하기
// Map(5) {'color' => 'white', 'haveHandle' => true, 'material' => 'ceramic', 'capacity' => '300ml', 'type' => 'mini'}


// Map 데이터 자료형에서 사용할 수 있는 프로퍼티와 메서드

// size : 맵 요소의 개수를 알려주는 프로퍼티
// set(키, 값)을 추가해주는 메서드
// get(키) : 해당 맵의 키 값을 반환하는 메서드
// has(키) : 해당 키가 맵에 있는지 여부에 따라서 true혹은 false값을 반환해주는 메서드
// delete(키) : 해당 키가 존재하는 프로퍼티를 삭제
// clear() 맵의 모든 요소를 삭제
// keys() : 각 요소의 키만 모아서 반환
// values() : 각 요소의 값만 모아서 반환
// entries() : 각 요소의 키와 값을 반환

// 이터러블 = Iterable => 순서대로 처리할 수 있는

// ❗❗ Map 단점 : map데이터 안에 들어가는 요소가 중복이 되더라도 문제가 안됨
// ❗❗ Set : 값이 중복될 수 없는 엄격한 자료관리 가능 => map과 set의 차이점은 값이 중복될수 있냐 없냐


// ---- console (size, set, get, has, delete, clear)----
// > let bag = new Map();
// > bag.set("color", "red");
// Map(1) {'color' => 'red'}
// > bag.set("type", "mini").set("purpose", "daily");
// > bag;
// Map(3) {'color' => 'red', 'type' => 'mini', 'purpose' => 'daily'}
// > bag.size
// 3
// > bag.get("color");
// 'red'
// > bag.get("name");
// undefined
// > bag.has("name"); // 있으면 true, 없으면 false
// false
// > bag.has("color");
// true
// > bag.delete("color") // 프로퍼티 삭제
// true
// > bag;
// Map(2) {'type' => 'mini', 'purpose' => 'daily'}
// > bag.clear(); // 싹다 날려보내기
// undefined
// > bag;
// Map(0) {size: 0}

// ---- console (keys, values, entries)----
// let myCup = new Map([
//   ["color", "white"],
//   ["haveHandle", true],
//   ["material", "ceramic"],
//   ["capacity", "300ml"]
// ]);

// > myCup.keys();
// MapIterator {'color', 'haveHandle', 'material', 'capacity'}

// > for(let key of myCup.keys()) {
//   console.log(key)
// };
// color
// haveHandle
// material
// capacity

// > for(let key of myCup.values()) {
//   console.log(key)
// };
// white
// true
// ceramic
// 300ml

// > for(let key of myCup.entries()) {
//   console.log(key)
// };
// (2) ['color', 'white']
// (2) ['haveHandle', true]
// (2) ['material', 'ceramic']
// (2) ['capacity', '300ml']

// ---- console (Set)----
// > let students = new Set();
// undefined
// > students.add("오건희");
// Set(1) {'오건희'}
// > students.add("김유정");
// Set(2) {'오건희', '김유정'}
// > students.add("황병선");
// Set(3) {'오건희', '김유정', '황병선'}
// > students.keys();      // 키 값만 넣었기 때문에 keys()와 values()는 다른거 없이 나옴
// SetIterator {'오건희', '김유정', '황병선'}
// > students.values();
// SetIterator {'오건희', '김유정', '황병선'}
// > students.entries();
// SetIterator {'오건희' => '오건희', '김유정' => '김유정', '황병선' => '황병선'}

// let lang = new Set(["js", "c", "python", "c", "js"]);
// for (let el of lang.values()){
//   console.log(el);
// }
// - console - // Set은 중복될 수 없기에 콘솔엔 중복을 제외한 3개만 뜸 
// js
// c
// python

// ###################### 신청과목의 최종신청과목 중복 없이 출력하기 ###########################
// const member1 = ["HTML", "CSS"];  //각 학생 정의
// const member2 = ["CSS", "Javascript", "React"];
// const member3 = ["Javascript", "Typescript"];

// const subjects = [...member1, ...member2, ...member3] //전개연산자
// // console.log(subjects);
// // => (7) ['HTML', 'CSS', 'CSS', 'Javascript', 'React', 'Javascript', 'Typescript']

// const resultList = new Set(); // 중복된 것을 배제하고 출력하기 위해 Set 사용

// subjects.forEach(subject => { // subject라는 존재를 컴퓨터에게 알려주기 위해
//   resultList.add(subject); // add(키 값) // subjects안에 넣을 subject를 키 값으로 넣음
// })
// // console.log(resultList);
// // => Set(5) {'HTML', 'CSS', 'Javascript', 'React', 'Typescript'}

// const result = document.querySelector("#result"); // 출력공간 정의
// result.innerHTML = `
//   <ul>
//   ${[...resultList] // 원본 데이터는 안바뀌게 하기위해 이렇게 가져옴
//     .map(subject => `<li>${subject}</li>`)
//     .join("")}
//   </ul>
// `;

// *** 이터레이터 & 제너레이터

// 1. 문자열, 배열, Map, Set : 이터러블 객체 (iterable)
// > 이터러블(iterable) : 순서대로 처리할 수 있는
// > ❗❗ 이터레이터(iterator) 객체를 프로토타입으로 상속을 받아야지만 이터러블 객체가 될 수 있다!

// * next()
// 이터레이터 > next()메서드 :
// (이터러블 객체 = 문자열, 배열) > 처음 실행했을 때에는 인덱스 첫번째 값을 호출하고, next()를 한번 더 실행하면 그 다음 인덱스 값을 호출한다.
// 어떤 값을 호출할 때, 한번에 값을 호출하지 않고, 순차적으로 값을 호출하고 싶을 때, 그때 next()를 사용


//제너레이터 : 이터레이터를 뒷받침해주는 함수
// 생성자 함수!! => 동일한 프로퍼티 혹은 객체를 다수 생성하고자 할 때, 템플릿을 만들어놓고, 해당 템플릿을 통해서 효율적으로 객체를 만들고 싶기 때문

// function* 함수명() {
//   yield 1; // return과 비슷한 역할 // 이터레이터로 값을 반환할 값을 써주면 됨
//   yield 2;
//   yield 3;
//   yield 4;
// }

// ---- console ----
// > function fnc() {
//   console.log("1");
//   console.log("2");
//   console.log("3");
// }
// undefined
// > fnc();
// 1
// 2
// 3
// undefined
// > function* gen() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// undefined
// > let g1 = gen();
// undefined
// > g1.next();
// {value: 1, done: false}
// > g1.next();
// {value: 2, done: false}
// > g1.next();
// {value: 3, done: false}
// > g1.next();
// {value: undefined, done: true}
// > g1
// gen {<closed>}

// > let g2 = gen();
// undefined
// > for (let i of g2) console.log(i);
// 1
// 2
// 3
// undefined
// > let g3 = gen();
// undefined
// > g3.next()
//   for (let i of g3) console.log(i);
// 2
// 3

// ###################### 버튼 클릭하면 종점까지 다음역 표시하기 ###########################

// 제너레이터 함수를 이용하고 next()사용
// function* train() {
//   yield "판교";
//   yield "이매";
//   yield "상동";
//   yield "경기광주";
//   yield "초월";
//   yield "곤지암";
//   yield "신둔도예촌";
//   yield "이촌";
//   yield "부발";
//   yield "세종대왕릉";
//   yield "여주";
// }

// let gyeonggang = train();

// const button = document.querySelector("button");
// const result = document.querySelector("#result");

// button.addEventListener("click", () => {
//   // result.innerText = gyeonggang변수값 로테이션
//   let current = gyeonggang.next(); //변수값 정의
  
//   if(current.done !== true) {
//     result.innerText = current.value;
//   } else {
//     result.innerText = "종점!"
//     button.setAttribute("disabled", "disabled"); // 종점가면 버튼 비활성화
//   }
// })


// ###################### 로또번호 생성기 ###########################
// const result = document.querySelector("#result");
// const button = document.querySelector("button");

// const luckyNumber = {
//   digitCount : 6,
//   maxNumber : 45
// };

// button.addEventListener("click", () => {
//   let {digitCount, maxNumber} = luckyNumber;

//   let myNumber = new Set();

//   for(let i = 0; i < digitCount; i++) {
//     myNumber.add(Math.floor((Math.random() * maxNumber) + 1));
//   }
//   result.innerText = `${[...myNumber]}`
// })

// ###################### 클라이언트 & 서버 ###########################

// 클라이언트 역할 : 서버에 자료를 요청
// 서버 역할 : 클라이언트가 요청한 자료를 회신

// https://naver.com
// http / https : 프로토콜 => 통신규약
// 앞으로 웹 서버에서 클라이언트가 특정 데이터를 요청한다면, 서로 약속한 데이터 형식을 가지고 요청할 때만 값 출력하자!

// http / https
// s : security
// https : 보안 서버가 설치됨

// GET 방식 : 서버에 자료를 요청할 때 사이트 주소 뒤에 자료명을 붙여서 보내는 방식
// > 요청하고자 하는 자료가 공공데이터거나 비보안문서 혹은 정보검색용 데이터일 때 사용
// ex)
// https://www.google.com/search?q=javascript+type+check&oq=javascript&aqs=chrome.0.69i59j69i57j69i59l2j0i512l6.2524j0j15&sourceid=chrome&ie=UTF-8

// POST 방식 : 서버에 자료를 요청할 때, 요청 문자 내용이 도메인 주소에 나타나지 않도록, body 본문안에 담아서 전송하는 방식

// 자바스크립트를 활용해서 외부사이트 데이터 가져오기

// XML 데이터 자료형식

// JSON(JavaScript Object Notation) : 자바스크립트 객체 표기법
// XML보다 JSON을 쓰는이유 :
// 1. 용량이 상대적으로 작음
// 2. 사용할 수 있는 범위가 넓음
// JSON ex)
// {
//   "name" : "홍길동",
//   "major" : "컴퓨터공학",
//   "grade" : 2
// }

// * 객체와 JSON의 차이점
// - key값을 표현할 때, "" 여부
// - 프로퍼티 & 메서드(함수) VS JSON은 메서드 및 함수를 넣을 수 없음

// * 유의사항
// - JSON에서 key값을 정의할 때, 무조건 "" (''는 안됨)
// - key값을 정의할 때 원칙적으론 띄어쓰기가 가능하나 실무에선 아무도 안함 ( _ 를 씀)
// - value값으로 문자가 온다면 당연히 "" 쓰는것
// - JSON value값에는 또 다른 문자열 혹은 배열을 가져올 수 있음, JSON안에 또 다른 JSON도 가능
// ex )
// {
//   "name" : "Oh",
//   "major" : "computer",
//   "grade" : 2,
//   "course" : ["HTML", "CSS", "React"] // JSON 안에 배열
//   "course2" : { // JSON 안에 또 JSON
//     "title" : "loveyou"
//     "page" : 500
//   }
// }

// ---- console (객체를 JSON으로 변환 (stringify() 사용))----
// > let student = {
//   name : "홍길동",
//   major : "컴퓨터공학",
//   grade : 2
// }
// > student;
// {name: '홍길동', major: '컴퓨터공학', grade: 2}

// > let json = JSON.stringify(student); // stringify => 객체를 JSON으로 바꾸는 함수
// > json
// '{"name":"홍길동","major":"컴퓨터공학","grade":2}'

// ---- console (JSON을 객체로 변환 (parse() 사용))----
// > let member1 = '{"name" : "홍길동","age" : 26,"hobby" : "walking"}'
// > let member_obj = JSON.parse(member1); // parse => JSON을 객체로 바꾸는 함수
// > member_obj;
// {name: '홍길동', age: 26, hobby: 'walking'}

// ** ❗❗ AJAX(Asynchronous JavaScript and XML)
// : 비동기 자바스크립트와 xml / > 자바스크립트 비동기 데이터 처리방식
// : 웹페이지가 새롭게 로딩되지 않고도 필요한 웹문서를 가져와서 보여주는 것을 AJAX라고 함

// > 동기 : 서버에 자료를 요청하고, 요청한 자료가 정상적으로 수신이 되어야지만 페이지 전환 및 이동

// 웹클라이언트 & 웹브라우저 & 웹서버
// XMLHttpRequest 객체 = XHR 객체라고 부름
// - 프로퍼티
// - 메서드
// > open() : 어떤 방식으로 사용할지, 어떤 자료가 필요한지, 비동기 처리 여부를 정의하는 메서드
// > send() : 앞에서 설정한 open()를 서버로 보내는 메서드

// ---- console (XMLHttpRequest) ----
// 먼저 student.json파일 만들기

// > let xhr = new XMLHttpRequest();
// undefined
// > xhr.open("GET", "student.json")
// undefined
// > xhr.send();
// undefined
// > xhr;
// XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
//   onabort: null
//   onerror: null
//   onload: null
//   onloadend: null
//   onloadstart: null
//   onprogress: null
//   onreadystatechange: null
//   ontimeout: null
//   readyState: 4
//   response: "{\r\n  \"name\" : \"홍길동\",\r\n  \"major\" : \"컴퓨터 공학\",\r\n  \"grade\" : 2\r\n}"
//   responseText: "{\r\n  \"name\" : \"홍길동\",\r\n  \"major\" : \"컴퓨터 공학\",\r\n  \"grade\" : 2\r\n}"
//   responseType: ""
//   responseURL: "http://127.0.0.1:5500/student.json"
//   responseXML: null
//   status: 200
//   statusText: "OK"
//   timeout: 0
//   upload: XMLHttpRequestUpload {onloadstart: null, onprogress: null, onabort: null, onerror: null, onload: null, …}
//   withCredentials: false
//   [[Prototype]]: XMLHttpRequest

// ---- ----

// XMLHttpRequest 객체
// 1) 메서드
// - open()
// - send()

// 2) 프로퍼티 👆👆
// - readyState : 객체에서 서버로 자료 요청여부 및 자료도착 여부 알 수 있는 프로퍼티
// 0 : 아직 서버한테 자료요청을 안한 상태
// 1 : 서버한테 자료를 성공적으로 요청
// 2 : 서버 요청에 대한 응답이 온 상태
// 3 : 서버에서 자료가 로딩중인 상태
// 4 : 자료 전송이 끝나고 클라이언트가 자료를 사용할 수 있는 상태

// - status : 서버와의 통신 상태 // 2xx, 4xx, 5xx

// - responseText : 서버에 요청한 응답이 문자열로 저장된 형태

// > let xhr = new XMLHttpRequest();
// undefined
// > xhr.open("GET", "student.json")
// undefined
// > xhr.send();
// > let student = JSON.parse(xhr.responseText);
// > student
// {name: '홍길동', major: '컴퓨터 공학', grade: 2}
// > document.getElementById("result").innerHTML = `${student.name} 학생은 ${student.grade} 학년입니다.`
// '홍길동 학생은 2학년입니다.'