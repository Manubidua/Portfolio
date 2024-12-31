import React from 'react'
import Navbar from '../components/navbar'
import Heroimg from '../components/Heroimg'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
const home = () => {
  return (
    <div>
    <Navbar/>
    <Heroimg/>
    <Footer/>
    </div>
  )
}

export default home
