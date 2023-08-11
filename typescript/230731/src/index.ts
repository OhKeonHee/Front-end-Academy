// ** 배열의 요소를 item변수에 넣은 후 값으로 가져오기
const numbers = [1, 2, 3, 4, 5];
for(let i = 0; i < numbers.length; i++) {
  const item = numbers[i]; // 1 2 3 4 5
  console.log(item);
}

// ** 타입 및 자바스크립트 배열 => 객체처럼 비구조할당이 가능
let array = [1, 2, 3, 4, 5];
let [first, second, third, ...rest] = array; 
// first: 1, second: 2, third: 3, ...rest(=전개연산자): 4, 5가 들어감
console.log(first, second, third, rest); // -> 1 2 3 [ 4, 5 ]

// ** for 변수 in 객체 : 배열의 인덱스 값을 순회(=반복)
let names: string[] = ["Jack", "Jane", "Steve"];
for (let idx in names) {
  const name = names[idx] 
  // name안에 "Jack", "Jane", "Steve"가 들어감, idx가 0, 1, 2로 순회
  console.log(`[${idx}]: ${name}`);
  // -> [0]: Jack [1]: Jane [2]: Steve
}

// ** for 변수 of 객체 : 배열의 아이템 값을 순회(=반복)
for (let name of ["Jack", "Jane", "Steve"]) {
  console.log(name);
  // -> Jack Jane Steve
}
