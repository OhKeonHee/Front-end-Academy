// 1) Cookies :
// 최대 300개 까지 저장
// 파일당 최대크기 4KB

// 2) Web Storage :
// - 파일당 최대크기 5MB
// - 쿠키값과 다르게 사용자가 의도적으로 데이터를 서버로 보내지 않는다면, 절대 서버는 사용자 및 클라이언트의 데이터 값을 읽어갈 수 없다

// ** Web Storage의 종류
// 1. Session Storage :
// - 웹 브라우저를 통해서 특정 페이지를 열고, 닫을 때 까지의 기간을 Session이라함
// Session Storage는 세션이 진행되고 있는 동안만 데이터를 기억하고, 세션이 끝나는 순간 웹 브라우저에서 해당 데이터를 삭제하는 형태

// 2. Local Storage :
// - 세션 스토리지와 달리, 세션이 끝나도 계속해서 데이터를 보관해주는 스토리지 형태 => TODO리스트 혹은 데이터를 지속적으로 보관해야하는 프로그램을 개발할 때, 반드시 사용해야하는 형태

// - 로컬 스토리지는 객체처럼 "키" & "값" 으로 구성되어 있고, "키"값을 활용해서 로컬 스토리지 안에 있는 데이터를 확인할 수 있다.

// - 뿐 만아니라, 데이터 확인 및 추가, 삭제, 편집도 가능

// - 객체는 기본적으로 "프로퍼티" & "메서드"

// - length 프로퍼티 : 스토리지 안에 몇 개의 키와 값이 존재하는지 알 수 있는 속성값

// - setItem() 메서드 : 스토리지에 자료를 저장할 때 사용하는 메서드

// - getItem() 메서드 : 스토리지에 저장된 데이터 자료를 가져올 수 있는 메서드

// - key() 메서드 : 스토리지에 있는 키를 반환하는 메서드

// - remove() 메서드 : 특정 키 이름을 지정하면 스토리지에 저장된 해당 키를 삭제하는 메서드

// - clear() 메서드 : 스토리지 안에 있는 모든 키/값을 삭제하는 메서드

// - JSON.stringigy() : 기본적으로 스토리지 안에 있는 자료는 JSON 형식을 사용, 스토리지에 자료를 저장할 때는 -> ! 객체를 JSON 형식으로 변환 후 사용가능 !

// - JSON.parse() : 스토리지 안에 있는 JSON 형식의 자료를 객체 타입으로 변환할 때 사용가능

// // -- ex ) 
// let students = ["Kim", "Lee", "Park"];
// console.log(`현재 students : ${students}`);

// // Storage에 JSON형식으로 변환 후 넣기
// localStorage.setItem("students", JSON.stringify(students));

// // 수정, 편집 등을 위해 JSON형식의 Storage를 객체타입으로 변환
// let localData = "";
// if (localStorage.getItem("students") === null) {
//   localData = [];
// } else {
//   localData = JSON.parse(localStorage.getItem("students"));
// }
// console.log(`${localData}`)
// // 수정 (추가)
// localData.push("Choi");
// console.log(`추가 후 students : ${localData}`);
// // 다시 JSON형식으로 Storage에 저장
// localStorage.setItem("students", JSON.stringify(localData));

// // 수정 (삭제)
// let indexOfvalue = localData.indexOf("Lee"); // indexOfvalue = 1이 됨
// localData.splice(indexOfvalue, 1); // 1위치에서 1게 삭제 == "Lee" 한개 삭제
// console.log(`삭제 후 ${localData}`) // Kim,Park,Choi
// // 다시 JSON형식으로 Storage에 저장
// localStorage.setItem("students", JSON.stringify(localData)); // ["Kim","Park","Choi"]

// // storage 삭제
// localStorage.removeItem("students");

// ############### TodoList (storage를 활용해 새로고침해도 데이터는 저장되았는 todolist만들기) ###############
// const todoinput = document.querySelector("#todo-input");
// const addButton = document.querySelector("#add-button");
// const todoList = document.querySelector("#todo-list");

// document.addEventListener("DOMContentLoaded", getLocal);
// addButton.addEventListener("click", addTodo);
// todoList.addEventListener("click", manageTodo);

// function addTodo(e) {
//   e.preventDefault();

//   const newDiv = document.createElement('div');
//   newDiv.classList.add('todo');

//   const newTodo = document.createElement('li');
//   newTodo.innerText = todoinput.value;
//   newTodo.classList.add('todo-content');
//   newDiv.appendChild(newTodo);

//   saveToLocal(todoinput.value);

//   const completeButton = document.createElement(('button'));
//   completeButton.innerText = '완료';
//   completeButton.classList.add('complete-button');
//   newDiv.appendChild(completeButton);

//   const deleteButton = document.createElement('button');
//   deleteButton.innerText = '삭제';
//   deleteButton.classList.add('delete-button');
//   newDiv.appendChild(deleteButton);

//   todoList.appendChild(newDiv);
//   todoinput.value = ""
// }    // 여기까지 작성하면 페이지를 새로고침했을 때 다 날라감 (세션 스토리지에만 저장되었기 때문)


// // LocalStorage로 저장할 함수 만들기
// function saveToLocal(todo) { // todo는 input안에 사용자가 넣는 value값들을 매개변수로 받음
//   let todos;
//   if (localStorage.getItem('todos') === null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem('todos'));
//   }

