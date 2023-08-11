//......................01
// $(function() {
//   $(document).on("mousemove", function(e) {
//     $(".posX").text(e.pageX);
//     $(".posY").text(e.pageY);
//   })
// })

//......................02
// $(function() {
//   $(window).on("scroll", function() {
//     let sc_top = $(this).scrollTop();
//     let sc_left = $(this).scrollLeft();

//     $(".top").text(sc_top);
//     $(".left").text(sc_left);
//   })
// })

//......................03
// $(function() {
//   $("#user_id_1, #user_pw_1").on("focus",
//   function() {
//     $(this).css({"background-color":"pink"}); //input클릭하면 핑크색
//   });
//   $("#user_id_1, #user_pw_1").on("blur",
//   function() {
//     $(this).css({"background-color":"#fff"}); //다른거 클릭하면 흰색
//   });


//   $("#frm_2").on("focusin",
//   function() {
//     $(this).css({"background-color":"pink"}); //선택자가 이벤트작동하는 거보다 한단계위에 줌
//   });
//   $("#frm_2").on("focusout",
//   function() {
//     $(this).css({"background-color":"#fff"});
//   });
// })

//......................04
// $(function() {
//   $("#btn1")
//   .data({"text":"javascript"})
//   .on({
//     "mouseover":overFnc,
//     "mouseout":outFnc
//   });

//   $("#btn2")
//   .data({"text":"welcome!"})
//   .on({
//     "mouseover focus":overFnc,
//     "mouseout blur":outFnc
//   })

//   function overFnc() {
//     $(".txt").text($(this).data("text"));
//   }
//   function outFnc() {
//     $(".txt").text("");
//   }
// })

//......................05
// $(function() {
//   $(".btn_1").on("mouseover", function() {
//     alert("hello");
//   });
//   $(document).on("mouseover", "btn_2", function() { //버튼2는 html에서 준게 아닌 js로 추가한거라 함수도 라이브형식으로 줘야댐
//     alert("welcome!"); 
//   });

//   let btn_2 = $("<p><button class=\"btn_2\">버튼2</button></p>");
//   $("#wrap").append(btn_2);

//   $(".del_1").on("click", function() {
//     $(".btn_1").off("mouseover");
//   });

//   $(".del_2").on("click", function() {
//     $(".btn_1").off("mouseover", ".btn_2");
//   });
// })

//......................06 (font-size controll)
// $(function() {
//   let baseFontSize = 14;
//   $(".zoomBtnZone button").on("click", zoomInOut);
//   function zoomInOut() {
//     if($(this).hasClass("zoomOutBtn")) {
//       if(baseFontSize <= 8) return false;
//       baseFontSize--;
//     } else if($(this).hasClass("zoomInBtn")) {
//       if(baseFontSize >= 20) return false;
//       baseFontSize++;
//     } else {
//       baseFontSize = 14;
//     }
//     $(".fontSize").text(baseFontSize + "px");
//     $("body")
//     .css({fontSize:baseFontSize + "px"});
//   }
// })

// ......................07 mouseover, leave
// $(function() {
//   let beforeMenu = null;

//   $(".gnb > button > a").on("mouseover", function() {
//     if(beforeMenu) {
//       beforeMenu.css({background:"none"})}
//       $(this).css({"background-color":"#0ff"})
//     beforeMenu = $(this);
//   });

//   $(".gnb").on("mouseleave", function() {
//     if(beforeMenu) {beforeMenu.css({background:"none"})}
//   })
// })

// ......................08
// $(function() {
//   $(".btn2").hide();

//   $(".btn1").on("click", function() {
//     $(".box").slideUp(1000, "linear", function() {
//       $(".btn1").hide();
//       $(".btn2").show();
//     });
//   });

//   $(".btn2").on("click", function() {
//     $(".box").slideDown(1000, "linear", function() {
//       $(".btn2").hide();
//       $(".btn1").show();
//     });
//   });

