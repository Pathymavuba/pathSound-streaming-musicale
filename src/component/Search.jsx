import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './Search.css'

const Search = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
       .then(response => response.json())
       .then(json =>setData(json))
    },[])
    console.log(data);
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
        {data.map((posts)=>{
            return <div className='search_result' key={posts.id}>{posts.title}</div>
        })}
        
    </div>
    </>
   
  )
}

export default Search