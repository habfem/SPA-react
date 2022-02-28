import React from 'react';
import Navbar from './Navbar';

function Header() {
  return (
     <div id='main'> 
      <Navbar />
      
       <div className='name'>
        <h1>It's a <span>ReactJS</span> App</h1>
        <p className='details'>Most Task Manager apps are designed for teams. This is designed
          freelancers who want a slim way to plan their tasks.</p>
          <div className='header-btns'>
            <a href='#' className='cv-btn'>Hire Me</a>
            <a href='#' className='cv-btn1'>Download App</a>
          </div>
      </div>
      <div className='arrow'></div> 
     </div> 
  )
}

export default Header;