//   $(".btn3").on("click", function() {
//     $(".box").slideToggle(1000,"linear") //slidedown/up 둘다
//   });

//   $(".btn4").on("click", function() {
//     $(".box").fadeTo("fast", 0.3) //투명도 0.3
//   });

//   $(".btn5").on("click", function() {
//     $(".box").fadeTo("fast", 1)
//   });
// })


// ---------------test01
// $(function() {
//     $(".btn_1").on("click", function(e) {
//       $(".p1").css({"background-color":"yellow"});
//       e.preventDefault();
//     });
//     $(".btn_2").on("click",function(){
//       $(".p2").css({"background-color":"aqua"});
//     })
//     $(".btn_3").on("dblclick", function() {
//       $(".p3").css({"background-color":"green"})
//     })
//   })

// ---------------test02
// $(function() {
//     let baseFontSize = 14;
//     $("button").on("click", zoomInOut);
//     function zoomInOut() {
//       if($(this).hasClass("zoomout")) {
//         if(baseFontSize <= 8) return false;
//         baseFontSize--;
//       } else if($(this).hasClass("zoomin")) {
//         if(baseFontSize >= 20) return false;
//         baseFontSize++;
//       } else if ($(this).hasClass("max")){
//         baseFontSize = 20;
//       } else if ($(this).hasClass("min")){
//         baseFontSize = 8;
//       }else {
//         baseFontSize = 14;
//       }
      
//       $(".fontSize").text(baseFontSize + "px");
//       $("body")
//       .css({fontSize:baseFontSize + "px"});
//     }
//   })

// ......................09
// $(function() {
//   $(".btn1").on("click", function() {
//     $(".txt1").animate({
//       marginLeft:"500px",
//       fontSize:"30px"
//     }, 1000, "linear", function() {
//       alert("모션완료!")
//     })
//   })
//   $(".btn2").on("click", function() {
//     $(".txt2").animate({
//       marginLeft:"+=50px",
//     }, "linear")
//   })
// })

// ......................10
// $(function () {
//   $(".btn1").on("click", moveElement);
//   function moveElement() {
//     $(".txt3")
//     .animate({marginLeft:"+=50px"}, 800);

//     $(".txt4")
//     .animate({marginLeft:"+=50px"}, 800);
//     $(".txt4").stop();

//     $(".txt5")
//     .animate({marginLeft:"+=50px"}, 800);
//     $(".txt5").stop(true, true);
//   }
// })

// ......................11
// $(function() {
//   $(".txt1")
//   .animate({marginLeft:"200px"}, 1000)
//   .animate({marginTop:"200px"}, 1000)
//   .queue(function() {
//     $(this).css({background:"red"}); //queue는 자기까지하고 끝내버림 /다음함수 실행안함
//     $(this).dequeue(); //dequeue: queue가 적용되도 queue를 유지한 상태로 이어감
//   })
//   .animate({marginLeft:"0"}, 1000)
//   .animate({marginTop:"0"}, 1000)
// })

// ......................12
// $(function() {
//   let txt1 = $(".txt1");
//   let count = 1;

//   $(".btnWrap button").on("click", function() {
//     if(!txt1.is(":animated")) { //is(): true/false 반환함수 //!txt1 : 부정( ! ) 애니메이션 작용하지 않다면
//       if($(this).hasClass("backBtn")) {
//         count--;
//         if(count < 1) {
//           count = 1;
//           return false;
//         }
//         txt1.animate({marginLeft:"-=10%"}, 300);
//       } else {
//         count++;
//         if(count > 10) {
//           count = 10;
//           return false;
//         }
//         txt1.animate({marginLeft:"+=10%"}, 300);
//       }
//     }
//   })
// })

// ......................13
// $(function() {
//   $("#btn").on("click", function() {
//     $("h1").fadeOut(1000)
//   });
// })

// ......................14
// $(function() {
//   $("#btn").on("click", function() {
//     $("#ctx").animate({
//       marginLeft:"+=50px"
//     }, 500);
//   })
// })