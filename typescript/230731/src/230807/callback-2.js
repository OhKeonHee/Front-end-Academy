// 자바스크립트 > 콜백함수를 무분별하게 사용하는 경우

function displayLetter() {
  console.log('A');
  setTimeout(() => {
    console.log('B');
    setTimeout(() => {
      console.log('C');
      setTimeout(() => {
        console.log('D');
        setTimeout(() => {
          console.log('stop!!')
        }, 1000)
      }, 1000)
    }, 1000)
  }, 1000)
}

displayLetter();