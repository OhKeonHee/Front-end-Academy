let newP = document.createElement("p");
let userName = document.querySelector("#username");
let newText = document.createTextNode(userName.value);
newP.appendChild(newText);

let delBttn = document.createElement("span");
let delText = document.createTextNode("X");
delBttn.setAttribute("class", "del");
delBttn.appendChild(delText);
newP.appendChild(delBtn);

let nameList = document.querySelector("#nameList");
nameList.insertBefore(newP, nameList.childNodes[0]);
// insertBefore(매개변수1, 매개변수2) -> 매개변수1을 매개변수2 앞에 꽂아넣는다

userName.value = "";

let removeBtns = document.querySelectorAll(".del");

for(let i = 0; i < removeBtns.length; i++) {
  removeBtns[i].addEventListener("click", () => {
    if(this.parentNode.parentNode)
    this.parentNode.parentNode.removeChild(this.parentNode)
  });
}

