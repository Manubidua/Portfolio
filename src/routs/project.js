import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import Jeroimg2 from '../components/Jeroimg2'
import PricingCard from '../components/PricingCard'

function project() {
  return (
    <div>
    <Navbar/>
    <Jeroimg2 heading="Projects" text="some of my most recent work" />
    <PricingCard/>
    <Footer/>
   
    </div>
  )
}  

export default project
