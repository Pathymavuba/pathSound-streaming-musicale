import React from 'react'
import '../styles/Card.css'
import { useState } from 'react'
import {BsFillPlayCircleFill } from "react-icons/bs";

const Cardsearch = ({imagealbum,titretrack,artist,playTrack}) => {
  const [showplay,setShowplay] = useState(false)
  const handleShowplay=()=>{setShowplay(true)}
  const handleHideplay=()=>{setShowplay(false)}
  return (
    <div>

<div className='card'>
    <div className='card' onMouseEnter={handleShowplay} onMouseLeave={handleHideplay}
style={{backgroundImage:`url(${imagealbum})`}}>
        <h6>{titretrack}</h6>
        <h5
        >{artist}</h5>
        <span className='playnow' onClick={playTrack} style={{cursor:'pointer'}}> {showplay && <BsFillPlayCircleFill  />}</span>
     
        
</div>
</div>
    
    </div>
  )
}

export default Cardsearch