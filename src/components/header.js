import React from 'react';
import './header.css';
import { SocialLinks } from './SocialLinks';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ReplayIcon from '@mui/icons-material/Replay';
import {Searchbar} from "./Searchbar"

function Header() {
    return (
        <header className="browser-header">

<div className='header-icons'>
        <a href='#'><ArrowCircleLeftIcon sx={{ fontSize: 40}} /> </a>
        <a href='#'><ArrowCircleRightIcon sx={{ fontSize: 40}} /> </a>
        <a href='#'> <ReplayIcon sx={{ fontSize: 40}}  /> </a>
    </div>

    <div className="header-img">
       <a href=""> <img src='logo.png' alt="Logo of cryptic" /></a>
    </div>
    
    <div className="header-social-links">
        <SocialLinks/>
    </div>
    <div className='seacrh-bar-container' >
       <Searchbar/>
    </div>


       </header>
    );
  }
  
export default Header;
