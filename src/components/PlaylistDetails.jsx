import {React,useEffect,useState,useContext} from 'react'
import { ObjetUsContext } from './OjetUseContext'
import '../styles/Mainsection.css'
import ReactLoading from 'react-loading';

const PlaylistDetails = () => {
   const {playlistId,spotify,infoplaylist,setTrackuri,trackuri}=useContext(ObjetUsContext)
   const [playlistTracks,setPlaylistTracks] = useState([])
   const [coverimage,setCoverimage]=useState()
   const [nameplaylist,setNameplaylist]=useState()
   const [play,setPlay]=useState(false)
   const [isLoadingDetail,setIsLoadingDetail]=useState(true)
   useEffect(()=>{
spotify.getPlaylistTracks(playlistId).then(res=>{
    console.log("playlistTracks",res);
    setPlaylistTracks(res.items)
})
spotify.getPlaylistCoverImage(playlistId).then((res)=>{
    setCoverimage(res[0].url);
    setNameplaylist(infoplaylist[0].name)
    setIsLoadingDetail(false)
    
    
})
   },[trackuri])
   console.log("uri",trackuri);
   const showicon = ()=>{
    setPlay(true)
   }
   const hideicon = ()=>{
    setPlay(false)
   }
   
  return (
 
    <div className='secondmain'>
        {isLoadingDetail ? <ReactLoading className="loader" type="spokes" color='white' height={467} width={175}  /> :""}
        <div className="cover" >
         <img src={coverimage} alt="" />
    </div>
    <h3 style={{marginTop:"1rem",marginLeft:"1rem"}}>{nameplaylist}</h3>

        <div className="list">
            <div className='details'>
                <div>
                <div className="titre">
                    
                    <h5 style={{fontSize:'1rem'}}>#</h5>
                    <h5 style={{fontSize:'1rem'}}>Titre</h5>
                    <h5 style={{fontSize:'1rem'}}>Artist</h5>
                    
                </div>
                <div className='borduretitre'></div>
                </div>

                {playlistTracks.map((data,index)=>{
                    return(
                        <div className='depend'
                         onClick={()=>setTrackuri(data.track.uri)}
                         onMouseEnter={showicon} 
                         onMouseLeave={hideicon} >
                        <div className="titre">
                            <h5 style={{fontSize:'1rem'}}>{index+1}</h5>
                            <h5 style={{fontSize:'1rem'}}>{data.track.name}</h5>
                            <h5 style={{fontSize:'1rem'}}>{data.track.artists[0].name}</h5>
                        </div>
                        <div className='borduretitre'></div>
                        </div>
                    )
            
        })}
               
            </div>
        </div>

    </div>
  )
}

export default PlaylistDetails