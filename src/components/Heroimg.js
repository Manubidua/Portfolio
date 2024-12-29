import "./HeroimgStyle.css";
import {Link} from "react-router-dom"
import React from 'react'
import Bgimg from "../Assets/bg3.jpg"
const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
          <img className="into-img" src=
          {Bgimg} alt="background img"/>
      </div>
      <div className="content">
        <p>Hii, I'm Manorma</p>
        <h1>Looking for a Job</h1>
        <div>
          <Link to="/project" className="btn"> Projects</Link>
          <Link to="/contact" className="btn btn-light"> Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Heroimg
