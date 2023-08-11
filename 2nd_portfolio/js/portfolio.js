// ##################### content_panel change
(function() {
  $('.navItem').on('click', function(e) {
    let Id;
    e.preventDefault();
    $('.navItem').removeClass('selected');
    $(this).addClass('selected');
    Id = $(this).children().attr('href'); // attr() : 선택요소의 속성값 가져오기
    $('.content').hide();
    $('.content[id=' + Id + ']').show();
    if (Id === 'projects') {
      $('.dashboard-preview').show();
    } else {
      $('.dashboard-preview').hide();
    }
  });
// ##################### preview_panel change
  $('.listItem').on('click', function(e) {
    let Id;
    e.preventDefault();
    $('.listItem').removeClass('active');
    $(this).addClass('active');
    Id = $(this).attr('list-id');
    $('.preview').hide();
    $('.preview[id=' + Id + ']').show();
  });

}).call(this);

const mobile = document.querySelector('.mobile_ver_btn');
const figma = document.querySelector('#figmaBtn');
//##################### resume modal
const open = document.querySelector('#resumeBtn');
const resumeImg = document.querySelector('.resumeImg');
const closeButton = document.querySelector('.close');
const container = document.querySelector('.modal-container');

open.addEventListener('click', () => {
  container.style.display = 'block'
  mobile.style.display = 'none'
  figma.style.display = 'none'
})
closeButton.addEventListener('click', () => {
  container.style.display = 'none'
  mobile.style.display = 'block'
  figma.style.display = 'block'
})
resumeImg.addEventListener('click', () => {
  container.style.display = 'none'
  mobile.style.display = 'block'
  figma.style.display = 'block'
})

const pro1_open = document.querySelector('#pro1Btn');
const pro1_closeButton = document.querySelector('.pro1_close');
const pro1_container = document.querySelector('.pro1_modal-container');

pro1_open.addEventListener('click', () => {
  pro1_container.style.display = 'block'
  mobile.style.display = 'none'
  figma.style.display = 'none'
})
pro1_closeButton.addEventListener('click', () => {
  pro1_container.style.display = 'none'
  mobile.style.display = 'block'
  figma.style.display = 'block'
})

const figma_open = document.querySelector('#figmaBtn');
const figma_closeButton = document.querySelector('.figma-close');
const figma_container = document.querySelector('.figma-modal-container');

figma_open.addEventListener('click', () => {
  figma_container.style.display = 'block'
  figma_open.style.display = 'none'
  mobile.style.display = 'none'
  figma.style.display = 'none'
})
figma_closeButton.addEventListener('click', () => {
  figma_container.style.display = 'none'
  mobile.style.display = 'block'
  figma.style.display = 'block'
})

let chatList = document.querySelector('.chatlist'), // chatlist 클래스 선택
	  animationCounter = 1, // animationCounter 1로 설정
	  animationBubbleDelay = 600 // animationBubbleDelay 600으로 설정

function buttonchat1(){
  let chatBubble = document.createElement('li');
  chatBubble.classList.add('userInput');
  chatBubble.innerHTML = button1.value;
  chatList.appendChild(chatBubble)
  checkInput(button1.value);
  }
  function buttonchat2(){
  let chatBubble = document.createElement('li');
  chatBubble.classList.add('userInput');
  chatBubble.innerHTML = button2.value;
  chatList.appendChild(chatBubble)
  checkInput(button2.value);
  }
  function buttonchat3(){
  let chatBubble = document.createElement('li');
  chatBubble.classList.add('userInput');
  chatBubble.innerHTML = button3.value;
  chatList.appendChild(chatBubble)
  checkInput(button3.value);
  }
  function buttonchat4(){
  let chatBubble = document.createElement('li');
  chatBubble.classList.add('userInput');
  chatBubble.innerHTML = button4.value;
  chatList.appendChild(chatBubble)
  checkInput(button4.value);
  }
  function buttonchat5(){
  let chatBubble = document.createElement('li');
  chatBubble.classList.add('userInput');
  chatBubble.innerHTML = button5.value;
  chatList.appendChild(chatBubble)
  checkInput(button5.value);
  }
  function buttonchat6(){
  let chatBubble = document.createElement('li');
  chatBubble.classList.add('userInput');
  chatBubble.innerHTML = button6.value;
  chatList.appendChild(chatBubble)
  checkInput(button6.value);
  }
  function buttonchat7(){
  let chatBubble = document.createElement('li');
  chatBubble.classList.add('userInput');
  chatBubble.innerHTML = button7.value;
  chatList.appendChild(chatBubble)
  checkInput(button7.value);
  }

