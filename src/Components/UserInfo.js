import React, { Component } from 'react';
import profilePicture from '../Images/strange.jpg';
import GetImages from '../Images/GetImages';
import '../Styles/UserInfo.css';
 
const UserInfo=(props)=>{
 
        let userCard={
            border:'2px solid black',
            borderRadius:'25px',
            backgroundColor: '#abbcd6'
          }
        let userImage={
            border:'2px solid white',
            borderRadius:'25px'
        }
          
        return(
            <div className="userInfo card" style={userCard}>
                <img className="card-img-top" style={userImage} src={profilePicture} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{props.user.firstName}</h5>
                    <p className="card-text">{props.user.country} | {props.user.dob}</p>
                </div>
            </div>
        )
    
}

export default UserInfo;