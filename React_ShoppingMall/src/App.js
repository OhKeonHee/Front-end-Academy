import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import ProductAll from './Component/ProductAll';
import ProductDetail from './Component/ProductDetail';
import Login from './Component/Login';
import Navbar from './Component/Navbar';
import PrivateRouter from './Component/PrivateRouter'
import Home from './Component/Home';
import Footer from './Component/Footer';
import Collaboration from './Component/Collaboration';

function App() {
  const [authenticate, setAuthenticate] = useState(false); // true값이면 로그인, false면 로그인 X

  useEffect(() => {
    console.log('login', authenticate)
  }, [authenticate])
  return (
    <div style={{width: '100vw', overflowX: 'hidden'}}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate} />} />
        <Route path='/collaboration' element={<PrivateRouter authenticate={authenticate} />} />
        <Route path='/collaboration/:id' element={<ProductDetail />} />
        <Route path='/collaboration' element={<Collaboration />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;