import React from 'react'
import '../style/Card.css'
import { AiFillPlayCircle } from "react-icons/ai";
import { FaPlayCircle} from "react-icons/fa";
import {BsFillPlayCircleFill } from "react-icons/bs";
import { useState } from 'react'

const CardRecommandation = () => {
    const [showplay,setShowplay] = useState(false)
    const handleShowplay=()=>{setShowplay(true)}
    const handleHideplay=()=>{setShowplay(false)}
  return (
    <div className='card'>
         <div className='card' onMouseEnter={handleShowplay} onMouseLeave={handleHideplay}
    style={{backgroundImage:"url('https://edgard-lelegant.com/wp-content/uploads/2021/07/Les-20-plus-belles-femmes-du-monde-Gal-Gadot-800x1028.jpeg')"}}>
             <h6 style={{
                fontSize:'.7rem',
                position:'relative',
                top:'10.5rem',}}>WHERE ARE YOU?</h6>
             <h6 style={{
                fontSize:'.7rem',
                fontWeight:'350',
                position:'relative',
                top:'11rem',}}
             >Lost frequecies</h6>
             <span className='playnow' > {showplay && <BsFillPlayCircleFill  />}</span>
             {/* <button onClick={()=>{setShowplay(true)}}>essaie</button> */}
             
    </div>
    </div>
  )
}

export default CardRecommandation