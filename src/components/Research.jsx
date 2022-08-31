import {React,useRef} from 'react'
import Cardsearch from './Cardsearch'
import '../styles/AccueilPage.css'
import '../styles/Mainsection.css'
import { ObjetUsContext } from './OjetUseContext'
import { useContext } from 'react'
import { useState } from 'react'
import ReactLoading from 'react-loading';


const Research = () => {
    const [tracksearch,setTracksearch]=useState([])

    const {spotify,setTrackuri} = useContext(ObjetUsContext)
    const [printOfResult,setPrintOfResult]=useState(true)
    
    const searchTracks = (e)=>{
        const track = e.target.value
        if(track !== ""){
          setPrintOfResult(false)
        }
       
        spotify.searchTracks(track).then(res=>{
          setTracksearch(res.tracks.items)
        }).catch(err=>console.error(err))
        
    
      }
      console.log("pathy",printOfResult);
     

    return (
        <div className='mainmenu'>
          <div className="menu">
          <input onChange={searchTracks} type="search" className='search' placeholder='search'/>
      </div>
          <div className="allSongs">
          {printOfResult ? "":(
            <div className="madeforyou">
            
            <h1 className="resultSong" style={{fontWeight:'400'}}>RESULT OF SONGS</h1>
            <div className="seeMore">
              {tracksearch.map((data,index)=>{
                return(
                    <Cardsearch 
                     key={index}
                     titretrack={data.name} 
                     artist={data.artists[0].name} 
                     imagealbum={data.album.images[1].url}
                     playTrack={()=>setTrackuri(data.uri)}
                     />
                )
              })}
                
                  
              </div>
            </div>

          )}
          


          </div>
          
        
      
        
        </div>
      )
}

export default Research