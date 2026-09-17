import { useState } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Header from './User/Comman/Header'
import Home from './User/Pages/Home'
import About from './User/Pages/About'



function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </BrowserRouter>

  )
}

export default App
