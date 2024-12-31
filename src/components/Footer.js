import React from 'react'
import "./footerStyle.css"
import { FaFacebook, FaHome, FaInstagram, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
            <div className="location">
           <FaHome size={20}
            style={{color: "#fff",marginRight:"2rem"}}/>
            <div>
                <p>Hazri ward hatta </p>
                <p>Madhya Pradesh</p>
            </div>
            </div>
            <div className='phone'>
         <h4>  <FaPhone size={20}
            style={{color: "#fff",marginRight:"2rem"}}/>
             8827010241
             </h4> 
            </div>
            <div className='email'>
         <h4>  <FaMailBulk size={20}
            style={{color: "#fff",marginRight:"2rem"}}/>
             Manoramabiduaa1999@gmail.com
             </h4> 
            </div>
        </div>

        <div className='right'>
            <h4>About Myself</h4>
            <p>I am recent graduate from NIT Raipur</p>
            <div className='social'>
            <FaFacebook size={20}
            style={{color: "#fff",marginRight:"1rem"}}/>
             <FaInstagram size={20}
            style={{color: "#fff",marginRight:"1rem"}}/>
             <FaTwitter size={20}
            style={{color: "#fff",marginRight:"1rem"}}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
