import React from 'react';
import '../Styles/Register.css'

const Register=(props)=>{
    return(
        <div className='container registerShow' style={{display:'none'}} id='register'>
            <form>
            <label for='firstName'>Full Name</label>
            <input type='text' className='form-control' id='firstName' required></input>

            <label for='email'>Email</label>
            <input type='email' className='form-control' id='email' required></input>
            
            <label for='phNo'>Phone No</label>
            <input type='tel' className='form-control' id='phNo' required></input>

            <label for='userName'>UserName</label>
            <input type='text' className='form-control' id='userName' required></input>
            
            <label for='password'>Full Name</label>
            <input type='password' className='form-control' id='password' required></input>
            <br></br>
            <input type='submit' className='btn btn-success' value='Register'></input>
            <input type='button' className='btn btn-success' value='Login' onClick={props.login}></input>
            </form>
        </div>
    )
}


export default Register;