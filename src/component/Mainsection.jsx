import React, { useContext, useEffect } from 'react'
import '../style/Mainsection.css'
import Cardmadeforyou from './Cardmadeforyou'
import Cardplaylist from './Cardplaylist'
import Cardrecentlyplayed from './Cardrecentlyplayed'
import { useState } from 'react'
import { ObjetUsContext } from './OjetUseContext'
import CardRecommandation from './CardRecommandation'
// import SpotifyPlayer from 'react-spotify-web-playback';



const Mainsection = () => {
  const {artistName,newsong,token} = useContext(ObjetUsContext)
  const [seemore,setSeemore]=useState(true)
  
  // const image = `url(${data.track.album.images[0].url})`
  //  const titre =data.track.name
  // const variable = useContext(ObjetUsContext)
  // console.log(variable);
//   const [showplay,setShowplay] = useState(false)
//  const handleShowplay=()=>{setShowplay(true)}
//  const handleHideplay=()=>{setShowplay(false)}
// useEffect(()=>{
//    console.log(artistName);

// },[])
const handleSeemore = ()=>{
  setSeemore(!seemore)
}
  return (
    <div className='mainmenu'>
      <div className="menu">
          <input type="search" className='search' placeholder='search'/>
      </div>
      <div className="allSongs">
      <div className="madeforyou">
        <h1 style={{fontWeight:'400'}}>MADE FOR YOU</h1>
        <span style={{marginLeft:'53rem',cursor:'pointer'}} onClick={handleSeemore} >
            {seemore?"See more...":"See less"}</span>
        <div className={seemore?"listsongs":'seeMore'}>
          {newsong.map(data=>{
            return(
              <Cardmadeforyou  key={data.artists.id}
              myartist={data.artists[0].name} titre={data.name} image={data.images[0].url}>
              </Cardmadeforyou>
              // myartist={data.albums.items.artists[0].name}
            )
          })}
          
          </div>
        </div>
        <div className="recommanded">
          <h1 style={{fontWeight:'400'}}>RECOMMANDED</h1>
          <span style={{marginLeft:'53rem',cursor:'pointer'}} onClick={handleSeemore} >See more...</span>
          <div className={seemore?"listsongs":'seeMore'}>
           <CardRecommandation />
          </div>
        </div>
        <div className="playlists">
          <h1 style={{fontWeight:'400'}}>PLAYLISTS</h1>
          <span style={{marginLeft:'53rem',cursor:'pointer'}} onClick={handleSeemore} >See more...</span>
          <div className={seemore?"listsongs":'seeMore'}>
          <Cardplaylist  />
          <Cardplaylist />
          <Cardplaylist />
          <Cardplaylist />
          
          </div>
        </div>
        <div className="recentlyplayed">
        <h1 style={{fontWeight:'400'}}>RECENTLY PLAYED</h1>
        <span style={{marginLeft:'53rem',cursor:'pointer'}} onClick={handleSeemore} >See more...</span>
        <div className={seemore?"listsongs":'seeMore'}>
        {artistName.map((data)=>{
          return(<Cardrecentlyplayed key={data.track.artists.id} titre={data.track.name} 
          image = {data.track.album.images[0].url}
          monartiste={data.track.artists[0].name}>
          </Cardrecentlyplayed>)
        })} 
          </div>
        </div>

      </div>
      
      {/* <SpotifyPlayer   styles={{
    activeColor: '#fff',
    bgColor: '#333',
    color: '#fff',
    loaderColor: '#fff',
    sliderColor: '#1cb954',
    trackArtistColor: '#ccc',
    trackNameColor: '#fff',
    width:'3px',
    height:'5rem',
  }}
  token={token}
  uris={['spotify:artist:6HQYnRM4OzToCYPpVBInuU']}
/>; */}
  
    
    </div>
  )
}

export default Mainsection