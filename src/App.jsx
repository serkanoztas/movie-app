import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Details from './pages/Details';
import { Routes, Route, Router, useNavigate } from 'react-router-dom';

function App() {

  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <div className={darkMode ? 'app dark' : 'app light'}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  )
}

export default App
