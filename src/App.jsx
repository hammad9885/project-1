import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/Team'
import Contact from './pages/Contact'
import Faq from './pages/Faq'
function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="/about" element={<About/>}/>
        <Route  path="/team" element={<Team/>}/>
        <Route  path="/contact" element={<Contact/>}/>
        <Route  path="/faq" element={<Faq/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;
