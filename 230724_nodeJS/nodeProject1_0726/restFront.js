// 클라이언트로부터 데이터를 받아서 저장 및 출력하는 역할!!

async function getUser() {
  try {
    const res = await axios.get('/users')
    const users = res.data;
    const list = document.querySelector('#list');
    list.innerHTML = '';
    Object.keys(users).map((key) => {
      const userDiv = document.createElement('div');
      const span = document.createElement('span');
      span.textContent = users[key];
      const edit = document.createElement('button')
      edit.textContent = '수정'
      edit.addEventListener('click', async () => {
        const name = prompt('바꿀 이름을 입력하세요.');
        if(!name) {
          return alert("수정할 이름을 반드시 입력해주세요.");
        }
        try {
          await axios.put('/user/' + key, { name });
          getUser();
          // 입력할 때 사용자가 요청할 때 get과 달리 사용자가 수정을 해야할 때 put을 사용, 경로도 달리 줘야함
        } catch(err) {
          console.error(err)
        }
      })
      const remove = document.createElement('button');
      remove.textContent = '삭제'
      remove.addEventListener('click', async () => {
        try {
          await axios.delete('/user/' + key);
          getUser();
        } catch(err) {
          console.error(err)
        }
      })
      userDiv.appendChild(span);
      userDiv.appendChild(edit);
      userDiv.appendChild(remove);
      list.appendChild(userDiv);
      console.log(res.data);
    })
  } catch(err) {
    console.error(err)
  }
}

// window.onload = getUser();
// // 화면 로딩 시 자동으로 getUser() 함수 호출

document.querySelector('#form').addEventListener('submit', async () => {
  async (e) => {
    e.preventDefault();
    const name = e.target.username.value;
    // username이라는 id값을 가지고 있는 값을 알아서 가져옴 (querySelector없이)
    if(!name) {
      return alert('이름을 입력해주세요');
    }
    try {
      await axios.post('/user', { name })
      // 값을 주기 위해 post 사용
      getUser();
    } catch(err) {
      console.error(err)
    }
  }
  e.target.username.value = '';
})