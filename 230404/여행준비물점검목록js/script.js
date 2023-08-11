// let toyRobot = {
//   productId : "2023-04-04",
//   name : "Robot_1",
//   price : "25,000",
//   madeIn : "Korea",
//   quantity : 10,
//   showStock : function() {
//     document.querySelector('#display').innerHTML
//     = this.name + "제품은 " + this.quantity + "개 남았습니다.";
//   }
// }

// toyRobot.showStock();
//################################################################

// function book(title, author, volume, price) {
//   this.title = title;
//   this.author = author;
//   this.volume = volume;
//   this.price = price;
// }

// let html = new book('자바스크립트', 'Oh', '600', '43,000');
// let css = new book('스타일코딩', 'Kim', '360', '16,000');
// let python = new book('파이썬코딩', 'Lee', '480', '24,000');

// let bookList = [html, css, python];

//################################################################

// function TestScore(name, kor, eng) {
//   this.userName = name;
//   this.korNum = kor;
//   this.engNum = eng;

//   TestScore.prototype.getTestInfo = function() {
//     document.write("이름 : " + this.userName, "<br />");
//     document.write("국어 : " + this.korNum, "<br />");
//     document.write("영어 : " + this.engNum, "<br />");
//   }

//   TestScore.prototype.getAvg = function() {
//     return(this.korNum + this.engNum) / 2;
//   }
// }

// let kimgun = new TestScore("김군", 80, 90);
// let ohgun = new TestScore("오군", 100, 80);

// kimgun.getTestInfo();
// document.write(`평균점수 : ${kimgun.getAvg()}`, "<br /><br />");

// ohgun.getTestInfo();
// document.write(`평균점수 : ${ohgun.getAvg()}`, "<br /><br />");

//################################################################
// 여행 준비물 점검 목록
// 1. 데이터가 어딘가에는 저장
// 2. 저장된 데이터가 시각적으로 표현 => html
// 3. 삭제시, 데이터가 삭제
// 4. 새로고침 하더라도 데이터는 저장
let itemList = [];

let addBtn = document.querySelector("#add");
addBtn.addEventListener("click", addList);

function addList(event) {
  event.preventDefault();
  let item = document.querySelector("#item").value;
  if(item != "") {
    itemList.push(item);
    document.querySelector("#item").value = "";
    document.querySelector("#item").focus();
  }
  showList();
}

function showList() {
  let list = "<ul>";
  for (let i = 0; i < itemList.length; i++) {
    list += "<li>" + itemList[i] + "<span class='close' id=" + i +"> × </span></li>"
  }
  list += "</ul>"

  document.querySelector("#itemList").innerHTML = list;

  let remove = document.querySelectorAll(".close");
  for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener("click", removeList);
  }
}

function removeList() {
  let id = this.getAttribute("id");
  itemList.splice(id, 1);
  showList();
}