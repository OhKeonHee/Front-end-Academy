// 순수 promise 객체를 활용한 then() 메서드 체이닝 기법
function whatsYourFavorite() {
  let fav = 'Javascript';
  return new Promise((resolve, reject) => resolve(fav));
}

function displaySubject(subject) {
  return new Promise((resolve, reject) => resolve(`Hello, ${subject}`))
}

whatsYourFavorite().then(displaySubject).then(console.log);


// ** ======== async 함수 적용 버전
async function whatsYourFavorite() {
  let fav = 'Javascript';
  return fav; 
  // Promise를 또 쓸 이유가 없음, async자체가 promise를 반환함
}

async function displaySubject(subject) {
  return `Hello, ${subject}`;
}

// 비동기 방식이지만 displaySubject의 경우 whatsYourFavorite보다 먼저
// 작동되면 오류가 날 수 있기에 순서를 정해주는 것 👇
async function init() {
  const response = await whatsYourFavorite();
  const result = await displaySubject(response);
  console.log(result);
}

init();