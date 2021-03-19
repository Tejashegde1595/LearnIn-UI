import React,{ Component } from "react";
import Header from "./Header";
import Register from "./Register";
import '../Styles/Authenticate.css';
import Login from "./Login";
import homePhoto from '../Images/studentlearning.jpg';
class Authenticate extends Component{
    constructor(){
        super();
        this.state={
            registerFormData:{
                firstName:'',
                lastName:'',
                userName:'',
                emailAddress:'',
                password:'',
                country:'',
                dob:'',
                contactNumber:''
            },
            isState:true
        }
    }
    
    registerSwitchHandler=(e)=>{
        const registerArea = document.getElementById('register');
        const loginArea = document.getElementById('login');
        loginArea.style.display='none';
        registerArea.style.display='block';
    }

    loginSwitchHandler=(e)=>{
        const registerArea = document.getElementById('register');
        const loginArea = document.getElementById('login');
        loginArea.style.display='block';
        registerArea.style.display='none';
    }

    onChangeHandler(e){
        let updatedFormData = this.state.registerFormData;
        updatedFormData[e.target.name] = e.target.value;
        this.setState({registerFormData:updatedFormData});
    }


    registerHandler=(e)=>{
        e.preventDefault();
        console.log(this.state.registerFormData);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.registerFormData)
        };
        fetch('http://127.0.0.1:800/api/user/signup',requestOptions)
        .then(response=>{
            console.log(response.json())
        }).catch(err=>{
            console.log(err);
        })
    }

    render(){
        return(
            <div className='authentcate'>
                <Header></Header>
                <img className='homePhoto' src={homePhoto}></img>
                <Login registerSwitch={this.registerSwitchHandler} />
                <Register loginSwitch={this.loginSwitchHandler} register={this.registerHandler} onChangeInput={this.onChangeHandler.bind(this)}/>
            </div>
            
        )
    }
}

export default Authenticate;