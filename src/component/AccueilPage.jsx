import React from 'react'
import { useState, useEffect,useContext} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import SpotifyWebAPi from 'spotify-web-api-js'
import Leftsection from './Leftsection'
import Mainsection from './Mainsection'
import Rightsection from './Rightsection'
import '/home/pathymavuba/Documents/Pathsound/src/component/AccurilPage.css'
import {ObjetUsContext} from './OjetUseContext'




const spotify = new SpotifyWebAPi();

const AccueilPage = () => {
  const [token, setToken] = useState("")
  // const [genre, setGenre] = useState([])
  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if (hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

      window.location.hash = ""
      window.localStorage.setItem("token", token)
    }
    console.log("MY TOKEN:",token)
    setToken(token)
    ;
  }, [])
 
 
  const [profil, setProfil] = useState([])
  const [name,setName] = useState("")
  const [artistName,setArtistName] = useState([])
  const [albumImage,setAlbumImage]=useState([])
  const [newsong,setNewsong]=useState([])
  const [recommandedSong,setRecommandedSong]=useState([])
  useEffect(()=>{
    setTimeout(()=>{
      spotify.setAccessToken(token) 
      //definition du jeton d'accès 
  spotify.getMe().then((res)=>{
      // console.log(res);
      setProfil(res.images[0].url);
      setName(res.display_name)
    }).catch(err=>console.log(err))
    spotify.getMyRecentlyPlayedTracks().then(res=>{
      // console.log(res);
      setArtistName(res.items) 
    })
    .catch(err=>console.log(err))

    spotify.getNewReleases().then((res)=>{
      // console.log(res);
      // setNewsong(res.albums.items[0].artists[0].name)
      setNewsong(res.albums.items)
    })
    spotify.getMySavedTracks().then(res=>{
      console.log(res);
      setRecommandedSong(res)
    })
    },3000)


  },[token])
  // console.log(profil);
  // console.log(artistName);
  // console.log(newsong);
  console.log(recommandedSong);
  
  //se deconnecter
  const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
    console.log('maman');
  }
  return (
    <div>
      <div className='accueil'>
      {/* <Link to='/'><button onClick={logout}>Se deconnecter</button> </Link> */}
      <Leftsection  logout={logout} profil={profil} name={name} />
      {/* <Mainsection artistName={artistName}/> */}
      <ObjetUsContext.Provider value={{artistName,albumImage,newsong,token}}>
      <Mainsection  />
      </ObjetUsContext.Provider>
      <Rightsection />

    </div>
    </div>
  
  )
}

export default AccueilPage