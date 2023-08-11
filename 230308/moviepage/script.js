$(document).ready(function() { /*기능 준비완료 */
  $('#main_nav a').click(function() { /*#main_nav > a를 클릭했을때 함수발동 */
    let target = $(this).attr('data-target'); /*변수이름=let, data-name의 속성을 가져와 target변수공간에 저장하고 그게 변수 let*/
    $(':not([data-name=' + target + '])').removeClass('active');
    /*data-name 값이 없다면 'active클래스를 삭제(실행시키지 마라)*/
    $('[data-name=' + target + ']').addClass('active');
    /*html 구문엔 active클래스 값이 없지만 JS에서 data-name이 있다면 active클래스를 생성하라 했기에 CSS에 작성가능 */ 
  });

  let currentPosition = 1; /*변수 지정 */
  $('#character > a:nth-child(1)').click(function() { /*left button*/
    currentPosition -= 1; /*현재 1인 currentposition에 1을 빼 0을 줌 */
    if (currentPosition < 1) { 
      /*만약 currentposition이 1보다 작다면 3으로 인식해라 */
      /*1,2,3을 무한반복한다  3-1, 2-1, 1-1=3 반복*/
      currentPosition = 3
    }
    $('article').removeClass('show');
    $('article:nth-of-type(' + currentPosition + ')').addClass('show')
    /*currentPosition의 값이 바뀔때마다 show에 넣어라 */
    /*넘겨서 바뀐 사진에게만 show클래스를 준다 */
  });

  $('#character > a:nth-child(2)').click(function() { /*right button */
    currentPosition += 1;
    if (currentPosition > 3) {
      currentPosition = 1;
    }
    $('article').removeClass('show');
    $('article:nth-of-type(' + currentPosition + ')').addClass('show')
  })
});