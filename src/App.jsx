import React from 'react';
import Navbar from './Navbar'
import Home from './pages/Home.jsx'
import Skills from './pages/Skills.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import {Routes, Route} from 'react-router-dom'
import Footer from './Footer.jsx';



const App = () => {
  return (
    <>
    <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<h1 className="text-center mt-20 text-3xl">404 Page Not Found</h1>} />
        </Routes>
     <Footer/>
    </>
  )
}

export default App