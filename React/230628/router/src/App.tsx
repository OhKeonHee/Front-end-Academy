import React from 'react';
import { useState } from 'react';
import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Product from './Component/Product';
import LoginPage from './Component/LoginPage';
import UserPage from './Component/UserPage';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProductDetail from './Component/ProductDetail';

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  const PrivateRoute = () => {
    return authenticate === true ? <UserPage/> : <Navigate to="/login" />;
  }
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/product/:id/:num' element={<ProductDetail/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/user' element={<PrivateRoute/>}/>
      </Routes>
    </div>
  );
}

export default App;
