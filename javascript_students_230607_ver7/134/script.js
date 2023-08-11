const fileZone = document.querySelector(".file-zone");

fileZone.addEventListener("dragover", (event) => {
  event.preventDefault()
  fileZone.classList.add("on");
});

fileZone.addEventListener("drop", (event) => {
  event.preventDefault()
  fileZone.classList.remove("on");

  const transferdFiles = event.dataTransfer.files;

  displayImages(transferdFiles);
});

function displayImages(transferdFiles) {
  const imageFileList = [];
  const fileNum = transferdFiles.length;

  for (let i = 0; i < fileNum; i++) {
    if(transferdFiles[i].type.match("image.*") === false) {
      return;
    }
    imageFileList.push(transferdFiles[i]);
  }

  const imagePreviewArea = document.querySelector(".image-list");

  for (let imageFile of imageFileList) {

    const fileReader = new FileReader();
    fileReader.readAsDataURL(imageFile);
    fileReader.addEventListener("load", (event) => {
      const image = new Image();
      image.src = event.target.result;

      imagePreviewArea.insertBefore(image, imagePreviewArea.firstChild);
    });
  }
}
