import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './style/index.css'
import About from './page/about'
import Home from './page/Home'
import Books from './page/Books'
import Contact from './page/Contact'
import SignUpPage from './page/SignUpPage'
import Loginpage from './page/Loginpage'
import AddtoCart from './page/AddtoCart'


// Example pages

function App() {
  return (
    <>
      <Navbar />

      <Routes>
         <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/AddtoCart" element={<AddtoCart/>}/>
          <Route path="/SignUppage" element={<SignUpPage/>}/>
          <Route path='/Loginpage' element={<Loginpage/>}/>
          <Route path="/Books" element={<Books />} />
          <Route path="/Contact" element={<Contact/>}/>
        
      </Routes>

      <Footer />
    </>
  )
}

export default App
