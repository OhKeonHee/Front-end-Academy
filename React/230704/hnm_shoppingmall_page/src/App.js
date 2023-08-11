import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import ProductAll from './Component/ProductAll';
import ProductDetail from './Component/ProductDetail';
import Login from './Component/Login';
import Navbar from './Component/Navbar';
import PrivateRouter from './Component/PrivateRouter'

function App() {
  const [authenticate, setAuthenticate] = useState(false); // true값이면 로그인, false면 로그인 X

  useEffect(() => {
    console.log('login', authenticate)
  }, [authenticate])
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductAll />} />
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate} />} />
        <Route path='/product/:id' element={<PrivateRouter authenticate={authenticate} />} />
      </Routes>
    </div>
  );
}

export default App;