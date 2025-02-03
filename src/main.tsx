import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'
import Navbar from './Navbar.tsx'

import Landing from './landing.tsx'
import About from './about.tsx'
import Projects from './projects.tsx'
import Services from './services.tsx'

import Foot from './footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Foot />
    </Router>
  </StrictMode>,
)