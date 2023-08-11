// promise : 비동기 방식
// 참일때 resolve, 거짓: reject
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 3000)
})

promise.then((response) => {
  console.log(response);
})

promise.catch((error) => {
  if(typeof error === "string") {
    console.log(error);
  }
})