let checkInput = function(input) { // 파라미터로 input을 받는 checkInput 함수 생성
  hasCorrectInput = false; // 기본값 위에서 false로 설정함
  isReaction = false; // 기본값 위에서 false로 설정함
  for(let textVal in possibleInput){ // textVal 루프변수에 possibleInput 객체의 프로퍼티명 차례대로 대입
    //indexOf는 찾는 문자열이 존재한다면 문자열 시작위치 반환, 존재하지 않는다면 -1 반환)	
    if(input == textVal || input.indexOf(textVal) >=0 && isReaction == false){
      // input이 textVal과 같거나, input에서 찾는 문자열에 textVal이 포함되어있고 isReaction이 false라면,
      hasCorrectInput = true; // hasCorrectInput true로 설정
      botResponse(textVal); // textVal을 파라미터로 받는 botResponse 실행
    }
  }
}

function botResponse(textVal) { // textVal을 파라미터로 받는 botResponse 함수
  let userBubble = document.createElement('li'); // userBubble html요소 'li'로 생성
  userBubble.classList.add('bot__output'); // userBubble에 'bot__output' 클래스가 없으면 생성
  if(isReaction == false){ // isReaction이 false라면
    if (typeof possibleInput[textVal] === "function") { // textVal을 파라미터로 받은 possibleInput이 "function"이라면
      userBubble.innerHTML = possibleInput[textVal]();
    }
  }
  chatList.appendChild(userBubble) // chatList에 userBubble을 자식으로 추가
}
function responseText(e) {
  let response = document.createElement('li'); // 'li' 요소로 생성
  response.classList.add('bot__output'); // response에 'bot__output' 클래스가 없으면 생성
  response.innerHTML = e;
  chatList.appendChild(response); // chatList에 response 자식으로 추가
  animateBotOutput(); // animateBotOutput 함수 실행
  
  setTimeout(function() { // (function, 0)을 파라미터로 받는 setTimeout 기능
    chatList.scrollTop = chatList.scrollHeight; // 스크롤바 최하단에 고정
    console.log(response.clientHeight); // 스크롤바를 포함한 영역 안의 총 길이 콘솔에 출력
  }, 0)
}
function animateBotOutput() {
  chatList.lastElementChild.style.animationDelay= (animationCounter * animationBubbleDelay)+"ms"; 
  // chatList 마지막 자식의 스타일의 애니메이션 지연시간 설정 (animationCounter 정수 x animationBubbleDelay 밀리초로)
  animationCounter++; // 애니메이션 카운터 1 증가
  chatList.lastElementChild.style.animationPlayState = "running";
  // 애니메이션 재생 상태 running(재생)으로 설정
}
function commandReset(e){
  animationCounter = 1; // 애니메이션 카운터 1로 설정
  previousInput = Object.keys(possibleInput)[e]; // possibleInput의 e번째 속성에 해당하는 문자열 반환
}
var possibleInput = {
  "이름" : function(){
      responseText("제 이름은 오건희입니다. 😊")
      commandReset(0);
      return
      },
  "이메일" : function(){
      responseText("<a href='mailto:98ogh@naver.com'>📡 98ogh@naver.com 👈 궁금하신 사항은 메일로 문의주세요.");
      commandReset(1);
      return
      },
  "깃허브" : function(){
      responseText("<a href='https://github.com/adfdaf' target='_blank'><i class='bi bi-github'></i> GitHub 바로가기</a>")
      commandReset(2);
      return
    },
  "이력서" : function(){
      responseText("<a href='/오건희_이력서.pdf' download=''>😂 저의 이력서를 다운받아주세요. <i class='bi bi-download'></i></a>")
      commandReset(3);
      return
    },
  "연락처" : function(){
      responseText("<a href='tel:010-8980-2726'>📞 010-8980-2726</a>")
      commandReset(4);
      return
    },
  "전공" : function(){
      responseText("💻 저는 서일대학교 소프트웨어공학과를 졸업했습니다.")
      commandReset(5);
      return
      },
  "생년월일" : function(){
      responseText("🎉 저는 1998년 12월 22일생 입니다.")
      commandReset(6);
      return
      }
}

