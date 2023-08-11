//...........01
// $(function() {
//   let result_1 = $("#inner_1 p")
//   .eq(0).is(":visible");
//    //인덱스값 0인애가 지금 보여지고 있냐?
//   console.log(result_1); //true

//   let result_2 = $("#inner_1 p")
//   .eq(1).is(":visible");
//   console.log(result_2); //false

//   let result_3 = $("#chk1").is(":checked");
//   console.log(result_3); //true

//   let result_4 = $("#chk2").is(":checked");
//   console.log(result_4); //false
// })

//............02
// $(function() {
//   let result_1 = $("#sec_1").html();
//   console.log(result_1);
//   // <h2>
//   // <em>html()</em>
//   // </h2>
//   // <p>내용1</p>
//   // $("#sec_1 p").html("<a href=\"#\">Text1</a>")
//   //내용1이 Text1로 바뀜
  
//   let result_2 = $("#sec_2").text();
//   console.log(result_2);
// })

//............03
// $(function() {
//   let srcVal = $("#sec_1 img").attr("src");
//   console.log(srcVal); // : /img/math_img_1.jpg

//   $("#sec_1 img")
//   .attr({
//     "width": 200,
//     "src":srcVal.replace("1.jpg", "2.jpg"),
//     "alt":"바위" //이미지 바꿈
//   })

//   .removeAttr("border"); //border 없앰
// })

//............04
// $(function() {
//   $("#p1").addClass("aqua"); //p1에 aqua클래스를 줌
//   $("#p2").removeClass("red"); //p2에 red없앰
//   $("#p3").toggleClass("green"); //p3에 green이 없기때매 green을 줌
//   $("#p4").toggleClass("green"); //p4는 이미 green이라 green을 없애버림
//   $("#p6").text($("#p5").hasClass("yellow")); //p5가 yellow 클래스를 갖고있는지 true/false로 알려주고 그값을 p6의 텍스트로 바꿈 //결과값 : 내용6 -> true
// })

//............05
// $(function() {
//   let result_1 = $("#user_name").val();
//   console.log(result_1); //: 홍길동

//   $("user_id").val("javascript");

//   let result_2 = $("#user_id").prop("defaultValue");
//   console.log(result_2); // : hello
// })

//............06
// $(function() {
//   let result_1 = $("#chk1").prop("checked");
//   console.log(result_1); //false

//   let result_2 = $("#chk2").prop("checked");
//   console.log(result_2); //true

//   let result_3 = $("#chk3").prop("checked", true);
//   console.log(result_3); //3번째 체크박스 체크됨

//   let result_4 = $("#se_1").prop("selectedIndex");
//   console.log(result_4); //: 2 // [chk1,chk2,chk3] 체크된거 3이라 0,1,2로 2
// })

//............07
//css
// #box_wrap {
//   width: 300px;
//   height: 200px;
//   background-color: #ccc;

//   margin: 50px auto 0;
//   position: relative;
// }
// .box {
//   width: 50px; height: 50px;
//   background-color: #f00;
//   position: absolute;
//   left: 100px;
//   top: 50px;
// } 👇

//script
// $(function() {
//   let $txt1 = $(".txt_1 span"),
//       $txt2 = $(".txt_2 span"),
//       $box = $(".box");
      
//   let off_t = $box.offset().top; //offset() -> 절대좌표값
//   $txt1.text(off_t); // : 100이 txt_1 span에 들어감

//   let pos_t = $box.position().top; //position() -> 상대좌표값
//   $txt2.text(pos_t); // : 50이 txt_2 span에 들어감
// })


//............08
// $(function() {
//   let topNum = $("h1").offset().top;
//   $(window).scrollTop(topNum);

//   let sct = $(window).scrollTop();
//   console.log(sct); //2000
// })

//............09
// $(function() {
//   $("#wrap p:eq(2)").after("<p>After</p>"); //3번째 내용3 뒤에 After라는 문자가 생김
//   $("<p>insertAfter</p>").insertAfter("#wrap p:eq(1)") //선택자랑 선택위치만 바꾸는 법

//   $("#wrap p:eq(1)").before("<p>Before</p>");
//   $("<p>insertBefore").insertBefore("#wrap p:eq(0)");
// })

