import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './Components/Navbar'
import Home from "./Pages/Home"
import Features from './Pages/Features'
import Pricing from './Pages/Pricing'
import About from './Pages/About'
import Contact from './Pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Features' element={<Features />} />
        <Route path='/Pricing' element={<Pricing />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes >
    </BrowserRouter >
  )
}