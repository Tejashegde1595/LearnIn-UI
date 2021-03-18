import React, { Component } from 'react';
import profilePicture from '../Images/strange.jpg';
import '../Styles/UserInfo.css';
 
class UserInfo extends Component{
    constructor(){
        super();
        this.state={
            user:{
                userName:'tejasHegde',
                userId:'14115151515',
                firstName:'Tejas',
                dob:'15-10-1995',
                gender:'male',
                about:'Coder | Runner'
            }
        }
    }

    render(){
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
                    <h5 className="card-title">{this.state.user.firstName}</h5>
                    <p className="card-text">{this.state.user.about}</p>
                </div>
            </div>
        )
    }
}

export default UserInfo;