//####################### PC Color-Theme
const color1 = document.querySelector("#color-1-checked");
const color2 = document.querySelector("#color-2-checked");
const color3 = document.querySelector("#color-3-checked");
const color4 = document.querySelector("#color-4-checked");
const color5 = document.querySelector("#color-5-checked");

document.documentElement.classList.add('theme5');

color1.addEventListener('click', function () {
  document.documentElement.classList.add('theme1');
  document.documentElement.classList.remove('theme2');
  document.documentElement.classList.remove('theme3');
  document.documentElement.classList.remove('theme4');
  document.documentElement.classList.remove('theme5');
});
color2.addEventListener('click', function () {
  document.documentElement.classList.add('theme2');
  document.documentElement.classList.remove('theme1');
  document.documentElement.classList.remove('theme3');
  document.documentElement.classList.remove('theme4');
  document.documentElement.classList.remove('theme5');
});
color3.addEventListener('click', function () {
  document.documentElement.classList.add('theme3');
  document.documentElement.classList.remove('theme2');
  document.documentElement.classList.remove('theme1');
  document.documentElement.classList.remove('theme4');
  document.documentElement.classList.remove('theme5');
});
color4.addEventListener('click', function () {
  document.documentElement.classList.add('theme4');
  document.documentElement.classList.remove('theme2');
  document.documentElement.classList.remove('theme3');
  document.documentElement.classList.remove('theme1');
  document.documentElement.classList.remove('theme5');
});
color5.addEventListener('click', function () {
  document.documentElement.classList.add('theme5');
  document.documentElement.classList.remove('theme2');
  document.documentElement.classList.remove('theme3');
  document.documentElement.classList.remove('theme1');
  document.documentElement.classList.remove('theme4');
});
//####################### Mobile Color-Theme
const M_color1 = document.querySelector(".mobile-theme #color-1-checked");
const M_color2 = document.querySelector(".mobile-theme #color-2-checked");
const M_color3 = document.querySelector(".mobile-theme #color-3-checked");
const M_color4 = document.querySelector(".mobile-theme #color-4-checked");
const M_color5 = document.querySelector(".mobile-theme #color-5-checked");

document.documentElement.classList.add('theme3');

M_color1.addEventListener('click', function () {
  document.documentElement.classList.add('theme1');
  document.documentElement.classList.remove('theme2');
  document.documentElement.classList.remove('theme3');
  document.documentElement.classList.remove('theme4');
  document.documentElement.classList.remove('theme5');
});
M_color2.addEventListener('click', function () {
  document.documentElement.classList.add('theme2');
  document.documentElement.classList.remove('theme1');
  document.documentElement.classList.remove('theme3');
  document.documentElement.classList.remove('theme4');
  document.documentElement.classList.remove('theme5');
});
M_color3.addEventListener('click', function () {
  document.documentElement.classList.add('theme3');
  document.documentElement.classList.remove('theme2');
  document.documentElement.classList.remove('theme1');
  document.documentElement.classList.remove('theme4');
  document.documentElement.classList.remove('theme5');
});
M_color4.addEventListener('click', function () {
  document.documentElement.classList.add('theme4');
  document.documentElement.classList.remove('theme2');
  document.documentElement.classList.remove('theme3');
  document.documentElement.classList.remove('theme1');
  document.documentElement.classList.remove('theme5');
});
M_color5.addEventListener('click', function () {
  document.documentElement.classList.add('theme5');
  document.documentElement.classList.remove('theme2');
  document.documentElement.classList.remove('theme3');
  document.documentElement.classList.remove('theme1');
  document.documentElement.classList.remove('theme4');
});

//###################### slick-slider
$('.preview_content_img').slick({
  dots: true
});

//####################### Video-Theme
const video = document.getElementById("video");
const src = document.getElementById("src");

function changeVideo1() { 
  src.src = '/img/home_video_1.mp4';
  video.load();
  video.play();
}
function changeVideo2() { 
  src.src = '/img/home_video_2.mp4';
  video.load();
  video.play();
}
function changeVideo3() { 
  src.src = '/img/home_video_3.mp4';
  video.load();
  video.play();
}
function changeVideo4() { 
  src.src = '/img/home_video_4.mp4';
  video.load();
  video.play();
}

document.getElementById("change1").onclick = changeVideo1;       
document.getElementById("change2").onclick = changeVideo2; 
document.getElementById("change3").onclick = changeVideo3; 
document.getElementById("change4").onclick = changeVideo4; 



