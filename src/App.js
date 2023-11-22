import React from 'react'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import Skills from './Component/Skills'
import Projects from './Component/Projects'
import Contacts from './Component/Contacts'
import Footer from './Component/Footer'


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App