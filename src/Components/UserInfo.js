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
        return(
            <div className="card userInfo">
                <img className="card-img-top" src={profilePicture} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{this.state.user.firstName}</h5>
                    <p className="card-text">{this.state.user.about}</p>
                </div>
            </div>
        )
    }
}

export default UserInfo;