import "./Body.css" // css import하는 법
import { useState } from "react";

interface text {
  name: string;
  location: string;
  favorList: string[];
}
//////////////////////////////////////////////////////////////////////////////////////

// const Body = () => {
// // ======================================
// //   const numA = 1;
// //   const numB = 2;

// //   const strA = "안녕";
// //   const strB = "난 오건희야";s

// //   const boolA = true;
// //   const boolB = false;

// //   const objA = {
// //     a: 1,
// //     b: 2
// //   }

// //   return (
// //     <header>
// //       <h1>body</h1>
// //       <h2>{numA + numB}</h2> {/* React는 더하는 동시에 출력(*랜더링)도 가능 */}

// //       <h2>{strA + strB}</h2> {/* 문자도 가능 */}

// // {/*   <h2>{boolA}</h2>
// //       <h2>{boolA}</h2>    boolean은 직접 랜더링이 불가!!*/}
// //       <h2>{String(boolA)}</h2> {/* 이렇게 쓰면 가능 */}

// // {/*   <h2>{objA}</h2>     객체도 이런식으로 못가져옴 */}
// //       <h2>a: {objA.a}</h2>
// //       <h2>b: {objA.b}</h2>  {/* 이렇게 쓰면 가능 */}

// //       {/* <>
// //         {num}는(은) {num % 2 === 0 ? "짝수" : "홀수"} 입니다.
// //       </> */}

// //     </header>
// //   );

//   // ====================================== (if문 써보기)
//   // const num = 200;
//   // if(num % 2 === 0) {
//   //   return <div>{num}은 짝수입니다.</div>
//   // } else {
//   //   return <div>{num}은 홀수입니다.</div>
//   // }

//   // ====================================== (style 정의없이 바로 주기)
//   // return (
//   //   <div style={{backgroundColor: "#f00", color: "#fff"}}>
//   //     <h1>body</h1>
//   //   </div>
//   // )

// };

////////////////////////////////////////////////////////////////////////// 홍길동

// ============================================ (App.tsx에 정의한 name을 여기서 부름)
// const Body = (props: text) => { // props: 객체 ( 위에 정의한 interface 객체명 사용 )
//   console.log(props)
//   return (
//     <div className="body">
//       {props.name}은 {props.location}에 거주합니다.
//     </div>
//   )
// }
// 👇 똑같음 객체배열을 할당하면 밑에 props.을 안붙혀도됨
// const Body = (props: text) => {
//   const {name, location} = props;
//   console.log(props)
//   return (
//     <div className="body">
//       {name}은 {location}에 거주합니다.
//     </div>
//   )
// }
//==========
// const Body = (props: text) => {
//   const {name, location, favorList} = props;
//   console.log(props)
//   return (
//     <div className="body">
//       {name}은 {location}에 거주합니다.
//       <br />
//       {favorList.length}개의 음식을 좋아합니다.
//     </div>
//   )
// }

// ===================
// interface Children {
//   children: any;
// }
// function Body({children}: Children) {
//   console.log(children);
//   return <div>{children}</div>
// }


//============================================================= (콜백함수 // onClick)
// function Body() {
//   function handleOnClick() {
//     alert ("버튼을 클릭하셨군요!");
//   }
//   return (
//     <div>
//       <button onClick={handleOnClick}>클릭하세요</button>
//     </div>
//   )
// }

// ===========
// function Body() {
//     function handleOnClick(e: React.MouseEvent<HTMLButtonElement>) { 
//       // ⛔onclick위에 마우스 올리면 타입이 뜸 거기서 Handler만 지워주면 됌 // 밑에 onClick={} 자체가 Handler 기에 Handler를 지움
//       console.log(e.currentTarget.name);
//     }
//     return (
//       <div>
//         <button name="A버튼" onClick={handleOnClick}>A 버튼</button>
//         <button name="B버튼" onClick={handleOnClick}>B 버튼</button>
//       </div>
//     )
//   }

//========================================= (숫자 증가)
// function Body() {
//   const [count, setCount] = useState(0);

//   const onIncrease = () => {
//     setCount(count + 1)
//   }

//   return (
//     <div>
//       <h2>{count}</h2>
//       <button onClick={onIncrease}>+</button>
//     </div>
//   )
// }

//========================================= (onChange)
// function Body() {
//   const [text, setText] = useState("");
//   const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setText(e.target.value);
//   }


//   return (
//     <div>
//       <input onChange={handleOnChange} />
//       <div>{text}</div>
//     </div>
//   )
// }
//=============== :::
// function Body() {
//     const [date, setDate] = useState("");
//     const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//       console.log("변경된 날짜 : ", e.target.value)
//     }
  
  
//     return (
//       <div>
//         <input type="date" value={date} onChange={handleOnChange}/>
//       </div>
//     )
//   }
//=============== :::
// function Body() {
//     const [option, setOption] = useState("");
//     const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//       console.log("변경된 값 : ", e.target.value);
//       setOption(e.target.value)
//     }
  
  
//     return (
//       <div>
//         <select value={option} onChange={handleOnChange}>
//           <option key={"1번"}>1번</option>
//           <option key={"2번"}>2번</option>
//           <option key={"3번"}>3번</option>
//         </select>
//       </div>
//     )
//   }

// =========================== Q. textarea를 활용해 이벤트 코드를 작성하자
// textarea안에 입력된 문자열을 콘솔창에 출력하기
// function Body() {
//   const [text, setText] = useState("");
//   const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     console.log(e.target.value);
//     setText(e.target.value);
//   }


//   return (
//     <div>
//       <textarea onChange={handleOnChange}></textarea>
//     </div>
//   )
// }

// ===================================
// function Body() {
//     const [name, setName] = useState("");
//     const [gender, setGender] = useState("");
//     const [birth, setBirth] = useState("");
//     const [bio, setBio] = useState("");

//     const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
//       setName(e.target.value)
//     }
//     const onChangeGender = (e: React.ChangeEvent<HTMLSelectElement>) => {
//       setGender(e.target.value)
//     }
//     const onChangeBirth = (e: React.ChangeEvent<HTMLInputElement>) => {
//       setBirth(e.target.value)
//     }
//     const onChangeBio = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//       setBio(e.target.value)
//     }
  
  
//     return (
//       <div>
//         <div>
//           <input type="text" value={name} placeholder="이름" onChange={onChangeName}/>
//         </div>
//         <div>
//           <select value={gender} onChange={onChangeGender}>
//             <option key={"--"}>--</option>
//             <option key={"남성"}>남성</option>
//             <option key={"여성"}>여성</option>
//           </select>
//         </div>
//         <div>
//           <input type="date" value={birth} onChange={onChangeBirth}/>
//         </div>
//         <div>
//           <textarea value={bio} onChange={onChangeBio}></textarea>
//         </div>
//       </div>
//     )
//   }
  

//==========================================
interface numTake {
  number: number;
}

function Viewer({number}: numTake) {
  return <div>{number % 2 === 0 ? <h3>짝수</h3> : <h3>홀수</h3>}</div>;
}

function Body() {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(number + 1);
  };
  const onDecrease = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <h2>{number}</h2>
      <Viewer number={number} />
      <div>
        <button onClick={onDecrease}>-</button>
        <button onClick={onIncrease}>+</button>
      </div>
    </div>
  );
}
// Body.defaultProps
export default Body