//............10
// $(function() {
//   $("#listZone").append("<li>append</li>");
//   // ==
//   $("<li>append</li>").appendTo("#listZone");

//   $("#listZone").prepend("<li>prepend</li>"); //앞
// })

//............11
// $(function() {
//   let copyObj = $(".box1").children().clone();

//   $(".box2").remove();

//   $(".box3").empty();
//   $(".box3").append(copyObj);
// })

//............12
// $(function() {
//   $("h2").replaceWith("<h3>replace method</h3>")
//   $("<p>Change</p>").replaceAll("div");
// })

//............13
//css
// div {
//   background-color: aqua;
// }
//html
{/* <p class="ct1">내용1</p>
  <p class="ct1">내용2</p>
  <p class="ct2">내용3</p>
  <p class="ct2">내용4</p>
  <ul>
    <li>내용3</li>
    <li>내용4</li>
  </ul> */}
//js
// $(function() {
//   $("strong").unwrap(); 
//   $(".ct1").wrap("<div />"); //내용1, 내용2 각각 파란색 배경
//   $(".ct2").wrapAll("<div />"); //내용3,4 묶어서 파란색 배경
//   $("li").wrapInner("<h3 />"); //li 크기 h3
// })

//............14
// $(function() {
//   $(".wrap_1 p:first")
//   .text("내용1"); //p태그 첫번째 텍스트를 내용1로 바꿈

//   $(".wrap_1 p.active")
//   .removeClass("active") //active 클래스를 갖고 있는 p태그의 클래스를 삭제
//   .addClass("on"); //on클래스 부여

//   $(".wrap_1 p:eq(2) a") //네이버의 a태그
//   .attr("href","https://www.naver.com");

//   $(".wrap_1 p:eq(3) input").val("korea") //input태그의 value값 바꿈

//   $(".wrap_2 p:first").after("<p>After(추가1)</p>");

//   $(".wrap_2 p:first").before("<p>Before(추가2)</p>");

//   $(".wrap_3 p")
//   .unwrap()
//   .wrapInner("<strong />")
// })

//######################################
// 제이쿼리 구문을 호출하는 방법!!

// - $(document).ready(function() {

//   });

// - $(function() {

//   })
//#####################################

//............15
// html
// <p><a href="https://www.naver.com" class="btn1">버튼1</a></p>
// <p class="txt1">내용1</p>
// <p><a href="https://www.naver.com" class="btn2">버튼2</a></p>
// <p class="txt2">내용2</p>
// <p><button class="btn3">버튼3</button></p>
// <p class="txt3">내용3</p>
// $(function() {
//   $(".btn1").on("click", function(e){
//     e.preventDefault(); //a태그가 갖고있는 속성을 무시하게함 /링크버튼 눌러도 페이지 안넘어감
//     $(".txt1")
//     .css({
//       "background-color":"#ff0"
//     }); //버튼1누르면 내용1 바탕 노란색
//   })
//   $(".btn2").on("click",function(e){ //a태그의 링크도 접속하고 내용2 바탕도 파란색으로 바뀜
//     $(".txt2")
//     .css({
//       "background-color":"#0ff"
//     })
//   })
//   $(".btn3").on("dblclick", function() { //더블클릭 해야만 내용3 바탕 초록
//     $(".txt3")
//     .css({
//       "background-color":"#0f0"
//     })
//   })
// })

// html
// <p><button class="btn1">Mouse Over /Mouse Out</button></p>
//   <p class="txt1">내용1</p>
//   <p><button class="btn2">Hover</button></p>
//   <p class="txt2">내용2</p>
$(function() {
  $(".btn1").on({
    "mouseover":function() { //버튼에 마우스 올리면
      $(".txt1")
      .css({
        "background-color":"yellow"
      })
    },
    "mouseout":function() {
      $(".txt1")
      .css({
        "background":"none"
      })
    }
  })
  $(".btn2").hover(function() {
    $(".txt2")
    .css({
      "background-color":"aqua"
    });
  }, function(){
    $(".txt2")
    .css({
      "background":"none"
    })
  })
})