let initialState = {
  count: 0,
  id: '',
  password: '',
}

function reducer(state = initialState, action) {
  // if(action.type === "INCREMENT") {
  //   return {...state, count: state.count + 1};
  // }
  
  switch(action.type) {
    case "INCREMENT":
      return {...state, count: state.count + 1};
    case "LOGIN":
      return {
        ...state,
        id: action.payload.id,
        password: action.payload.password,
      };
    default:
      return {...state};
  }
}

export default reducer;