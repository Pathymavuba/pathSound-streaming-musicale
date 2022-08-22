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
import CardRecommandation from './CardRecommandation'
import CardAlbum from './CardAlbum'


const Album = () => {
  const {newsong}=useContext(ObjetUsContext)
//    const {}
  return (
    <div className='mainmenu'>
        <div className="menu">
        <input type="search" className='search' placeholder='search'/>
        </div>
        <h1 style={{marginLeft:"2rem"}}>ALBUMS</h1>
        <div className="allSongs">
      <div className="madeforyou">
        {newsong.map((data)=>{
          return
        })}
    < CardAlbum />

     </div>
     </div> 
    </div>
  )
}

export default Album