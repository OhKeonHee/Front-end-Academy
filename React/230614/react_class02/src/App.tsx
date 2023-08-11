import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyHeader from './Component/MyHeader';
import Counter from './Component/Counter';
import Header from './Component/Header';
import Body from './Component/Body';
import Footer from './Component/Footer';

//////////////////////////////////////////////////////////////////////////////////////
// ** 03 )
// const Header = () => {
//   return (
//     <header>
//       <h1>header</h1>
//     </header>
//   );
// };

// function App() {
//   // ** 01 )
//   // let name = "오건희";

//   // const style = {
//   //   App: {
//   //     backgroundColor: "pink"
//   //   },
//   //   h2: {
//   //     color: "violet"
//   //   },
//   //   bold_text: {
//   //     color: "green"
//   //   }
//   // };

//   // const number = 5;

//   return (
//       // 01 ) =================================== (스타일 정의 & 사용법)
//       // <div style={style.App}>
//       //   <MyHeader />
//       //   <h2 style={style.h2}>안녕🖐 나는 {name}😊</h2>
//       //   <b style={style.bold_text}>
//       //     {number}는 : {number % 2 === 0 ? "짝수" : "홀수"}
//       //   </b>
//       // </div>

//       // 02 ) =================================== (컴포넌트 활용)
//       // <div>
//       //   <MyHeader />
//       //   <Counter />
//       // </div>

//       // 03 ) =================================== (내부에서 컴포넌트를 정의해보자 / App.tsx에서도 컴포넌트 정의가 가능하다. / 외부도 가능)
//       // <React.Fragment> 인위적 부모만들기 방법 1
//       // <> 인위적 부모만들기 방법 2
//       // <div className='App'>
//       //   <Header/>
//       //   <Body />
//       //   <Footer />
//       // </div>
//       // </>
//       // </React.Fragment>
//   );
// }

//////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////  홍길동 
// function App() {
//   const name = "홍길동"
//   const location = "종로구"
//   return (
//     <div className='App'>
//       <Header />
//       <Body name = {name} location={location}/>
//       <Footer />
//     </div>
//   )
// }

// =================================== ()
// function App() {
//   const BodyProps = {
//     name: "홍길동",
//     location: "종로구",
//     favorList: ["파스타", "떡볶이", "빵"]
//   };

//   return (
//     <div className='App'>
//       <Header />
//       <Body {...BodyProps}/>
//     </div>
//   )
// }

// ======================================================================
// function ChildComp() {
//   return <div>child component</div>
// }

// function App() {
//   return (
//     <div className='App'>
//       <Header />
//       <Body>
//         <ChildComp />
//       </Body>
//     </div>
//   )
// }


function App() {
  return (
    <div className='App'>
      <Header />
      <Body/>
      <Footer />
    </div>
  )
}

export default App;
