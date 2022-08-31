import React, { useState } from 'react'
import '../styles/AccueilPage.css'
import '../styles/Mainsection.css'
import Cardplaylist from './Cardplaylist'
import { useContext } from 'react'
import { ObjetUsContext } from './OjetUseContext'
import { useEffect } from 'react'

const Playlist = () => {
 
  const {spotify,userId,infoplaylist,setInfoplaylist,playlistId,setPlaylistId}=useContext(ObjetUsContext)

  useEffect(()=>{
    spotify.getUserPlaylists(userId).then(res=>{
      setInfoplaylist(res.items)
    })
  },[])
 
  let img = "https://cdn.icon-icons.com/icons2/270/PNG/512/Music_29918.png";
  
  return (
    <div className="mainmenu">
 <h1 className="playlistTitre"style={{fontWeight:'400',marginTop:'2.3rem',marginLeft:'2rem'}}>Playlist</h1>
      <div className='playlist' style={{marginLeft:'2rem'}}>
      {infoplaylist.map((data,index)=>{
        return(
          <Cardplaylist key={index} getIdplaylist={()=>setPlaylistId(data.id)} nameplaylist={data.name} imageplaylist={ data.images.length !==0 ? data.images[0].url : {img}} 
          user={data.owner.display_name}/>
        )
      })}
        
    </div>
    </div>
    
  )
}

export default Playlist