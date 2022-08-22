import{ React, useState,useContext} from 'react'
import '../style/Card.css'
import {BsFillPlayCircleFill } from "react-icons/bs";



const Cardrecentlyplayed = ({image,monartiste,titre,playTrack}) => {
    const [showplay,setShowplay] = useState(false)
    const handleShowplay=()=>{setShowplay(true)}
    const handleHideplay=()=>{setShowplay(false)}

    const handleplay = ()=>{
        console.log('pour jouer');
    }
  return (
    <div>
      
            <div className='card'  onMouseEnter={handleShowplay} onMouseLeave={handleHideplay}
            style={{backgroundImage:`url(${image})`}}>
             <h6 style={{
                fontSize:'.7rem',
                position:'relative',
                top:'10.5rem',}}>{titre}</h6>
             <h6 style={{
                fontSize:'.7rem',
                fontWeight:'350',
                position:'relative',
                top:'11rem',}}
             >{monartiste}</h6>
             <span className='playnow' onClick={playTrack} style={{cursor:'pointer'}}> {showplay && <BsFillPlayCircleFill />}</span>

    </div>
      
  
     </div>
  )
}

export default Cardrecentlyplayed