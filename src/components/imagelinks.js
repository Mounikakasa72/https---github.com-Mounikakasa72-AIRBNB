import React from 'react'
import {links} from './links.js'
import './link.css'
// import { Link } from 'react-router-dom';



function Imagelinks() {
  const handleLinkClick = (path) => {
    window.location.href = path;
  };
 
  return (
    <div className='link-content'>
       {links.map((item, i) => (
        <div
          key={i}
          className='links-box'
          onClick={() => handleLinkClick(item.path)} >
          {/* <Link to={item.path}> */}
          <img src={item.imgSrc} className="links-img" alt =""/>
          {/* </Link> */}
          <p className='links-label'> 
            {item.label}
          </p>
          <br></br>
        </div>
      ))}
    </div>
  )
}

export default Imagelinks
