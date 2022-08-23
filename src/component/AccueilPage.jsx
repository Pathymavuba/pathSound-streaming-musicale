import React from 'react'
import { useState, useEffect, useContext, useRef } from 'react'
import { Link,Outlet } from 'react-router-dom'
import axios from 'axios'
import SpotifyWebAPi from 'spotify-web-api-js'
import Leftsection from './Leftsection'
import Mainsection from './Mainsection'
import Rightsection from './Rightsection'
import './AccurilPage.css'
import { ObjetUsContext } from './OjetUseContext'
import Cardsearch from './Cardsearch'
import Research from './Research'
import { Routes, Route } from 'react-router-dom'
import SpotifyPlayer from 'react-spotify-web-playback';



const spotify = new SpotifyWebAPi();

const AccueilPage = () => {
  const [token, setToken] = useState("")
  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if (hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

      window.location.hash = ""
      window.localStorage.setItem("token", token)
    }
    console.log("MY TOKEN:", token)
    setToken(token)
      ;
  }, [])


  const [profil, setProfil] = useState([])
  const [name, setName] = useState("")
  const [artistName, setArtistName] = useState([])
  const [newsong, setNewsong] = useState([])
  const [initial, setInitial] = useState(true)
  const [backhome, setBackhome] = useState(false)
  const [trackuri,setTrackuri]=useState("")
  const [active,setActive]=useState("")


  console.log(trackuri);

  spotify.setAccessToken(token)

  useEffect(() => {
    setTimeout(() => {
      //definition du jeton d'accès 
      spotify.getMe().then((res) => {
        // console.log(res);
        setProfil(res.images[0].url);
        setName(res.display_name)
      }).catch(err => console.log(err))
      spotify.getMyRecentlyPlayedTracks().then(res => {
        // console.log(res);
        setArtistName(res.items)
      })
        .catch(err => console.log(err))

      spotify.getNewReleases().then((res) => {
        // console.log(res);
        setNewsong(res.albums.items)
        //  console.log("nouveau",res.albums.items);

      })
      spotify.getAlbums().then((res) => {
        // console.log(res);
      })


    }, 2000)


  }, [token])

  const researchEvent = () => {
    setBackhome(!backhome)
    setActive('search')

  }
  const playlistEvent = ()=>{
    setActive("playlist")
  }
  const homeEvent = () => {
   setActive("home")
  }

  //se deconnecter
  const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
  }
  return (
    <div >
      <div className='accueil'>
        <Leftsection 
        logout={logout} 
        profil={profil}
         name={name} 
         token={token} 
         researchEvent={researchEvent}
         homeEvent={homeEvent}
         active={active}
         playlistEvent={playlistEvent}/>

        <ObjetUsContext.Provider value={{ artistName, newsong, token, logout, profil, name, spotify,trackuri,setTrackuri}}>
        {backhome?<Outlet />:<Mainsection/>}
        
        </ObjetUsContext.Provider>
        <Rightsection />

      </div>
      <div className="webplayer">
        <SpotifyPlayer
          styles={{
            activeColor: '#fff',
            bgColor: '#030303',
            color: '#fff',
            loaderColor: '#fff',
            sliderColor: '#0000FF',
            sliderHandleColor:'#020A05',
            sliderTrackColor:'white',
            trackArtistColor: '#ccc',
            trackNameColor: '#fff',
            trackArtistColor:'whitesmoke',
            heigh: '100%'
          }}
          token={token}
          uris={trackuri}
        />
      </div>
    </div>
  )
}

export default AccueilPage