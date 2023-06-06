import React from 'react'
import './MainSearchBar.css'

export const MainSearchbar = () => {
  return (
    <div className='input-wrap'> 
    <input placeholder='search anything!'  />
    <div className="search-icondiv">
    <a href=""> Search </a>
    </div>
    </div>
  )
}
