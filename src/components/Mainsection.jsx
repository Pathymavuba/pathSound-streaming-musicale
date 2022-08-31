import React, { useContext, useEffect } from 'react'
import '../styles/Mainsection.css'
import Cardmadeforyou from './Cardmadeforyou'
import Cardplaylist from './Cardplaylist'
import Cardrecentlyplayed from './Cardrecentlyplayed'
import { useState } from 'react'
import { ObjetUsContext } from './OjetUseContext'
import ReactLoading from 'react-loading';




const Mainsection = () => {
  const {artistName,newsong,token,spotify,trackuri,setTrackuri,isLoading,seIsLoading} = useContext(ObjetUsContext)
  const [seemoremadeforyou,setSeemoremadeforyou]=useState(true)
  const [seemorerecentlyplayed,setSeemorerecentlyplayed]=useState(true)
 
  
const handleSeemoremadeforyou = ()=>{
  setSeemoremadeforyou(!seemoremadeforyou)
}
const handleSeemorerecentlyplayed = ()=>{
  setSeemorerecentlyplayed(!seemorerecentlyplayed)
}
  return (
    <div className='mainmenu'>

{isLoading ? <ReactLoading className="loader" type="spokes" color='white' height={467} width={175}  /> : (
  <div className="allSongs">
      
  <div className="madeforyou">
    <h1 style={{fontWeight:'400'}}>MADE FOR YOU</h1>
    <span style={{marginLeft:'53rem',cursor:'pointer'}} onClick={handleSeemoremadeforyou} >
        {seemoremadeforyou?"See more...":"See less"}</span>
        
    <div className={seemoremadeforyou?"listsongs":'seeMore'}>
      {newsong.map((data,index)=>{
        return(
          <Cardmadeforyou  key={index}
          myartist={data.artists[0].name} titre={data.name} image={data.images[0].url}
          playTrack={()=>setTrackuri(data.uri)}
         >
          </Cardmadeforyou>
         
        )
      })}
      
      </div>
    </div>
    <div className="recentlyplayed">
    <h1 style={{fontWeight:'400'}}>RECENTLY PLAYED</h1>
    <span style={{marginLeft:'53rem',cursor:'pointer'}} onClick={handleSeemorerecentlyplayed } >
      {seemorerecentlyplayed?"See more...":"See less"}</span>
    <div className={seemorerecentlyplayed?"listsongs":'seeMore'}>
    {artistName.map((data,index)=>{
      return(<Cardrecentlyplayed key={index} titre={data.track.name} 
      image = {data.track.album.images[0].url}
      monartiste={data.track.artists[0].name}
      playTrack={()=>setTrackuri(data.track.uri)}
      >
      
      </Cardrecentlyplayed>)
    })} 
      </div>
    </div>
 

  </div>
  
)} 
      
    
  
    
    </div>
  )
}

export default Mainsection