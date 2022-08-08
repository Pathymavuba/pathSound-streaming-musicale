import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './Search.css'

const Search = () => {
    const [data,setData]=useState([])
    const [searchTerm,setSearchTerm]=useState('')

   const handleClick = (e)=>{
        let value = e.target.value;
        setSearchTerm(value)
    }

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
       .then(response => response.json())
       .then(json =>setData(json))
    },[])
  return (
    <>
     <div className='searchBar'>
        <input 
        type="text" 
        name='searchBar' 
        id='searchBar'
        placeholder='Rechercher' 
        onChange={handleClick}/>
    </div>
    <div className='search_results'>
        {data
        .filter((val) =>{
          return val.title.includes(searchTerm);

        })
        .map((val)=>{
            return <div className='search_result' key={val.id}>{val.title}</div>
        })}
        
    </div>
    </>
   
  )
}

export default Search