const http = require('http');
const fs = require('fs').promises;

http.createServer( async (req, res) => { 
  // async는 위에 promises객체를 썼기에 사용가능
  try {
    const data = await fs.readFile("./server.html")
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    // 200: 상태코드, 서버가 전송한 파일 타입을 정의해줌
    res.end(data)
  } catch(err) {
    console.error(err)
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' })
    // 500: 서버 자체오류가 발생했을 때 상태코드, 단순 텍스트기에 text/plain 타입정의
  }
})
.listen(8081, () => {
  console.log('8081번 포트에서 서버 대기 중입니다.')
})