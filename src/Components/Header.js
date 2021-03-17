import React from 'react';
import '../Styles/Header.css';
const Header =(props)=>{
    return(
        <div className="header">
            <h5 className="logo">Learn In</h5> <h5><span className="homeBtn">Profile</span><span className="homeBtn">Home</span></h5> 

        </div>
    )
}

export default Header;