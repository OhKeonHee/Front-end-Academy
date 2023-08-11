function order(coffee, callback) {
  console.log(`${coffee} 주문접수`);
  setTimeout(() => {
    callback(coffee)
  }, 3000)
}

function display(result) {
  console.log(`${result} 준비완료`)
}

order("타로밀크티", display);