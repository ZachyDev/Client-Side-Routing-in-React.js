import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function Navbar() {
  return (
    <>
    <Router>
        <Link to='/'>Home</Link>
        <Link to='about'>About</Link>
        <Link to='contact'>Contact</Link>
        <Routes>
            <Route path='/' element={<Home />}>Home</Route>
            <Route path='/about' element={<About />}>About</Route>
            <Route path='/contact' element={<Contact />}>Contact</Route>
        </Routes>
    </Router>
    </>
  )
}

export default Navbar