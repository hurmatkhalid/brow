import React from 'react'
import './MainSearchbar.css'

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
