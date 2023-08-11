//...........................01 (최대공약수 구하기)

// let num1 = parseInt(prompt("첫 번째 숫자"));
// let num2 = parseInt(prompt("두 번째 숫자"));

// //#################나 ver
// // function gcd(num1, num2) {
// //   let maxNum = Math.max(num1, num2);
// //   let minNum = Math.min(num1, num2);
// //   let remain = maxNum % minNum;
  
// //   if(remain == 0) {
// //     return minNum;
// //   }else {
// //     return gcd(minNum, remain);
// //   }
// // }
// // document.write(`"${num1}"과 "${num2}"의 최대공약수 : "${gcd(num1, num2)}"`)


// //###############강사님 ver
// function getGcd(n1, n2) {
//   let max = n1 > n2 ? n1 : n2;
//   let gcd = 0;
//   for (let i = 1; i <= max; i++) {
//     if (n1 % i === 0 && n2 % i === 0) {
//       gcd = i;
//     }
//   }
//   return gcd;
// }

// document.write(`"${num1}"과 "${num2}"의 최대공약수 : "${getGcd(num1, num2)}"`)


//...........................02 (dom.html)

//############## 요소 수정 ############
// html > 문서구조 > 태그 = 객체 > 요소
// : 요소에 접근한다
//
// 요소에 접근할 수 있는 함수 =
// 1.querySelector() : 단일 요소에 접근
// > 무조건 낱개 요소에 접근
// > 매개변수에 입력한 선택자 접근
// > 해당 선택자가 document 안에 다수 존재하는 경우, 가장 첫번째로 선택된 요소에 접근

// 2.querySelectorAll() : 모든 요소에 접근
// document.querySelectorAll(".user"); === > NodeList(3) [p.user, p.user, p.user]
// document.querySelectorAll(".user")[2]; === > <p class="user">연락처 : 010 - 1234 - 5678</p>

// getElementById()
// getElementsByClassName()
// getElementsByTagName()

// 요소 데이터 가져오는 방법
//
// 웹 요소.inneText = 바꾸고 싶은 내용
// 웹 요소.inneHTML = 바꾸고 싶은 내용
// 웹 요소.textContent = 바꾸고 싶은 내용

// ex ) 웹 요소.src = 바꾸고 싶은 이미지 파일
{/* HTML
<div id="desc">
  <p class="user">이름 : 아이유</p>
  <p class="user" style="display: none;">주소 : 서울시</p>
  <p class="user" style="display: none;">연락처 : 010 - 1234 - 5678</p>
</div> 
*/}
// document.querySelector("#desc").innerText; 
// === > '이름 : 아이유' == > 웹화면에 보여지는 텍스트만 가져옴 (나머지는 display:none이라 안가져옴)
// document.querySelector("#desc").innerHTML;
// === > 코드 다가져옴 안보이는 코드까지
// document.querySelector("#desc").textContent;
// === > innerHTML이랑 비슷하지만 innerHTML보다는 좀 덜 보여줌  

// ## 요소 수정 ex )
// const userName = document.querySelector("#desc p");
// const pfImg = document.querySelector("#profile img");

// userName.onclick = () => userName.innerHTML = `이름 : <b>아이돌</b>`;
// pfImg.onclick = () => pfImg.src = "/iu2.jpg"

//############## 스타일 수정 ############
// ## css 수정
// CSS속성에 접근하고 스타일 수정하는 방법 === >
// 수정하고 싶은 요소.style.속성명 = 바꾸고 싶은 스타일값

// const title = document.querySelector("#title");
// const userName = document.querySelector("#desc p");

// title.onclick = () => {
//   title.style.backgroundColor = "black";
//   title.style.color = "white";
// }

// userName.onclick = () => {
//   userName.style.color = "blue";
// }

// ## classList 속성 (*프로퍼티) : 
// - 해당 요소의 클래스 값을 배열객체 형태로 찾아줍니다.

// 선택한 선택요소.classList.add("클래스명")
// > 선택한 선택요소에 클래스명을 추가할 때 사용

// 선택한 선택요소.classList.remove("클래스명")
// > 선택한 선택요소에 클래스명을 삭제할 때 사용

// 선택한 선택요소.classList.contains("클래스명")
// > 선택한 선택요소에 클래스명이 있는지 여부를 확인하는 함수

// 선택한 선택요소.classList.toggle("클래스명")
// > 선택한 선택요소에 클래스명이 있는지 여부를 확인하여 추가 및 삭제를 반복하는 함수

// ## classList .add
// const title = document.querySelector("#title");
// title.onclick = () => {                   
//   title.classList.add("clicked");    ..title에 clicked 클래스를 추가      
// }

// ## classList .contains
// const title = document.querySelector("#title");

// title.onclick = () => {     
//   if(!title.classList.contains("clicked")) { //clicked있는지 여부 확인
//     title.classList.add("clicked");          //없으면 추가
//   }else{
//     title.classList.remove("clicked");       //있으면 삭제
//   }                                          //토글 형식 완성!
// }

// ## classList .toggle   //위 contains 함수를 간단하게!!
// title.onclick = () => {     
//   title.classList.toggle("clicked");     
// }

// const darkmod = document.querySelector("#darkmod");
// const body = document.querySelector("body")

// darkmod.onclick = function() {     
//   body.classList.toggle("change");
//   if(darkmod.innerHTML == "다크모드 off") {
//     darkmod.innerHTML == "다크모드 on";
//   }else if(darkmod.innerHTML == "다크모드 on"){
//     darkmod.innerHTML == "다크모드 off"
//   }
// }

//...........................03 (index.html)
// 텍스트 input태그 필드에 입력한 값 가져오기

// 선택요소.value

// 만약, id값과 class값이 없다면??
// name을 활용해서 값을 가져올 수 있습니당

// const selectMenu = document.querySelector("#option");

// function displaySelect() {
//   let selectedText = selectMenu.options
//   [selectMenu.selectedIndex].innerText;
//   alert(`[${selectedText}]를 선택했습니다.`);
// }

// selectMenu.onchange = displaySelect;
// // 뭔가 값이 변했을 때(onchange) 함수를 실행해라(displaySelect)

//...........................04 (index2.html)
// const detail = document.querySelector("#detail");
// const viewbtn = document.querySelector("#view");

// viewbtn.onclick = () => {     
//   detail.classList.toggle("showdetail")
// }

//...........................05 (gcd.html)
let num1 = document.querySelector("#number1");
let num2 = document.querySelector("#number2");
let calculate = document.querySelector("#resultBtn");
let resultArea = document.querySelector("#resultArea");

calculate.onclick = () => {
  resultArea.innerText = getGcd(num1.value, num2.value);
}

function getGcd(n1, n2) {
  let max = n1 > n2 ? n1 : n2;
  let gcd = 0;
  for (let i = 1; i <= max; i++) {
    if (n1 % i === 0 && n2 % i === 0) {
      gcd = i;
    }
  }
  return gcd;
}

