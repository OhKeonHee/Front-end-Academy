// let num = 2.1234;

// let
// maxNum = Math.max(10, 5, 8, 30);
// minNum = Math.min(10, 5, 8, 30);
// roundNum = Math.round(num); //반올림
// floorNum = Math.floor(num); //내림
// ceilNum = Math.ceil(num); //올림
// rndNum = Math.random(); //0~1 이내의 난수 생성 (실수만)
// piNum = Math.PI; //원주율

// document.write(maxNum, "<br />");
// document.write(minNum, "<br />");
// document.write(roundNum, "<br />");
// document.write(floorNum, "<br />");
// document.write(ceilNum, "<br />");
// document.write(rndNum, "<br />");
// document.write(piNum, "<br />");


/*###################### 가위바위보 컴퓨터랑 맞추기 게임 HTML 안씀*/
// document.write("<h1>컴퓨터 가위, 바위, 보 맞추기 게임</h1>");

// // 사람이 가위,바위,보 중 한 개를 낸다.
// // > 직접 선택 (*prompt)

// // 컴퓨터도 가위1, 바위2, 보3 중 한개를 낸다.
// // > Math.random()

// let game = prompt("가위 바위 보 중 선택하세요.✌✊🖐", "ex. 가위");
// let gameNum;
// switch(game) {
//   case "가위" : 
//   gameNum = 1; 
//   break;
//   case "바위" : 
//   gameNum = 2; 
//   break;
//   case "보" : 
//   gameNum = 3; 
//   break;
//   default: alert("잘못 입력하셨습니다!");
//   location.reload();
// }

// let com = Math.ceil(Math.random()*3); //난수를 정수 1 ~ 3사이로 설정 (실수만 나오는 random()에서 3을 곱한값에서 (최소 0.xx ~ 2.xx) ceil로 소수점 값을 올림하면 정수 완성!)
// document.write("<img src=\"/math js, 가위바위보 게임/img/math_img_"+ com +".jpg\">");

// if(gameNum == com) {
//   document.write("<img src=\"/math js, 가위바위보 게임/img/game_1.jpg\">");
// } else {
//   document.write("<img src=\"/math js, 가위바위보 게임/img/game_2.jpg\">");
// }

/*####################진짜 가위바위보 게임 */
// 사용자의 가위, 바위, 보 선택 (* 직접선택) => 숫자
// 컴퓨터의 가위, 바위, 보 선택 (* 랜덤) => 숫자
let buttons = document.querySelectorAll('button');
let computerChoice = document.querySelector('.computer-choice');
let userChoice = document.querySelector('.your-choice');
let winner = document.querySelector('.result');
let result = ['가위', '바위', '보'];

const show = function(user, computer, result) {
  computerChoice.innerText = computer;
  userChoice.innerText = user;
  winner.innerText = result;
};

const game = function(user, computer) {
  if(user == computer) {
    message = '무승부!';
  } else { //사용자나 컴퓨터 둘 중 하나가 이겼다면
    switch(user + computer) {
      case '가위보' :
      case '바위가위' :
      case '보바위' :
        message = '사용자 승리!';
        break;
      case '가위바위' :
      case '바위보' :
      case '보가위' :
        message = '컴퓨터 승리!';
        break;
    }
  }
  show(user, computer, message)
};

const play = function(event) {
  let user = event.target.innerText;
  let randomIndex = Math.floor(Math.random()*3);
  let computer = result[randomIndex];
  game(user, computer)
  console.log(user, computer);
}

buttons.forEach(function(buttons) {
  buttons.addEventListener('click', play);
})