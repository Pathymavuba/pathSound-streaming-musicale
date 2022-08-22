import {React,useRef} from 'react'
import Cardsearch from './Cardsearch'
import '/home/pathymavuba/Documents/Pathsound/src/component/AccurilPage.css'
import '/home/pathymavuba/Documents/Pathsound/src/style/Mainsection.css'
import { ObjetUsContext } from './OjetUseContext'
import { useContext } from 'react'
import { useState } from 'react'


const Research = () => {
    const [tracksearch,setTracksearch]=useState([])

    const {spotify} = useContext(ObjetUsContext)
   
    const searchTracks = (e)=>{
        const track = e.target.value
        spotify.searchTracks(track).then(res=>{
          console.log("ma chanson",res.tracks.items);
          setTracksearch(res.tracks.items)
        //   console.log(res.tracks.items[0].name);
        }).catch(err=>console.error(err))
    
      }
      console.log("mes tracks" , tracksearch);

    return (
        <div className='mainmenu'>
          <div className="menu">
          <input onChange={searchTracks} type="search" className='search' placeholder='search'/>
      </div>
          <div className="allSongs">
          <div className="madeforyou">
            <h1 style={{fontWeight:'400'}}>RESULTS</h1>
            <div className="seeMore">
              {tracksearch.map(data=>{
                return(
                    <Cardsearch 
                     titretrack={data.name} 
                     artist={data.artists[0].name} 
                     imagealbum={data.album.images[1].url}/>
                )
              })}
                
                  
              </div>
            </div>


          </div>
          
        
      
        
        </div>
      )
}

export default Research