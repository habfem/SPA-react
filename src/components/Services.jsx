import React from 'react'
import Box from './Box'
import img1 from '../images/s1.png'
import img2 from '../images/s2.png'

function Services() {
  return (
    <div id='services'>
        <div className='s-heading'>
            <h1>Sevices</h1>
            <p>Here are some services the App offers</p>
        </div>
        <div className='b-container'>
            <Box image={img1} alte='image1' btn='PYTHON' />
            <Box image={img2} alte='image1' btn='REACT' />
        </div>
    </div>
  )
}

export default Services

