import React from 'react'
import '../style/Card.css'

const CardAlbum = ({album,artist,imagealbum}) => {
  return (
    <div className='card'>
    <div className='card'
style={{backgroundImage:`url${imagealbum}`}}>
        <h6 style={{
           fontSize:'.7rem',
           position:'relative',
           top:'10.5rem',}}>{album}</h6>
        <h6 style={{
           fontSize:'.7rem',
           fontWeight:'350',
           position:'relative',
           top:'11rem',}}
        >{artist}</h6>
        {/* <span className='playnow' > {showplay && <BsFillPlayCircleFill  />}</span> */}
        {/* <button onClick={()=>{setShowplay(true)}}>essaie</button> */}
        
</div>
</div>
  )
}

export default CardAlbum