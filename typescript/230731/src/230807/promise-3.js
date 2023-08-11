// Promise 객체에서 then() 메서드를 체이닝 기법으로 사용하는 방법
const pizza = () => {
  return new Promise((resolve, reject) => {
    resolve('피자를 주문합니다.');
  })
}

const step1 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('피자 도우 준비');
    }, 3000);
  });
};
const step2 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('토핑 완료');
    }, 3000);
  });
};
const step3 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('굽기 완료');
    }, 3000);
  });
};

pizza()
  .then((result) => step1(result))
  .then((result) => step2(result))
  .then((result) => step3(result))
  .then((result) => console.log(result))
  .then(() => {
    console.log('피자가 준비되었습니다.')
  })