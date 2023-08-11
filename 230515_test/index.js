function changePhone1() {
  const phone1 = document.querySelector("#phone1").value;
  if(phone1.length === 3) {
    document.querySelector("#phone2").focus()
  }
}
function changePhone2() {
  const phone2 = document.querySelector("#phone2").value;
  if(phone2.length === 4) {
    document.querySelector("#phone3").focus()
  }
}
function changePhone3() {
  const phone1 = document.querySelector("#phone1").value;
  const phone2 = document.querySelector("#phone2").value;
  const phone3 = document.querySelector("#phone3").value;
  if(phone1.length === 3 && phone2.length === 4 && phone3.length === 4) {
    document.querySelector("#token_button").style = "background-color: #fff; color: #0068ff; cursor: pointer;"
    document.querySelector("#token_button").removeAttribute("disabled")
  }
}

function getToken() {
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  document.querySelector("#token").innerText = token;

  document.querySelector("#token_button").style = "background-color: #fff;"
  document.querySelector("#token_button").setAttribute("disabled", "true")

  document.querySelector("#token_timer_confirm_button").style = "background-color: #0068ff; color: #fff; cursor: pointer;"
  document.querySelector("#token_timer_confirm_button").removeAttribute("disabled");

  getTokenTimer();
}

let interval;
function getTokenTimer() {
  let timer = 179;

  interval = setInterval(() => {
    if(timer >= 0) {
      const minutes = String(Math.floor(timer / 60)).padStart(2, "0");
      const seconds = String(timer % 60).padStart(2, "0");
      timer -= 1;
  
      document.querySelector("#token_timer").innerText = minutes + ":" + seconds
    } else {
      document.querySelector("#token_timer").innerText = "000000";
      document.querySelector("#token_button").style = "";
      document.querySelector("#token_button").setAttribute("disabled", "true");
      document.querySelector("#token_timer").innerText = "03:00";
      document.querySelector("#token_timer_confirm_button").style = "";
      document.querySelector("#token_timer_confirm_button").setAttribute("disabled", "true");
    }
  }, 1000) 
}

function getTokenTimerConfirm() {
  clearInterval(interval)
  document.querySelector("#token_timer_confirm_button").style = "background-color: #fff;";
  document.querySelector("#token_timer_confirm_button").setAttribute("disabled", "true");
  document.querySelector("#token_timer_confirm_button").innerText = "인증 완료";
  alert("인증이 완료되었습니다.")

  document.querySelector("#signup_button").style = "background-color: #fff; color: #0068ff; border: 1px solid #0068ff; cursor: pointer;";
}

function signup() {
  const email = document.querySelector("#email").value;
  const writer = document.querySelector("#writer").value;
  const password1 = document.querySelector("#password1").value;
  const password2 = document.querySelector("#password2").value;
  const location = document.querySelector("#location").value;
  const genderWoman = document.querySelector("#gender_woman").checked;
  const genderMan = document.querySelector("#gender_man").checked;

  let isValid = true;
  if(email.includes("@") === false) {
    document.querySelector("#error_email").innerText = "이메일이 올바르지 않습니다.";
    isValid = false;
  } else {
    document.querySelector("#error_email").innerText = "";
  }
  if(writer === "") {
    document.querySelector("#error_writer").innerText = "이름이 올바르지 않습니다.";
    isValid = false;
  } else {
    document.querySelector("#error_writer").innerText = "";
  }
  if(password1 === "") {
    document.querySelector("#error_password1").innerText = "비밀번호를 입력해주세요.";
    isValid = false;
  } else {
    document.querySelector("#error_password1").innerText = "";
  }
  if(password2 === "") {
    document.querySelector("#error_password1").innerText = "비밀번호가 일치하지 않습니다.";
    document.querySelector("#error_password2").innerText = "비밀번호가 일치하지 않습니다.";
    isValid = false;
  }
  if(location !== "서울" && location !== "경기" && location !== "인천") {
    document.querySelector("#error_location").innerText = "지역을 선택해주세요.";
    isValid = false;
  } else {
    document.querySelector("#error_location").innerText = "";
  }
  if(genderWoman === false && genderMan === "false") {
    document.querySelector("#error_gender").innerText = "성별을 선택해주세요.";
    isValid = false;
  } else {
    document.querySelector("#error_gender").innerText = "";
  }
  
  if(isValid === true) {
    alert("회원가입을 축하합니다.")
  }
}