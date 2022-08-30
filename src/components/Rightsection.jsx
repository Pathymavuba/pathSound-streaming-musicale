import React from 'react'
import '../styles/Rightsection.css'
import  Logo from '../images/logo.png'

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