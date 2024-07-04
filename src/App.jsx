import { useState,useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Heading from './components/Heading'
import Boxes from './components/Boxes'
import Slide from './components/Slide'
import Colors from './components/Colors'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <Navbar />
      <Heading />
      <Boxes />
      <Slide />
      <Colors />
      <Footer />
    </>
  )
}

export default App
