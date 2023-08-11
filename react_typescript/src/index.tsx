import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './Router';

import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';

// =========== 테마 설정 (1)
// const darkTheme = {
//   textColor: "whitesmoke",
//   backgroundColor: "#111",
// }
// const lightTheme = {
//   textColor: "#111",
//   backgroundColor: "whitesmoke",
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // =========== 테마 설정 (1)
  // <React.StrictMode>
  //   <ThemeProvider theme={lightTheme}>
  //     <App />
  //   </ThemeProvider>
  // </React.StrictMode>

  // =========== 테마 설정 (2) <styled.d.ts & theme.tsx>
  // <React.StrictMode>
  //   <ThemeProvider theme={lightTheme}>
  //     <App />
  //   </ThemeProvider>
  // </React.StrictMode>


  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

