// const accordionBtn = document.querySelector(".accordionTitle");
// const accIcon = document.querySelector(".accIcon");
// const allTexts = document.querySelectorAll(".text");

// accordionBtn.forEach((el) => {
//   el.addEventListener('click', toggleAccordion)
// });

// function toggleAccordion(el) {
//   let targetAccIcon = el.currentTarget.children[0];
//   let targetText = el.currentTarget.nextElementSibling.classList;

//   if(targetText.contains('show')) {
//     targetText.remove('show');
//     targetAccIcon.classList.remove('anime');
//   }else {
//     accordionBtn.forEach((el) => {
//       allTexts.forEach((el) => {
//         el.classList.remove('show');
//       })
//       accIcon.forEach((el) => {
//         el.classList.remove('anime');
//       })
//     })
//     targetText.add('show');
//     targetAccIcon.classList.add('anime');
//   }
// }