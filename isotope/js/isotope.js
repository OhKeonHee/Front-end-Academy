window.addEventListener("load", ()=>{
  const grid = new Isotope("section", { //배치할 요소를 감싸고 있는 부모요소
    itemSelector: "article", //배치할 요소
    columWidth: "article", //너비값을 구할 요소
    transitionDuration: "0.5s" //화면 재배치 속도
  })
})