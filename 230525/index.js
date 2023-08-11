
  // const ID = "green";
  // const PW = "1234";
  // let userId = prompt("아이디 입력");
  // if(userId !== ID) {
  //   alert("아이디가 일치하지 않습니다.")
  //   location.reload();
  // } else {
  //   let userPw = prompt("비밀번호를 말해라");
  //   if(userPw !== PW) {
  //     alert("비밀번호가 일치하지 않습니다.")
  //     location.reload();
  //   } else {
  //     alert(`${userId} 님 반갑습니다.`)
  //   }
  // }



// let name = document.querySelector("#name");
// let major = document.querySelector("#major");
// const btn = document.querySelector("button");

// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   const tbody = document.querySelector("tbody");
//   const newTR = document.createElement("tr");

//   //이름 셀
//   let nameTd = document.createElement("td");
//   nameTd.innerText = name.value;

//   //전공 셀
//   let majorTd = document.createElement("td");
//   majorTd.innerText = major.value;

//   newTR.appendChild(nameTd);
//   newTR.appendChild(majorTd);

//   tbody.appendChild(newTR);
// })

const arr = [2, 4, 6, 8, 10];
const arrOG = document.querySelector(".arrOG");
const arrPlus = document.querySelector(".arrPlus");
const span = document.createElement("span");
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  arrOG.innerText += "<span>" + arr[i] + "</span>";
  sum += arr[i];
}
arr.push(sum);
for (let i = 0; i < arr.length; i++) {
  arrPlus.innerText += arr[i];
}
