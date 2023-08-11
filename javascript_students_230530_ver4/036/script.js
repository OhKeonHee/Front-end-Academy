const familyNameText = document.querySelector("#familyNameText");
const firstNameText = document.querySelector("#firstNameText");
const fullName = document.querySelector("#fullName");

familyNameText.addEventListener("keyup", onkeyUp);
firstNameText.addEventListener("keyup", onkeyUp);

function onkeyUp() {
  const familyName = familyNameText.value;
  const firstName = firstNameText.value;

  fullName.innerHTML = `${familyName}${firstName}`
}