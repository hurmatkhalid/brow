import React from 'react';
import { useState } from 'react';
import './Searchbar.css'
import SearchIcon from '@mui/icons-material/Search';

export const Searchbar = () => {
    const [width, setWidth] = useState(130); // Initial width of the div

  const increaseWidth = () => {
    setWidth(width + 50); // Increase the width by 50 (you can adjust the value as needed)
  };
return(
    <div className='input-wrapper'> 
    <input placeholder='search' onClick={increaseWidth}/>
    <div className="search-icon-div">
    <a href=""> <SearchIcon id= 'search-icon'/> </a>
    </div>
    </div>
)
}