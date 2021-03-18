import React from 'react';
import '../Styles/Login.css'
import {Link} from 'react-router-dom';
const Login=(props)=>{
    return(
        <div className='container loginShow' id='login'>
            <form>
            <label for='userName'>User Name</label>
            <input type='text' className='form-control' id='userName' required></input>
            
            <label for='password'>Password</label>
            <input type='password' className='form-control' id='password' required></input>
            <br></br>
            <Link to='/feed'><input type='submit' className='btn btn-success' value='Login'></input></Link>
            <input type='button' className='btn btn-success' value='Register' onClick={props.register}></input>
            </form>
        </div>
    )
}


export default Login;