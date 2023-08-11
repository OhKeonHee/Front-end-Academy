import React from 'react'
import { createBrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Root from './Root';
import NotFound from './NotFound';
import ErrorComp from './ErrorComp';
import User from './User';
import Followers from './Followers';

const router = createBrowserRouter([
  {
    path: '/', 
    element: <Root />, 
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComp />
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "users/:userId",
        element: <User />,
        children: [
          {
            path: 'followers',
            element: <Followers />
          }
        ]
      },
    ],
    errorElement: <NotFound />
  }]);

export default router;
