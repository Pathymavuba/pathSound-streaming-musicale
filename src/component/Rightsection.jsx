import React from 'react'
import '../style/Rightsection.css'
import  Logo from '../img/logo.png'

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