import React from 'react';
import '../Styles/Login.css'
import {Link} from 'react-router-dom';
const Login=(props)=>{
    return(
        <div className='container loginShow' id='login'>
            <form  onSubmit={(e)=>props.login(e)}>
            <label for='userName'>User Name</label>
            <input type='text' className='form-control' id='userName' name='userName' onChange={props.onChangeInput} required></input>
            
            <label for='password'>Password</label>
            <input type='password' className='form-control'  onChange={props.onChangeInput} name='password' id='password' required></input>
            <br></br>
            <input type='submit' className='btn btn-success' value='Login'></input>
            <input type='button' className='btn btn-success' value='Register' onClick={props.registerSwitch}></input>
            </form>
            <h3 className='status'>{props.message}</h3>
        </div>
    )
}


export default Login;