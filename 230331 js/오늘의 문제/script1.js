// 문제1. 사용자로부터 전화번호를 받아서 뒷자리 4자리는 ****로 화면에 표기되도록 해주세용
let phoneNum = prompt("전화번호 입력");
let result = phoneNum.substring(0, phoneNum.length-4);

document.write(result, "****", "<br />");

// 문제 2. bnt_out.jpg 라는 문장을 자바스크립트를 활용해서 btn_over.jpg 라는 문장으로 바꿔보세요!
let imgSrc = "bnt_out.jpg";
let result_1 = imgSrc.replace("out.jpg", "over.jpg");
document.write(result_1, "<br />");

// 문제 3. 오늘 점심메뉴를 랜덤으로 출력될 수 있도록 프로그램을 개발해주세요!
let menu = ["김치찌개", "칼국수", "햄버거", "김밥", "파스타","제육"];
let menuNum = Math.floor(Math.random() * menu.length);
let result_2 = menu[menuNum];
document.write(result_2);