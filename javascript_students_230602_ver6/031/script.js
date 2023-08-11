const searchWordText = document.querySelector("#search-word-input");
const prefectureList = document.querySelectorAll("#prefecture-list button");

searchWordText.addEventListener('keyup', () => {
  const searchWord = searchWordText.value;
  console.log(searchWord);
  prefectureList.forEach((el) => {
    if(searchWord === "") {
      el.classList.remove("hide");
      return;
    }
    const prefectureName = el.dataset.name;
    // console.log(prefectureName);
    const phonetic = el.dataset.phonetic;
    // console.log(phonetic);

    if(
      searchWord.charAt(0) === prefectureName.charAt(0) ||
      searchWord.charAt(0) === phonetic.charAt(0)
    ) {
      el.classList.remove("hide");
    } else {
      el.classList.add("hide");
    }
  });
});