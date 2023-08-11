// document.getElementsByClassName("accent")[0].getElementsByClassName.textDecoration="underline";
// document.getElementsByClassName("accent")[1].getElementsByClassName.textDecoration="dashed";

// document.getElementsByTagName("h2")[0].style.backgroundColor="#eee"

// document.querySelectorAll(".accent")[1].style.backgroundColor = "yellow";

// {/* <유의사항>
// querySelector("#detail")
// getElementsById("detail")
// Element, Elements 가운데 적용되어있는 메서드 함수의 경우, 태그 노드 까지만 스타일을 적용할 수 있습니다.Element

// querySelector => 속성노드 및 텍스트 노드까지 접근 가능하며, 스타일 및 기타 요소 편집이 가능합니다.

// getAttribute() : 속성값을 알기 위한 함수
// setAttribute() : 속성값을 변경하기 위한 함수
// addEventListener() : 한 요소에 여러 이벤트가 발생했을 때, 동시에 처리할 수 있는 이벤트 함수

let bigPic = document.querySelector("#cup");
let smallPic = document.querySelector(".small");

for (let i = 0; i < smallPic.length; i++) {
  smallPic[i].addEventListener("click", changePic);
}

function changePic() {
  let newPic = this.src;
  bigPic.setAttribute("src", newPic)
}

let isOpen = false;
let view = document.querySelector("#view");
view.addEventListener("click", pageOpen);

function pageOpen() {
  if(isOpen == false) {
    document.querySelector("#detail").style.display = "block";
    view.innerHTML = "상세 설명 닫기";
    isOpen = true;
  } else {
    document.querySelector("#detail").style.display = "none";
    view.innerHTML = "상세 설명 보기";
    isOpen = false;
  }
}
