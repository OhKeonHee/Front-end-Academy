// 노드에서 서버를 구현하기 위해선 "http"라는 프로토콜의 역할을 할 수 있는 http 모듈을 불러와야한다.
// http 모듈은 createServer() 함수가 실제 서버를 구현시킬 수 있도록 하는 역할
// createServer((req, res) => {})

const http = require("http");

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write('<h1>Hello Node!</h1>');
  res.end("<p>Hello Server!</p>");
}).listen(8080, () => {
  console.log('8080번 포트에서 서버 대기 중입니다.')
})
// 콘솔창에 node createServer를 치면 '8080번 포트에서 서버 대기 중입니다.'출력ㅊ
// http://localhost:8080/에 접속하면 Hello Node!와 Hello Server!가 나옴
// 서버만들기 성공

// res.end("<p>Hello Server!</p>");를
// res.end("<p>Hello Front!</p>");로 수정해도 새로고침해도 업데이트 안됨
// !!! -- 무조건 서버를 껐다 켜야 수정됨 -- !!!


// ↑↑↑ 위 코드를 쪼개서 쓸 수 있음
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write('<h1>Hello Node!</h1>');
  res.end("<p>Hello Server!</p>");
});
server.listen(8081)

server.on('listening', () => {
  console.log('8081번 포트에서 서버 대기 중입니다.');
});
server.on('error', (error) => {
  console, error(error);
})