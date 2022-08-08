import React from 'react'
import { useState } from 'react'
import './Search.css'

const Search = () => {
    const [data,setData]=useState([])
  return (
    <>
     <div className='searchBar'>
        <input 
        type="text" 
        name='searchBar' 
        id='searchBar'
        placeholder='Rechercher' />
    </div>
    <div className='search_results'>
        <div className='search_result'>donnée</div>
    </div>
    </>
   
  )
}

export default Search