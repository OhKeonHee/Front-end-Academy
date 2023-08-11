function getProduct(searchQuery)  {
  return async (dispatch, getState) => {
    let url = `http://localhost:3004/products?q=${searchQuery}`;
    let response = await fetch(url); // response변수에 url값을 넣어라
    let data = await response.json(); // data에 response를 json형태로 저장
    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } })
    console.log(data)
  }
}

export const productAction = { getProduct };