//   todos.push(todo)
//   localStorage.setItem('todos', JSON.stringify(todos)); // JSON 형태로 바꿔서 Storage에 넣기
//   // 콘솔창 -> Application -> Local Storage == key : todos, Value : 사용자 입력값
// }

// // Local Storage에 저장된 값들을 화면에 보여주기 위한 함수임 
// // (local storage 값을 화면에 띄우기 때문에 새로고침해도 화면에 출력된 값이 안지워짐)
// function getLocal() {
//   let todos; // 지역변수라 위에랑 같은 이름 써도 상관 X (서로 다른 존재임
//   if (localStorage.getItem('todos') === null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem('todos'));
//   }
//   todos.forEach(function(todo) {
//     const newDiv = document.createElement('div');
//     newDiv.classList.add('todo');

//     const newTodo = document.createElement('li');
//     newTodo.innerText = todo;
//     newTodo.classList.add('todo-content');

//     newDiv.appendChild(newTodo);

//     const completeButton = document.createElement(('button'));
//     completeButton.innerText = '완료';
//     completeButton.classList.add('complete-button');
//     newDiv.appendChild(completeButton);

//     const deleteButton = document.createElement('button');
//     deleteButton.innerText = '삭제';
//     deleteButton.classList.add('delete-button');
//     newDiv.appendChild(deleteButton);

//     todoList.appendChild(newDiv);
//   })
// }

// function manageTodo(e) {
//   const whichButton = e.target.classList[0]; // 완료, 삭제 버튼 중 무엇을 클릭했는가?

//   if (whichButton === 'complete-button') {
//     const todo = e.target.parentElement;
//     todo.children[0].classList.toggle('completed');
//   } else if(whichButton === 'delete-button') {
//     const todo = e.target.parentElement;
//     removeLocal(todo);
//     todo.remove();
//   }
// }

// function removeLocal(todo) {
//   let todos;
//   if (localStorage.getItem('todos') === null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem('todos'));
//   }

//   const index = todos.indexOf(todo.children[0].innerText);
//   todos.splice(index, 1);
//   localStorage.setItem('todos', JSON.stringify(todos));
// }

// ##########################################################################################

// * geolocation API : PC용 웹 브라우저 혹은 모바일 디바이스의 현재위치 정보를 파악할 수 있도록 도와주는 인터페이스
// window > navigator > geolocation 객체

// - getCurrentPosition(콜백함수1(정상적으로 위치를 확인했을 때, 실행시킬 함수), 콜백함수2(위치 정보를 수신하지 못했을 때, 실행시킬 함수)) 메서드 : 사용자의 현 위치를 파악하기 위한 메서드

// > enableHighAccuracy 프로퍼티 : 위치 정보값의 정확도를 높일 때 사용하는 프로퍼티 > true / false
// > maximumAge 프로퍼티 : 위치정보의 유효기간을 지정하는 프로퍼티 / 단위 : 밀리초
// > timeout 프로퍼티 : 위치정보를 확인하는데 걸리는 시간 제한 / 단위 : 밀리초 (* 만약, 제한 시간안에 위치정보를 확인하지 못한다면 오류메시지 발생)

// * 위치정보를 저장하는 객체 : position

// address.country : 주소 중 국가에 대한 정보 확인
// address.city : 주소 중 도시에 대한 정보 확인
// address.postalCode : 주소 중 우편번호에 대한 정보 확인
// address.street : 주소 중 거리이름(도로명)에 대한 정보 확인
// coords.latitude : 위치의 경도
// coords.longitude : 위치의 위도
// coords.speed : 이동 중일 경우, 사용자가 움직이는 속도

// * 지정한 시간마다 위치를 확인해주는 메서드 : watchPosition() 메서드
// > clearWatch() :

// ############### 위도, 경도 가져오기 (버튼을 눌렀을 때) ###############
// const getLocation = document.querySelector("#getLocation");
// getLocation.addEventListener("click", (e) => {
//   e.preventDefault();

//   if(navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition, errorPosition);
//   } else {
//     alert("지오로케이션을 지원하지 않습니다😂");
//   }
// });

// function showPosition(position) {
//   document.querySelector("#result").innerHTML = `
//   <b>경도 : </b>${position.coords.latitude.toFixed(2)}<br><br> <b>위도 : </b>${position.coords.longitude.toFixed(2)}
//   `;
// };

// function errorPosition(err) {
//   alert(err.message);
// }

// ############### 위도, 경도 가져오기 (버튼을 눌렀을 때) ###############
const getLocation = document.querySelector("#getLocation");
getLocation.addEventListener("click", (e) => {
  e.preventDefault();

  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, errorPosition);

    const options = {
      enableHighAccuracy : true,
      timeout : 5000,
      maximumAge : 0
    };

    let watchId = navigator.geolocation.watchPosition(showPosition, errorPosition, options);

    setTimeout(function() {
      navigator.geolocation.clearWatch(watchId);
    }, 30000);
  } else {
    alert("지오로케이션을 지원하지 않습니다😂");
  }
});

function showPosition(position) {
  document.querySelector("#result").innerHTML = `
  <b>경도 : </b>${position.coords.latitude.toFixed(2)}<br><br> <b>위도 : </b>${position.coords.longitude.toFixed(2)}
  `;
};

function errorPosition(err) {
  alert(err.message);
}