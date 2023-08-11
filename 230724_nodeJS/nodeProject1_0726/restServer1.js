// https://letsencrypt.org/ : 무료로 https 보안 서버 줌

const https = require('https'); // https 모듈 가져오기
const fs = require('fs'); // fileSystem 모듈 가져오기, promises 속성 : 비동기 처리를 하기 위함
const path = require('path'); // path 모듈 가져오기

const users = {}; // 데이터 저장용

https.createServer(
  {
    cert: fs.readFileSync("도메인 인증서 경로"),
    key: fs.readFileSync('도메인 비밀 키 경로'),
    ca: [
      fs.readFileSync('상위 인증서 경로'),
      fs.readFileSync('상위 인증서 키'),
    ],
  },
  (req, res) => {
  try {
    console.log(req.method, req.url);
    if(req.method === "GET") {
      if(req.url === "/") {
        const data = fs.readFile(path.join(__dirname, 'restFront.html'));
        res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});
        return res.end(data)
      } else if(req.url === "/about") {
        const data = fs.readFile(path.join(__dirname, 'about.html'));
        res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});
        return res.end(data)
      } else if(req.url === "/users") {
        res.writeHead(200, {"Content-Type" : "application/json; charset=utf-8"});
        return res.end(JSON.stringify(users)) // json 파일 users를 문자열 타입으로 반환
      }
      try { // Home, about 페이지가 아닌 페이지를 요청한 경우
        const data = fs.readFile(path.join(__dirname, req.url)); // 요청한 url은 보여주지만 값은 없음
        return res.end(data)
      } catch(err) {}
    } else if(req.method === "POST") {
      if(req.url === '/user') {
        let body = '';
        req.on("data", (data) => {
          body += data;
        });
        return req.on('end', () => {
          console.log('POST 본문(body)', body);
          const { name } = JSON.parse(body);
          const id = Date.now();
          users[id] = name;
          res.writeHead(201, {"Content-Type" : "text/plain; charset=utf-8"});
        });
      }
    } else if(req.method === "PUT") {
      if(req.url.startsWith("/user/")) {
        const key = req.url.split('/')[2];
        let body = '';
        req.on("data", (data) => {
          body += data; // data가 들어올 때 마다 body에 넣어줌
        });
        return req.on("end", () => {
          console.log('PUT 본문(Body):', body);
          users[key] = JSON.parse(body).name;
          res.writeHead(200, {"Content-Type" : "application/json; charset=utf-8"});
          return res.end(JSON.stringify(users));
        });
      }
    } else if(req.method === "DELETE") {
      if(req.url.startsWith("/user/")) {
        const key = req.url.split('/')[2];
        delete users[key];
        res.writeHead(200, {"Content-Type" : "application/json; charset=utf-8"});
        return res.end(JSON.stringify(users));
      }
    }
    res.writeHead(404);
    return res.end('NOT FOUND');
  } catch(err) {
    console.error(err);
    res.writeHead(500, {"Content-Type" : "text/plain; charset=utf-8"});
    res.end(err.message);
  }
}).listen(443, () => {
  console.log('443번 포트에서 서버 대기 중입니다.')
})