// ** 명령형 프로그래밍 예시
let sum = 0;
for (let val = 1; val <= 100; val++) sum += val;
console.log(sum) // -> 5050

// 홀수값만 더하기
let oddSum = 0;
for(let val = 1; val <= 100; val += 2) oddSum += val;
console.log(oddSum); // 2500

// 짝수값만 더하기
let evenSum = 0;
for(let val = 0; val <= 100; val += 2) oddSum += val;
console.log(evenSum); // 2505