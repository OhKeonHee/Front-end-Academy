// ====================== useRef 사용
// import { useState, useRef } from "react";

// function Body() {
//   const [text, setText] = useState("");
//   const textRef = useRef<any>(null); // 인자값으로 전달받은 값을 초기값으로 하는 하나의 객체를 생성

//   const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setText(e.target.value);
//   };

//   // const handleOnClick = () => {
//   //   alert(text);
//   //   textRef.current.value = ""; // 작성완료 버튼을 누르면 alert 후 여기서 정의한 문자로 input텍스트가 바뀜
//   // };

//   const handleOnClick = () => {
//     if (text.length < 5) {
//       textRef.current.focus();
//     } else {
//       alert(text);
//       setText("");
//     }
//   };

//   return (
//     <div>
//       <input ref={textRef} type="text" value={text} onChange={handleOnChange}/>
//       <button onClick={handleOnClick}>작성 완료</button>
//     </div>
//   )
// }


// Body.defaultProps
export default Body