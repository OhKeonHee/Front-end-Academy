//dragover 이벤트 : 드래그를 하고자 하는 공간에 마우스가 도착했을 때 발생하는 이벤트

//drop 이벤트 : 드래그가 끝나서 드래그하던 객체를 놓는 장소에 발생하는 이벤트

//load 이벤트 : 웹브라우저에 어떠한 요소를 로딩했을 때, 진행되는 이벤트

// event.dataTransfer.files : 어떠한 데이터를 전송했는지를 확인할 수 있는 프로퍼티

// 객체.type.match("string") : 객체 안에 match 매서드의 인자값이 존재하는지 확인해주는 구문 / 문법

// 내장객체 중 하나!
// new FileReader() : 전송중인 데이터 파일을 컴퓨터에 저장하도록 해주는 내장객체(*매서드)

// new Image() : 이미지 전용 내장 객체 / 해당 객체를 활용해서 이미지의 url 및 경로등을 저장할 수 있음

// readAsDataURL() : 컴퓨터에 저장된 데이터를 읽어오도록하는 메서드

// insertBefore(삽입할 요소, 기준점이 되는 요소)

const fileZone = document.querySelector(".file-zone");

fileZone.addEventListener("dragover", (event) => {
  event.preventDefault();
  fileZone.classList.add("on");
})

fileZone.addEventListener("drop", (event) => {
  event.preventDefault();
  fileZone.classList.remove("on");

  const transferFiles = event.dataTransfer.files;

  displayImages(transferFiles);
});

function displayImages(transferFiles) {
  const imageFileList = [];
  const fileNum = transferFiles.length;

  for(let i =0; i < fileNum; i++) {
    if(transferFiles[i].type.match("image.*") === false) {
      return;
    }
    imageFileList.push(transferFiles[i]);
  }

  const imagePreviewArea = document.querySelector(".image-list");
  
  for(let imageFile of imageFileList) {

    const fileReader = new FileReader();
    fileReader.readAsDataURL(imageFile);
    fileReader.addEventListener("load", (event) => {
      const image = new Image();
      image.src = event.target.result;

      imagePreviewArea.insertBefore(image, imagePreviewArea.firstChild)
    })
  }
}

