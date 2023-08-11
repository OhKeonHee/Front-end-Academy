// 1.html > 
// 첫번째 페이지로 나올 요소를 먼저 정의
// 모달 페이지로 나올 요소를 그 다음 정의

// 2.CSS >
// 첫번째 페이지에 대한 스타일링
// 모달 페이지로 나올 요소에 스타일링 (*display : none)

// 3.JS >
// 각각의 요소를 변수값에 할당
// 첫번째 페이지에 이벤트가 작동했을 때, 나올 페이지
// 두번째 페이지에서 이벤트가 작동했을 때, 나올 페이지

const openButton = document.querySelector('.open');
const closeButton = document.querySelector('.close');
const container = document.querySelector('.container');
const imgBtn = document.querySelector('.imgbtn');

openButton.addEventListener('click', () => {
  container.style.display = 'flex'
  openButton.style.display = 'none'
})
closeButton.addEventListener('click', () => {
  container.style.display = 'none'
  openButton.style.display = 'block'
})
imgBtn.addEventListener('click', () => {
  container.style.display = 'none'
  openButton.style.display = 'block'
})