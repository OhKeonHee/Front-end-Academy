// Promise가 가지고있는 resolve를 출력시켜주는 then()
// 인자값을 받아와 출력
Promise.resolve(1).then(value => console.log(value));
Promise.resolve("Hello World!").then(value => console.log(value));
Promise.resolve([1, 2, 3]).then(value => console.log(value));
Promise.resolve({name: 'Jack', age: 32}).then(value => console.log(value));