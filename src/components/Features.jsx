import React from 'react'
import featureimage from '../images/Frame.png'

function Features() {
  return (
    <div id='features'>
        <div className='features-model'>
            <img src= {featureimage} alt='features-image'/>
        </div>
        <div className='features-text'>
            <h2>Features</h2>
            <h3>This Application <span>Software </span>is Art</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Iusto corporis officiis ducimus culpa voluptates eligendi 
                non commodi earum. Ipsam, eius.</p>
            <button>View More Features</button>
        </div>
    </div>
  )
}

export default Features