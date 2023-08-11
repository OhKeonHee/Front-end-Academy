let initialState = {
  count: 0,
  id: "아이디 초기값",
  password: "비밀번호 초기값",
}
// reducer는 2개의 인자값을 무조건 받아온다.
// 첫번째 인자값은 state변수값 = 초기값 (ex: store)
// 두번째 인자값은 실행시켜야 하는 실행지침서 (ex: action)
function reducer(state = initialState, action) {
  console.log('action ? :', action);
  // if(action.type === "INCRESEMENT") {
  //   return {...state, count: state.count + 1};
  // }
  switch (action.type) {
    case "INCREMENT":
      return {...state, count: state.count + action.payload.num};
    case "DECREMENT":
      return {...state, count: state.count - 1};
    case "LOGIN":
      return {...state, id: action.payload.id, password: action.payload.password};
    default:
      return {...state}
  }
}

export default reducer;
