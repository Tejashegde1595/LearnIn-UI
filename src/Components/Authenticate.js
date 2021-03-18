import React,{ Component } from "react";
import Header from "./Header";
import Register from "./Register";
import '../Styles/Authenticate.css';
import Login from "./Login";
import homePhoto from '../Images/studentlearning.jpg';
const Authenticate = (props)=>{

    const registerSwitchHandler=(e)=>{
        const registerArea = document.getElementById('register');
        const loginArea = document.getElementById('login');
        loginArea.style.display='none';
        registerArea.style.display='block';
    }

    const loginSwitchHandler=(e)=>{
        const registerArea = document.getElementById('register');
        const loginArea = document.getElementById('login');
        loginArea.style.display='block';
        registerArea.style.display='none';
    }


    return(
        <div className='authentcate'>
            <Header></Header>
            <img className='homePhoto' src={homePhoto}></img>
            <Login register={registerSwitchHandler}/>
            <Register login={loginSwitchHandler}/>
        </div>
        
    )
}

export default Authenticate;