import './App.css';
import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Login/Login';
import MainPage from './Main/MainPage';
import Home from './Pages/Home';
import About from './Pages/About';
import Jobs from './Pages/Jobs';
import Contact from './Pages/Contact';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function handleLogin() {
    setIsLoggedIn(true);
  }

  return (
    <Router>
      {isLoggedIn && <MainPage />}
      <Routes>
        <Route path='/' element={<LoginPage handle={handleLogin} />}></Route>
        {isLoggedIn &&
          <>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/jobs' element={<Jobs />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </>
        }
      </Routes>
    </Router>
  );
}


export default App;