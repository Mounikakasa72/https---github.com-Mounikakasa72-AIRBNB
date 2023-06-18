import React from 'react'
import logo from "../images/star.png"
import './card.css'

function card(props) {
  let badgeText
  if(props.openSpots === 0)
  {
    badgeText ="SOLD OUT"
  }
  else if(props.location === "Online")
  {
    badgeText ="Online"
  }





  return (
    <>
    <div className='whole--card'>
   {badgeText && <div className='card--badge'>{badgeText}</div>}
        <img className ='card--img' src={`../images1/${props.coverImg}`} alt="ntg"></img>
        <div className='card--stats'>
            <img src={logo} alt = "" width= '30px'>

            </img>
            <span>{props.stats.ratings}</span>
            <span>({props.stats.reviewCount}) .</span>
            <span> {props.location}</span>
        </div>
        <p>{props.description}</p>
        <p><b>{props.price}</b>/person</p>
      
    </div>
    </>
  )
}

export default card
