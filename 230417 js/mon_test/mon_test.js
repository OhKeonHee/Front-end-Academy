const darkmod = document.querySelector("#darkmod");
const body = document.querySelector("body")

darkmod.onclick = function() {     
  body.classList.toggle("change");
  if(darkmod.innerHTML == "다크모드") {
    darkmod.innerHTML = "라이트모드";
  }else if(darkmod.innerHTML == "라이트모드"){
    darkmod.innerHTML = "다크모드";
  }
}

const selectMajor = document.querySelector("#major");

function alertSelect() {
  let selectedText = selectMajor.options
  [selectMajor.selectedIndex].innerText;
  alert(`[ ${selectedText} ] 를 선택했습니다.`);
}
selectMajor.onchange = alertSelect;