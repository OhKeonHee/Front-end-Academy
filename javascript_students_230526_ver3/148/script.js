const btn = document.querySelector('#create-modal-button');
btn.addEventListener('click', displayModalWindow);

function displayModalWindow() {
  const modalElement = document.createElement('div');
  modalElement.classList.add('modal');

  const innerElement = document.createElement('div');
  innerElement.classList.add('inner');
  innerElement.innerHTML = `
    <p>모달 윈도우 내용 </p>
    <div class="character"></div>
  `;

  modalElement.appendChild(innerElement);
  document.body.appendChild(modalElement);

  innerElement.addEventListener('click', () => {
    closeModalWindow(modalElement);
  });
}

function closeModalWindow(modalElement) {
  document.body.removeChild(modalElement);
}