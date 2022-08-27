import {React, useContext}from 'react'
import '../style/Leftsection.css'
import { Link } from 'react-router-dom'
import { ObjetUsContext } from './OjetUseContext'

const Leftsection = ({logout,profil,name,researchEvent,token,homeEvent,active,playlistEvent}) => {
 
  
  return (
    <div className='leftmenu'>
        <div className="myCompte">
            <div className="profil">
                <img src={profil} alt="" />
                <p>{name}</p>
            </div>
            <div className="bordure"></div>
        </div>
        <div className="library">
            <div className='yourlibrary'>
            <h3 >YOUR LIBRARY</h3>
            <Link  style={{textDecoration:'none'}}  to='/accueil/home'> 
             <h6 onClick={homeEvent} 
             style={(active=="home")?{color:'white',fontSize:'1rem',opacity:1,
             cursor:"pointer"}:
             {color:'white',fontSize:'1rem',opacity:0.6,
             cursor:"pointer"}}>
              Home</h6> 
              </Link> 
             
            <Link style={{textDecoration:'none'}}  to='/accueil/search'>  
            <h6  onClick={researchEvent}  
              style={(active=="search")?{color:'white',fontSize:'1rem',opacity:1,
              cursor:"pointer"}:{color:'white',fontSize:'1rem',opacity:0.6,
              cursor:"pointer"}} >Research</h6> </Link>   
   <Link  style={{textDecoration:'none'}} to='/accueil/playlist'>
   <h6
             onClick={playlistEvent}
             style={(active=="playlist")?{color:'white',fontSize:'1rem',opacity:1,
             cursor:"pointer"}:{color:'white',fontSize:'1rem',opacity:0.6,
             cursor:"pointer"}} >Playlists</h6>
   </Link>  
            </div>
             <div className="bordure"></div>
        </div>
        <div className="logout">
            <Link style={{textDecoration:'none'}} to='/'> <h6  className='logout-btn' onClick={logout}>Logout</h6> </Link>
           
        </div>
    </div>
  )
}

export default Leftsection