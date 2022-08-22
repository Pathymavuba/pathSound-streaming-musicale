import React from 'react'
import { useState, useEffect,useContext,useRef} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import SpotifyWebAPi from 'spotify-web-api-js'
import Leftsection from './Leftsection'
import Mainsection from './Mainsection'
import Rightsection from './Rightsection'
import '/home/pathymavuba/Documents/Pathsound/src/component/AccurilPage.css'
import {ObjetUsContext} from './OjetUseContext'
import Album from './Album'
import Cardsearch from './Cardsearch'
import Research from './Research'




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
  const [newalbum,setNewalbum]=useState([])
  const [initial,setInitial]=useState(true)
  

  spotify.setAccessToken(token) 

  useEffect(()=>{
    setTimeout(()=>{
      
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
      setNewalbum(res.albums)
    })
    spotify.getAlbums().then((res)=>{
      console.log(res);
     })
    
  
   
    },2000)


  },[token])
  // console.log(profil);
  // console.log(artistName);
  console.log(newalbum);
  const inputRef = useRef() 
 
  const researchEvent = ()=>{
    setInitial(!initial)
    
  }
 
  
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
      <Leftsection  logout={logout} profil={profil} name={name} token={token} researchEvent={researchEvent}/>
      {/* <Mainsection artistName={artistName}/> */}
      <ObjetUsContext.Provider value={{artistName,newsong,token,logout,profil,name,spotify}}>
      {initial?<Mainsection/>:<Research />}
      {/* <Mainsection /> */}
      {/* <Research /> */}
      </ObjetUsContext.Provider>
      <Rightsection />

    </div>
    </div>
  
  )
}

export default AccueilPage