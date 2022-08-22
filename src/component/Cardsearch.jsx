import React from 'react'
import '/home/pathymavuba/Documents/Pathsound/src/style/Card.css'

const Cardsearch = ({imagealbum,titretrack,artist}) => {
  return (
    <div>

<div className='card'>
    <div className='card'
style={{backgroundImage:`url(${imagealbum})`}}>
        <h6 style={{
           fontSize:'.7rem',
           position:'relative',
           top:'10.5rem',}}>{titretrack}</h6>
        <h6 style={{
           fontSize:'.7rem',
           fontWeight:'350',
           position:'relative',
           top:'11rem',}}
        >{artist}</h6>
     
        
</div>
</div>
    
    </div>
  )
}

export default Cardsearch