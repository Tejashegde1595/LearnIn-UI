import React, { Component } from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Authenticate from './Authenticate';
import App from '../Feed';
import Feed from '../Feed';
import Profile from '../Components/Profile'

class Home extends Component{
    render(){
        return(
            <Router>
                <div className='main-contaner'>
                    <Route exact path='/' render={(props)=> <Authenticate {...props}/>}/>
                    <Route exact path='/feed/:id' render={(props)=> <Feed {...props}/>}/>
                    <Route exact path='/profile/:id' render={(props)=> <Profile {...props}/>}/>
                </div>
            </Router>
        )
    }
}

export default Home;