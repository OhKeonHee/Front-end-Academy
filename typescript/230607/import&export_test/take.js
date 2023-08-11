function test() {
  console.log("hello");
}

export { test } // 함수 test 출력준비완료, index.js에서 import로 받을 수 있음
                // 1) html의 script src 뒤에 type="module"을 적어야함 
                // 2) package.json의 main 밑에 "type"= "module"을 적어야함 