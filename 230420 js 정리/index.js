// const changeBg = () => {
//   const bgCount = 5;
//   let randomNumber = Math.ceil(Math.random() * bgCount);
//   document.body.style.backgroundImage = `url(img/bg-${randomNumber}.jpg)`
// };

// document.onload = changeBg();

//--------------------- 추첨하기
// 1. 추첨 및 지우기 버튼에 대한 기능 정의

// 2. 입력한 값에 대한 저장공간 및 활용에 대한 정의

// 3. 입력한 값을 출력할 공간에 대한 정의

// 4. 출력할 값에 대한 조건 및 논리구조 정의

// const raffle = document.querySelector("#raffle");

// raffle.addEventListener("click", (e) => {
//   e.preventDefault();

//   const seed = document.querySelector("#seed");
//   const total = document.querySelector("total");
//   const result = document.querySelector("#result");
//   let winner = "";

//   for(let i = 0; i < total.value; i++) {
//     let picked = Math.ceil(Math.random() * seed.value);
//     winner += `${picked}번`;
//   }
//   result.innerText = `당첨자 : ${winner}`;
// });


// 동일한 key & value 값을 가지고 있는 프로퍼티와 메서드 객체를 만약 100개를 만들어야 한다면?

// > 생성자 함수
// = 동일한 프로퍼티 및 메서드를 가지고 있는 객체를 만들 때 사용할 수 있는 함수를 의미. aka.붕어빵 틀

// > 인스턴스 객체
// = 생성자 함수를 통해서 만들어진 복제된 객체 aka.붕어빵 ex ) let today = new Date() <-- today가 인스턴스