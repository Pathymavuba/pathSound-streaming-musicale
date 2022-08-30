import React from 'react'
import '../styles/Card.css'
import { Link } from 'react-router-dom'


const Cardplaylist = ({playlistdetailEvent,imageplaylist,nameplaylist,user,getIdplaylist}) => {

  return (
    <div className='big-card' onClick={getIdplaylist}>
      <Link  style={{textDecoration:'none'}} to='/accueil/playlist/playlistdetail'>
      <div   className="little-card" onClick={playlistdetailEvent} style={{backgroundImage:`url(${imageplaylist})`}}> </div>
      </Link>
      <h5 style={{fontWeight:"500"}}>{nameplaylist}</h5>
      <h5 style={{fontWeight:"300"}}>Par <span style={{fontWeight:"300"}}>{user}</span></h5>
    </div>
  )
}

export default Cardplaylist