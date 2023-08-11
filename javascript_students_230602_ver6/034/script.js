document.querySelector("#submitButton").addEventListener("click", (e) => {
  e.preventDefault();
  const phoneNumber = document.querySelector("#phoneNumberText").value;
  // console.log(phoneNumber);
  const trimmedPhoneNumber = phoneNumber.replace(/-/g, "");
  alert(`전화번호는 ${trimmedPhoneNumber} 입니다.`);
})
