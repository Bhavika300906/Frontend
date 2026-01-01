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
import Contact from './Website/Pages/Contact.jsx'
import Not404 from './Website/Pages/Not404.jsx'
import Adm_Dashboard from './Admin/Admin_Pages/Adm_Dashboard.jsx'
import Adm_Serv_mng from './Admin/Admin_Pages/Adm_Serv_mng.jsx'
import Adm_Serv_add from './Admin/Admin_Pages/Adm_Serv_add.jsx'
import Team_add from './Admin/Admin_Pages/Team_add.jsx'
import Team_Mng from './Admin/Admin_Pages/Team_Mng.jsx'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* Website Routes */}
          <Route path="/" element={<Home />} />

          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/project" element={<Project />} />
          <Route path="/features" element={<Features />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/*" element={<Not404 />} />

          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<Adm_Dashboard />} />
          <Route path="/admin/services/mng" element={<Adm_Serv_mng />} />
          <Route path="/admin/services/add" element={<Adm_Serv_add />} />
          <Route path="/admin/team/mng" element={<Team_Mng />} />
          <Route path="/admin/team/add" element={<Team_add />} />


        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
