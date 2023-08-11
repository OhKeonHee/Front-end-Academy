// 모든 HTML 태그 => 노드
// 태그 안 속성 & 텍스트 내용 => 자식노드

// * 노드리스트
// querySelector() & querySelectorAll()
// createElement(요소명) : 요소(*태그) 노드 만들기
// createTextNode(텍스트내용) : 텍스트 노드 만들기
// appendChild(자식노드) : 부모요소에 자식요소로 연결하기
// createAttribute() : 속성 노드 만들기
// setAttributeNode() : 속성 노드 연결하기

// ------------------------- 01 (버튼 누르면 지정영역에 상품명 출력하기)
// const order = document.querySelector("#order");
// const orderInfo = document.querySelector("#orderInfo");
// let product = document.querySelector("h2");

// order.addEventListener("click", () => {
//   let newP = document.createElement("p");
//   let textNode = document.createTextNode(product.innerText);

//   newP.appendChild(textNode);
//   newP.style.fontSize = "0.8em";
//   newP.style.color = "blue";
//   orderInfo.appendChild(newP);
// }, {once : true})

// ------------------------- 02 (HTML 없이 img 만들어 넣기)
// let newImg = document.createElement("img");
// let srcNode = document.createAttribute("src");

// srcNode.value = '/image/totoro.jpg';
// newImg.setAttributeNode(srcNode);
// document.body.appendChild(newImg);       

// ------------------------- 03 (시간에 따른 이미지 변화)
// 1. 시간 (오전 / 오후)에 대한 개념 정의
// 2. 시간 변화에 따라서 출력해줘야하는 이미지가 어떤 것 인지에 대한 정의 < 시간 변화 정의 ~> 이미지 정의 >
// 3. 이미지를 출력할 공간에 대한 정의

// const container = document.querySelector("#container"); // <-- 3. 정의
// const today = new Date(); // <-- 현 시점 시간 정의
// const hrs = today.getHours(); // <-- 현 시점에서 시(Hours)만 가져와서 정의

// let newImg = document.createElement("img"); // <-- img 태그 만들기 , 이미지는 변하므로 let사용
// newImg.src = (hrs < 12) ? "/image/morning.jpg" : "/image/afternoon.jpg" //삼항조건(조건 ? true : false)
// container.appendChild(newImg);

// ------------------------- 04 (insertBefore 활용으로 텍스트 앞에 텍스트 추가)
// appendChild() : 부모요소에 가장 마지막 위치로 자녀를 편입시킴
// 노드를 만들어서 자녀요소로 추가!!
// > 가장 마지막 영역에 추가

// insertBefore(앞에 추가하고자 하는 요소, 기준점이 되는 요소) : 
// > 기존 노드의 앞에 새 요소로 추가하고자 할때 사용하는 메서드 함수

// 1. 텍스트추가 라는 버튼의 정의
// 2. 추가하고자 하는 컨텐츠의 대한 정의
// 3. 해당 컨텐츠가 출력되어야 하는 공간에 대한 정의

// let tsNode = document.createElement("p");
// let tsTextNode = document.createTextNode("Typescript");
// let basisNode = document.querySelectorAll("p")[2];
// const btn = document.querySelector("button"); // <-- 1.

// tsNode.appendChild(tsTextNode);

// btn.addEventListener("click", () => {
//   document.body.insertBefore(tsNode, basisNode);
// })

// ------------------------- 05 (remove()메서드를 활용한 노드 삭제)
// - 노드 삭제하는 메서드
// > remove() : 선택된 요소 및 노드 자체를 삭제
// 삭제하고자 하는 요소.remove()

// > romoveChile() : 선택된 요소 및 노드의 자녀 노드를 삭제
// 부모노드.removeChild(자녀노드)

// *** 부모노드를 찾는 프로퍼티 (= 속성)
// 자식노드.parentNode => 해당 자식노드의 부모노드를 찾음


// 1.
// let heading = document.querySelector("h1");
// heading.remove(); // <-- h1태그 ("노드 리스트 살펴보기") 삭제

// 2.
// const title = document.querySelector("h1");

// title.addEventListener("click", () => {
//   title.remove();
// })

// (li 요소 누르면 해당 li만 삭제하기)
// let li = document.querySelectorAll("li");
// for(let item of li) {
//   item.addEventListener("click", function() { // [() =>]화살표함수쓰면 작동안됨 this가 화살표함수안에 들어오면 선택된 요소를 가르키지 않고 window를 가리키는 이상한놈임
//     this.parentNode.removeChild(this);
//   })
// }

// ------------------------- 06 (span태그(X표시) 클릭하면 p태그 사라지게 하기)
// let x = document.querySelectorAll("span");

// for(let item of x) {
//   item.addEventListener("click", function() {
//     this.parentNode.remove();
//   })
// }

// ------------------------- 07 (book list 만들기)
// - 프로그램 개발을 위해 필요한 정의 요소
// > 1. 제목, 저자에 대한 데이터 공간 및 정의
// > 2. 취소하기 및 저장하기 버튼 내용 정의
// > 3. 삭제하기 버튼 내용 정의
// > 4. 입력된 데이터가 출력될 공간에 대한 정의

// let title = document.querySelector("#title");
// let author = document.querySelector("#author");
// const save = document.querySelector("#save");
// const bookList = document.querySelector("#bookList");

// save.addEventListener("click", (e) => {
//   e.preventDefault();

//   const item = document.createElement("li");
//   item.innerHTML = `${title.value} - ${author.value} <span class="delButton">삭제</span>`;
//   bookList.appendChild(item);

//   title.value = "";
//   author.value = "";

//   const delButtons = document.querySelectorAll(".delButton");

//   for(let delButton of delButtons) {
//     delButton.addEventListener("click", removeItem);
//   }
// })

// function removeItem() {
//   let list = this.parentNode;
//   list.parentNode.removeChild(list);
// }

// ------------------------- 07 (table.ver)
// let name = document.querySelector("#name");
// let major = document.querySelector("#major");
// const save = document.querySelector("#save");
// const table = document.querySelector("table");

// save.addEventListener("click", (e) => {
//   e.preventDefault();

//   const item = document.createElement("tr");
//   item.innerHTML = `<td>${name.value}</td><td>${major.value}</td>`;
//   table.appendChild(item);

//   name.value = "";
//   major.value = "";
// })

// ------------------------- 08 (setInterval을 사용한 시간차이 텍스트나타남/3초뒤 텍스트 사라짐)
const btn = document.querySelector("#btn");
const notiBox = document.querySelector("#noti-box");

btn.addEventListener("click", () => {
  const noti = document.createElement('div');
  noti.classList.add("noti");
  noti.innerText = "항상 응원합니다!";

  notiBox.appendChild(noti);

  setTimeout(() => {
    noti.remove();
  },1500)
})