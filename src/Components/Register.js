import React from 'react';
import '../Styles/Register.css'

const Register=(props)=>{
    return(
        <div className='container registerShow' style={{display:'none'}} id='register'>
            <form id='registerForm' onSubmit={(e)=>props.register(e)} >
            <label for='firstName'>First Name</label>
            <input type='text' placeholder='Enter First Name..' className='form-control' id='firstName' name='firstName' onChange={props.onChangeInput} required></input>

            <label for='lastName'>Last Name</label>
            <input type='text' placeholder='Enter Last Name..' className='form-control' id='lastName' name='lastName' onChange={props.onChangeInput} required></input>

            <label for='userName'>User Name</label>
            <input type='text' placeholder='Enter User Name..' className='form-control' id='userName' name='userName' onChange={props.onChangeInput} required></input>

            <label for='email'>Email</label>
            <input type='email' placeholder='Enter Email..' className='form-control' id='emailAddress' name='emailAddress' onChange={props.onChangeInput} required></input>
            
            <label for='password'>Password</label>
            <input type='password' placeholder='Enter Password..' className='form-control' id='password' name='password' onChange={props.onChangeInput} required></input>

            <label for='country'>Country</label>
            <input type='text' placeholder='Enter Country..' className='form-control' id='country' name='country' onChange={props.onChangeInput} required></input>

            <label for='dob'>DOB</label>
            <input type='date' placeholder='Select Date' className='form-control' id='dob' name='dob' onChange={props.onChangeInput} required></input>

            <label for='contactNumber'>Contact No</label>
            <input type='tel' placeholder='Enter Contact' className='form-control' id='contactNumber' name='contactNumber' onChange={props.onChangeInput} required></input>

            
            <input type='submit' className='btn btn-success' value='Register' ></input>
            <input type='button' className='btn btn-success' value='Login' onClick={props.loginSwitch}></input>
            </form>
            <h3 className='status'>{props.message}</h3>
        </div>
    )
}


export default Register;