import React from 'react';
import './Searchbar.css'
import SearchIcon from '@mui/icons-material/Search';

export const Searchbar = () => {
return(
    <div className='input-wrapper'> 
    <input placeholder='search'  />
    <div className="search-icon-div">
    <a href=""> <SearchIcon id= 'search-icon'/> </a>
    </div>
    </div>
)
}