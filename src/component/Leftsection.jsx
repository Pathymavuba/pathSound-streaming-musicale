import {React}from 'react'
import '../style/Leftsection.css'
// import profil from '/home/pathymavuba/Documents/Pathsound/src/img/WhatsApp Image 2022-08-07 at 13.12.19.jpeg'
import { Link } from 'react-router-dom'
import { ObjetUsContext } from './OjetUseContext'
// import SpotifyPlayer from 'react-spotify-web-playback';

const Leftsection = ({logout,profil,name,researchEvent,token,homeEvent}) => {
  
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
              <h6 onClick={homeEvent}>Home</h6>
             <h6  onClick={researchEvent}>Research</h6>
            <h6 >Album</h6>
             <h6>Liked Songs</h6>
             <h6>Playlists</h6>
            </div>
             <div className="bordure"></div>
        </div>
        <div className="logout">
            <Link style={{textDecoration:'none'}} to='/'> <h6  className='logout-btn' onClick={logout}>Logout</h6> </Link>
           
        </div>
          {/* <SpotifyPlayer   styles={{
    activeColor: '#fff',
    bgColor: '#333',
    color: '#fff',
    loaderColor: '#fff',
    sliderColor: '#1cb954',
    trackArtistColor: '#ccc',
    trackNameColor: '#fff',
    width:'1px',
    height:'1rem',
  }}
  token={token}
  uris={['spotify:artist:6HQYnRM4OzToCYPpVBInuU']}
/>; */}
    </div>
  )
}

export default Leftsection