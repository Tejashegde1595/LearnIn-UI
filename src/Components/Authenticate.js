import React,{ Component } from "react";
import Header from "./Header";
import Register from "./Register";
import '../Styles/Authenticate.css';
import Login from "./Login";
import homePhoto from '../Images/studentlearning.jpg';
import { useHistory } from 'react-router-dom';
import Constant from '../Constants/Constant';
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
            loginFormData:{
                userName:'',
                password:''
            },
            isState:true,
            message:null,
            loginMessage:null
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

    onChangeLoginHandler(e){
        let updatedFormData = this.state.loginFormData;
        updatedFormData[e.target.name] = e.target.value;
        this.setState({loginFormData:updatedFormData});
    }

    registerHandler=(e)=>{
        e.preventDefault();
        console.log(this.state.registerFormData);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.registerFormData)
        };
        fetch(new Constant().connection_string+'user/signup',requestOptions)
        .then(response=>{
            return response.json();
        }).then((data)=>{
            if(data.message===undefined)
                data.message=data.status;
            this.setState({message:data.message})
        }).catch(err=>{
            let error='Server Error';
            this.setState({message:error})
        })
    }

    loginHandler=(e)=>{
        e.preventDefault();
        let authorizationToken = btoa(this.state.loginFormData.userName+':'+this.state.loginFormData.password);
        const requestOptions = {
            method: 'POST',
            headers: 
                { 
                 'Content-Type': 'application/json' ,
                 'Authorization':'Basic '+authorizationToken
                }
        };
        fetch(new Constant().connection_string+'user/signin',requestOptions)
        .then(response=>{
            localStorage.setItem('access_token',response.headers.get('access_token'));
            return response.json();
        }).then((data)=>{
            if(data.id===undefined){
                this.setState({loginMessage:data.message});
                return;
            }
            localStorage.setItem('user_id',data.id);
            this.props.history.push('/feed/'+data.id);
        }).catch(err=>{
            console.log(err);
        })
    }

    render(){
        return(
            <div className='authenticate'>
                <Header></Header>
                <img className='homePhoto' src={homePhoto}></img>
                <Login message={this.state.loginMessage} registerSwitch={this.registerSwitchHandler} onChangeInput={this.onChangeLoginHandler.bind(this)} login={this.loginHandler} />
                <Register message={this.state.message} loginSwitch={this.loginSwitchHandler} register={this.registerHandler} onChangeInput={this.onChangeHandler.bind(this)}/>
            </div>
            
        )
    }
}

export default Authenticate;