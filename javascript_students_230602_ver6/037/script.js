const nameInput = document.querySelector('.name-input');
const warningMessage = document.querySelector('.warning-message');

// .name-input에 문자를 입력할 때마다 실행
nameInput.addEventListener('input', () => {
  // 입력된 문자 가져오기
  const inputStr = nameInput.value;
  console.log(inputStr);
  // 입력된 문자를 소문자로 변환
  console.log(inputStr);
  const normalStr = inputStr.toLowerCase();
  // 'test'포함 여부 알림
  if (normalStr.includes('test') === true) {
    warningMessage.innerText = '「test」가 포함되어 있음';
  } else {
    warningMessage.innerText = '';
  }
});