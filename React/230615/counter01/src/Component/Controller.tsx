interface numTwo {
  handleSetCount: any; // 사용자가 어떤 버튼을 누를지 모르기 때문에 any
}

const Controller = ({ handleSetCount }: numTwo) => {
  return (
    <div>
      <button onClick={() => handleSetCount(-1)}>-1</button>
      <button onClick={() => handleSetCount(-10)}>-10</button>
      <button onClick={() => handleSetCount(-100)}>-100</button>
      <button onClick={() => handleSetCount(100)}>+100</button>
      <button onClick={() => handleSetCount(10)}>+10</button>
      <button onClick={() => handleSetCount(1)}>+1</button>
    </div>
  );
};
export default Controller;