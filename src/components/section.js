import React from 'react'
import logo from '../images/grid.png'
import './section.css'



function section() {
  return (
    <div className='Hero'>
      <img src={logo} alt='' ></img>
      <h1 className='hero--header'>Online Experiences</h1>
      <p>Join unique interactive activities
        led by one-of-a kind hosts-all 
        without leaving home
      </p>
    </div>
  )
}

export default section
