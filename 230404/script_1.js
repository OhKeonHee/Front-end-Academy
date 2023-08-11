let pic = document.querySelector('#pic');
pic.addEventListener("mouseover", changePic);
pic.addEventListener("mouseout", originPic);

function changePic() {
  pic.src = "/image/boy.png";
}

function originPic() {
  pic.src = "/image/girl.png";
}