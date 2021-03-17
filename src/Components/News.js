import React from 'react';
import '../Styles/News.css'

const News = (props)=>{
    return(
        <div className='newsArea'>
            <input className='form-control' id='postInput' placeholder="Pen your post...."></input>      
        </div>
    )
}

export default News;