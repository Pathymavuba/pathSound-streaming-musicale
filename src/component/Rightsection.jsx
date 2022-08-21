import React from 'react'
import '../style/Rightsection.css'
import Logo from '/home/pathymavuba/Documents/Pathsound/src/img/Listen to Music.png'

const Rightsection = () => {
  return (
    <div className='rightmenu'>
      <div className='mylogo'>
        <img  style={{width:'4rem'}}src={Logo} alt="" />
      </div>
    </div>
  )
}

export default Rightsection