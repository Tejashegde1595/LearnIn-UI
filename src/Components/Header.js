import React from 'react';
import '../Styles/Header.css';
import {Link} from 'react-router-dom';

const Header =(props)=>{    
    let profileRedirect ='/profile/'+props.id;

    return(
        <div className="header">
            <h5 className="logo">Learn In</h5> <h5><Link to='/'><span className="homeBtn">{props.headerBtn3}</span></Link><Link to={profileRedirect}><span className="homeBtn">{props.headerBtn1}</span></Link><span className="homeBtn">{props.headerBtn2}</span>
            </h5> 

        </div>
    )
}

export default Header;