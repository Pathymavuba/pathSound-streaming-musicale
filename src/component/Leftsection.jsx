import React from 'react'
import '../style/Leftsection.css'
// import profil from '/home/pathymavuba/Documents/Pathsound/src/img/WhatsApp Image 2022-08-07 at 13.12.19.jpeg'
import { Link } from 'react-router-dom'

const Leftsection = ({logout,profil,name}) => {
  return (
    <div className='leftmenu'>
        <div className="myCompte">
            <div className="profil">
                <img src={profil} alt="" />
                <p style={{fontSize:'1rem'}}>{name}</p>
            </div>
            <div className="bordure"></div>
        </div>
        <div className="library">
            <div className='yourlibrary'>
            <h3 style={{fontSize:'1.4rem'}}>YOUR LIBRARY</h3>
             <h6>Home</h6>
             <h6>Artists</h6>
             <h6>Album</h6>
             <h6>Liked Songs</h6>
             <h6>Playlists</h6>
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