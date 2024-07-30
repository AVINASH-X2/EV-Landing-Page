import { useState,useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Heading from './components/Heading'
import Boxes from './components/Boxes'
import Slide from './components/Slide'
import Colors from './components/Colors'
import Footer from './components/Footer'
import Nav2 from './components/Nav2'

function App() {


  return (
    <>
      {/* <Navbar /> */}

      <Nav2 />

      <Heading />
      <Boxes />
      <Slide />
      <Colors />
      <Footer />
    </>
  )
}

export default App
