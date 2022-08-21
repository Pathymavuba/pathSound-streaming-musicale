import React from 'react'
import './ConnexionPage.css'
import Logo from '/home/pathymavuba/Documents/Pathsound/src/img/Listen to Music.png'



const ConnexionPage = () => {
  //Variables de lien d'authentification
  const CLIENT_ID = "7e483ea79bf446788e05e4807c5039a8"
  const REDIRECT_URI = "http://localhost:3000/accueil"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"
  const scope = [
    "user-read-email",
    "ugc-image-upload",
    "user-read-private",
    "user-modify-playback-state",
    "user-read-playback-state",
    "user-read-currently-playing",
    "streaming",
    "user-read-recently-played",
    "user-read-playback-position",
    "user-top-read",
    "app-remote-control",
    "playlist-read-collaborative",
    "playlist-modify-public",
    "playlist-read-private",
    "playlist-modify-private",
    "user-library-modify",
     "user-library-read",
     "user-follow-modify",
      "user-follow-read",
  ]

  return (
    <div className='container'>
      <div className="secondary-container">
        <div className="logo">
          <img src={Logo} alt="logo" />
          <h3 style={{ marginTop: '2.6rem', fontSize: '2rem', fontWeight: '400' }}
          >path<span style={{ color: '#0000FF' }}>Sound</span></h3>
        </div>
        <div className='description'>
          <p>Discover, stream  a constantly expanding mix of music <br />
            from emerging and major artists <br /> around the world.</p>
          <a href=
            {`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&scope=${scope.join('%20')}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&show_dialog=true`}> 
            <button>Connect to pathsound</button> </a>
        </div>

      </div>
    </div>
  )
}

export default ConnexionPage