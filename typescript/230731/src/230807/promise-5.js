// ** 명언 json에서 명언 랜덤으로 뽑아보여주기

const quotesURL = 'https://dummyjson.com/quotes'

// json 파일을 객체형태로 가져오기 (* fetch)
fetch(quotesURL)
  .then((response) => response.json())
  .then((data) => {
    const result = document.querySelector('#result');
    const random = Math.floor(Math.random() * 30);
    result.querySelector('.quote').innerHTML = data.quotes[random].quote
    result.querySelector('.author').innerHTML = data.quotes[random].author
  })
  .catch((error) => console.log(error));