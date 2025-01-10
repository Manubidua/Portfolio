import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import Jeroimg2 from '../components/Jeroimg2'

function about() {
  return (
    <div>
      <Navbar/>
      <Jeroimg2 heading="ABOUT" text="i am a frontend developer" />
      <Footer/>
     
    </div>
  )
}

export default about
