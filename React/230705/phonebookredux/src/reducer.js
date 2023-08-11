let initialState = {
  contact: [],
  keyword: '',
}
// contact와 keyword는 서로 다른 input박스에서 받아온 값이기 때문에 구분해야 함

const reducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch(type) {
    case "ADD_CONTACT":
        // ...state,
        // contact: [
        //   ...state.contact, { name: payload.name, phoneNumber: payload.phoneNumber },
        // ]

        state.contact.push({
          name: payload.name,
          phoneNumber: payload.phoneNumber,
        });
        break;
    case "SEARCH_BY_USERNAME":
      state.keyword = payload.keyword;
      break;
    // default:
    //   return {...state};
  }
  return {...state};
};

export default reducer;