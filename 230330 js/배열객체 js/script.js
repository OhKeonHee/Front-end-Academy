// let arr = [30, "따르릉", true];

// document.write("<h3>배열값 가져오기 -1</h3>");
// document.write(arr[0], "<br />");
// document.write(arr[1], "<br />");
// document.write(arr[2], "<br />");

// document.write("<h3>배열값 가져오기 -2</h3>");
// for(let i = 0; i < arr.length; i++) {
//   document.write(arr[i], "<br />");
// }

// document.write("<h3>배열값 가져오기 -3</h3>");
// for(i in arr) {
//   document.write(arr[i], "<br />");
// }

//######################################
// let arr_1 = ["사당", "교대", "방배", "강남"];
// let arr_2 = ["신사", "압구정", "옥수"];

// let result = arr_1.join(" - ");
// document.write(result, "<br />"); //사당 - 교대 - 방배 - 강남

// result = arr_1.concat(arr_2);
// document.write(result, "<br />"); //사당,교대,방배,강남,신사,압구정,옥수

// result = arr_1.slice(1, 3);
// document.write(result, "<br />"); //교대,방배

// arr_1.sort();
// document.write(arr_1, "<br />"); //강남,교대,방배,사당 (오름차순)

// arr_2.reverse();
// document.write(arr_2, "<br />"); //옥수,압구정,신사 (거꾸로)


//####################랜덤 메뉴 뽑기
// let menu = ["김치찌개", "칼국수", "햄버거", "김밥", "파스타"];
// let menuNum = Math.floor(Math.random() * menu.length);
// let result = menu[menuNum];
// document.write(result);


//###############나만의 TODO List 짜기
const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

// 1.삭제버튼 추가
// 2.데이터 저장
// 3.삭제버튼 클릭, 저장된 데이터 업데이트

let todos = [];

const save = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
}

const delItem = (event) => {
  const target = event.target.parentElement;
  todos = todos.filter((todo) => todo.id != target.id);
  save();
  target.remove();
}

const addItem = (text) => {
  if(text !== '') {
    const li = document.createElement('li');
    const button = document.createElement('button');
    const span = document.createElement('span');

    span.innerText = text;
    button.innerText = '삭제'
  }
}

form.addEventListener('submit', function(event) {
  event.preventDefault();

  if(input.value !== '') {
    const li = document.createElement('li');
    li.innerText = input.value;
    ul.appendChild(li);
    input.value = ''
  } 
});