// import React from 'react';
// import './App.css';
// import { styled } from 'styled-components';

// // ===== 1 )
// // const Button = styled.button`
// //   color: ${(props: any) => (props.dark ? "white" : "dark")};
// //   background: ${(props: any) => (props.dark ? "black" : "white")}
// //   border: 1px solid black;
// // `;

// // ===== 2 )
// // const Button = styled.button`
// //   color: gray;
// //   border: 2px solid palevioletred;
// // `
// // const RoundedButton = styled(Button)`
// //   border-radius: 16px;
// // `

// const Wrapper = styled.div`
//   padding: 1rem;
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   justify-content: flex-start;
//   background-color: lightgrey;
// `;

// const Block = styled.div`
//   border: 1px solid black;
//   border-radius: 1rem;
//   color: white;
  
//   font-weight: bold;
//   text-align: center;
//   padding: ${(props: any) => props.padding};
//   background-color: ${(props: any) => props.backgroundColor};
// `;

// const blockItems = [
//   {
//     label: `1`,
//     padding: `1rem`,
//     backgroundColor: `red`
//   },
//   {
//     label: `2`,
//     padding: `3rem`,
//     backgroundColor: `green`
//   },
//   {
//     label: `3`,
//     padding: `2rem`,
//     backgroundColor: `blue`
//   }
// ]

// function App(props: any) {
//   // ===== 2 )
//   // return (
//   //   <div className="App">
//   //     <Button>Normal</Button>
//   //     <RoundedButton>Rounded</RoundedButton>
//   //   </div>
//   // );

//   return (
//     <Wrapper>
//       {blockItems.map((blockItem) => {
//         return (
//           <Block padding={blockItem.padding} backgroundColor={blockItem.backgroundColor}>
//             {blockItem.label}
//           </Block>
//         )
//       })}
//     </Wrapper>
//   )
// }

// export default App;


// * 2 ) (Accommodate.tsx)
// import React from 'react'
// import { useState } from 'react'
// import Accommodate from "./Component/Accommodate"

// const App = (initialValue) => {
//   const [count, setCount] = useState(initialValue);
//   const IncreaseCount = () => setCount((count) => count + 1);
//   const DecreaseCount = () => setCount((count) => Math.max(count - 1, 0));
//   return [count, IncreaseCount, DecreaseCount];
// }

// export default App


// * 3 ) (Greeting.tsx)
// import React from 'react'
// import LoginControl from './Component/LoginControl'

// const App = () => {
//   return (
//     <div>
//       <LoginControl/>
//     </div>
//   )
// }

// export default App


// * 4-1 ) submit input태그
// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   const [value, setValue] = useState("");
//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     alert(`입력한 이름: ` + value)
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         이름 :
//         <input type="text" onChange={handleChange} value={value} />
//       </label>
//       <button type='submit'>제출</button>
//     </form>
//   )
// }

// export default App

// * 4-2 ) submit textarea 태그
// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   const [value, setValue] = useState(`요청사항을 입력하세요!`);
//   const handleChange = (e) => {
//     setValue(e.target.value);
//   }
//   const handelSubmit = () => {
//     alert(`입력한 요청사항 : ` + value)
//   }

//   return (
//     <form onSubmit={handelSubmit}>
//       <label>
//         요청사항 : 
//         <textarea value={value} onChange={handleChange}/>
//       </label>
//       <button>제출</button>
//     </form>
//   )
// }

// export default App

// * 4-3 ) submit select 태그
// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   const [value, setValue] = useState(`grape`); 
//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };
//   const handelSubmit = () => {
//     alert(`선택한 과일: ` + value)
//   }

//   return (
    // <form onSubmit={handelSubmit}>
      // <label>
      //   <select value={value} onChange={handleChange}>
      //     <option value="apple">사과</option>
      //     <option value="banana">바나나</option>
      //     <option value="grape">포도</option>
      //     <option value="watermelon">수박</option>
      //   </select>
      // </label>
    //   <button>제출</button>
    // </form>
//   )
// }

// export default App

// * 4-4 ) submit 중간 난이도
// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   const [haveBreakfast, setHaveBreakfast] = useState(true);
//   const [numberOfGuest, setNumberOfGuest] = useState(2);

//   const handelSubmit = () => {
//     alert(`아침식사 여부: ${haveBreakfast}, 방문객 수: ${numberOfGuest}`);
//   }

//   return (
    // <form onSubmit={handelSubmit}>
    //   <label>
    //     <input type="checkbox" checked={haveBreakfast} onChange={(e) => {setHaveBreakfast(e.target.checked)}}/>
    //   </label>
    //   <br />
    //   <label>
    //     방문객 수 : 
    //     <input type="number" value={numberOfGuest} onChange={(e: any) => {setNumberOfGuest(e.target.value)}}/>
    //   </label>
    //   <button type='submit'>제출</button>
    // </form>
//   )
// }

// export default App


// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   const [name, setName] = useState(``); 
//   const [gender, setGender] = useState(`남자`); 
//   const handleChangeName = (e) => {
//     setName(e.target.value);
//   };
//   const handleChangeGender = (e) => {
//     setGender(e.target.value);
//   };
//   const handelSubmit = () => {
//     alert(`${gender} ${name} 님 힘내세요.`)
//   }

//   return (
//     <form onSubmit={handelSubmit}>
//       <label>
//         이름 : 
//         <input type="text" value={name} onChange={handleChangeName}/>
//       </label>
//       <br />
//       <label>
//         <select onChange={handleChangeGender}>
//           <option value="남자">남자</option>
//           <option value="여자">여자</option>
//         </select>
//       </label>
//       <button type='submit'>제출</button>
//     </form>
//   )
// }

// export default App



import React from 'react'

const App = () => {
  return (
    <div>
      
    </div>
  )
}

export default App
