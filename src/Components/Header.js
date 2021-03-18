import React from 'react';
import '../Styles/Header.css';
import {Link} from 'react-router-dom';

const Header =(props)=>{
    return(
        <div className="header">
            <h5 className="logo">Learn In</h5> <h5><Link to='/'><span className="homeBtn">{props.headerBtn3}</span></Link><span className="homeBtn">{props.headerBtn1}</span><span className="homeBtn">{props.headerBtn2}</span>
            </h5> 

        </div>
    )
}

export default Header;