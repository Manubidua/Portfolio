
import "./JeroimgStyle.css"

import React, { Component } from 'react'

 class Jeroimg2 extends Component {
  render() {
    return (
      <div className='hero-img'>
      <div className='heading'>
      <h1> {this.props.heading}</h1>
      <p>{this.props.text}</p>
      </div>
      
    </div>
    )
  }
}
export default Jeroimg2;

