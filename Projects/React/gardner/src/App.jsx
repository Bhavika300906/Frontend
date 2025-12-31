import React from 'react'
import Home from './Website/Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './Website/Pages/About.jsx'
import Services from './Website/Pages/Services.jsx'
import Project from './Website/Pages/Project.jsx'
import Features from './Website/Pages/Features.jsx'
import Quote from './Website/Pages/Quote.jsx'
import Team from './Website/Pages/Team.jsx'
import Testimonial from './Website/Pages/Testimonial.jsx'
import Not404 from './Website/Pages/Not404.jsx'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/project" element={<Project />} />
          <Route path="/features" element={<Features />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/*" element={<Not404 />} />

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
