// express 방법으로 서버를 생성하면 코드 수정 후 서버 재시작 필요없이 저장 후 새로고침만 해도 됨

const express = require("express");
const path =require('path');

const app = express();

// set(): 서버가 실행될 포트 설정
app.set("port", process.env.PORT || 3000);

// express가 use라는 함수를 사용해서 미들웨어 역할, 특정 경로를 지정하지 않으면 클라이언트로부터 요청받는 모든 요청에 미들웨어 함수를 실행한다.

app.use((req, res, next) => {
  console.log('모든 요청에 다 실행됩니다.');
  next(); // 다음 실행문으로 넘겨주는 함수
})

// get(): 도메인 주소에 대한 GET 메서드 요청이 발생되었을 때, 어떤 동작을 하게 할 것인지 정의
app.get('/', (req, res, next) => {
  // res.send('Hello, Express'); // send(): 화면에 출력하고 싶을 때 사용, html처럼 외부파일을 쓸경우 sendFile()씀
  // res.sendFile(path.join(__dirname, "/index.html"))
  console.log("GET / 요청에서만 실행됩니다.");
  next();
},
  (req, res) => {
    throw new Error('에러는 에러처리 미들웨어로 갑니다.')
  }
);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
})

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중')
})

