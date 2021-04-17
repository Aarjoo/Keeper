import React from 'react';
import HighlightIcon from '@material-ui/icons/Highlight';
import profileImage from '../Images/profile_img.png'


const Header = () =>{
    return (
        <nav className="navbar fixed-top">
          <h1 className="nav-title"><HighlightIcon /> Keeper</h1>
          <img className="round-image" src={profileImage} alt="no"/>          
        </nav>
    )
}

export default Header;