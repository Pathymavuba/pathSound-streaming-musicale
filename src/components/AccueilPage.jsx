import React from 'react'
import { useState, useEffect, useContext, useRef } from 'react'
import { Link,Outlet } from 'react-router-dom'
import axios from 'axios'
import SpotifyWebAPi from 'spotify-web-api-js'
import Leftsection from './Leftsection'
import Mainsection from './Mainsection'
import Rightsection from './Rightsection'
import '../styles/AccueilPage.css'
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
  const [backhome, setBackhome] = useState("home")
  const [trackuri,setTrackuri]=useState("")
  const [active,setActive]=useState("")
  const [userId,setUserId]=useState("")
  const [infoplaylist,setInfoplaylist]=useState([])
  const [playlistId,setPlaylistId] = useState("")
  const [play,setPlay]=useState(false)
  const  [isLoading,seIsLoading]=useState(true)
 

  spotify.setAccessToken(token)
  useEffect(()=>{
   setPlay(true)
  },[trackuri])

  useEffect(() => {
    setTimeout(() => {
      //definition du jeton d'accès 
      spotify.getMe().then((res) => {
        setUserId(res.id)
        setProfil(res.images[0].url);
        setName(res.display_name)
      }).catch(err => console.log(err))
      spotify.getMyRecentlyPlayedTracks().then(res => {
        setArtistName(res.items)
        seIsLoading(false)
      })
        .catch(err => console.log(err))

      spotify.getNewReleases().then((res) => {
       
        setNewsong(res.albums.items)

      })
      spotify.getAlbums().then((res) => {
      })


    },0)


  }, [token])
  console.log(userId);

  const homeEvent = () => {
    setActive("home")
    setBackhome('home')
   }

  const researchEvent = () => {
    setBackhome('search')
    setActive('search')

  }
  const playlistEvent = ()=>{
    setBackhome('playlist')
    setActive("playlist")
  }
  const playlistdetailEvent = ()=>{
    setBackhome('playlistdetail')
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
         playlistEvent={playlistEvent}
         playlistdetailEvent={playlistdetailEvent}/>

        <ObjetUsContext.Provider 
        value={{ artistName, newsong, token, logout, profil, name, spotify,trackuri,setTrackuri,userId,setInfoplaylist,isLoading,seIsLoading,
        infoplaylist,playlistId,setPlaylistId}}>
        {(backhome=="home")?<Mainsection/> :<Outlet />}
        
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
          callback={(pathie)=>{
            !pathie.isPlaying ? setPlay(false) : setPlay(true)
          }}
          play={play}
          autoplay={true}
        />
      </div>
    </div>
  )
}

export default AccueilPage