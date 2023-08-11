// fetch("student-2.json")
//   .then(response => response.json())
//   .then((json) => {
//     let output = '';
//     json.forEach(student => {
//       output += `
//       <h2>${student.name}</h2>
//       <ul>
//         <li>전공 : ${student.major}</li>
//         <li>학년 : ${student.grade}</li>
//       </ul>
//       <hr />
//       `
//     });
//   document.querySelector('#result').innerHTML = output;
// }).catch((error) => console.log(error));

// ** ================ async로 바꾸기 👇
async function init() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json(); 
  // json파일을 화면에 출력하기 위해 객체형식으로 바꾸기
  display(users);
}

function display(users) {
  const result = document.querySelector("#result");
  let string = '';
  users.forEach((user) => {
    string += `
      <table>
        <tr>
          <th>이름</th>
          <td>${user.name}</td>
        </tr>
        <tr>
          <th>아이디</th>
          <td>${user.username}</td>
        </tr>
        <tr>
          <th>이메일</th>
          <td>${user.email}</td>
        </tr>
      </table>
    `;
  })
  result.innerHTML = string;
}

init();