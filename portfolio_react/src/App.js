import './css/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Navigation from './Components/Navigation';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import Setting from './pages/Setting';
import { useState } from 'react';

function App() {
  const [isDark, setDark] = useState(true);
  const handleThemeChange = (isDark) => {
    setDark(isDark)
  }
  return (
    <div className={`App ${isDark ? "" : "bright"}`}>
      <Navigation />
      <div className='body'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/setting' element={<Setting isDark={isDark} handleThemeChange={handleThemeChange} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
