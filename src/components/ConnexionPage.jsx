import React from 'react'
import '../styles/ConnexionPage.css'
import Logo from '../images/logo.png'

const ConnexionPage = () => {
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
  let redirect_uri = (process.env.REACT_APP_REDIRECT_URI_DEVELOP)
  let auth_endpoint = (process.env.REACT_APP_AUTH_ENDPOINT )
  let client_id = (process.env.REACT_APP_CLIENT_ID )
  let response_type = (process.env.REACT_APP_RESPONSE_TYPE)
 

 

  if(process.env.NODE_ENV ==='production'){
    redirect_uri = (process.env.REACT_APP_REDIRECT_URI_PRODUCTION)
  }

 
  return (
    <div className='container'>
      <div className="secondary-container">
        <div className="logo">
          <img src={Logo} alt="logo" />
          <h3 >path<span style={{color:'#0000FF'}}>Sound</span></h3>
        </div>
        <div className='description'>
          <p>Discover, stream  a constantly expanding mix of music <br />
            from emerging and major artists <br /> around the world.</p>
          <a href=
            {`${auth_endpoint}?client_id=${client_id}&scope=${scope.join('%20')}&redirect_uri=${redirect_uri}&response_type=${response_type}&show_dialog=true`}> 
            <button>Login with Spotify</button> </a>
        </div>

      </div>
    </div>
  )
}

export default ConnexionPage