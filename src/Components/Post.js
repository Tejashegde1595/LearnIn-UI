import React from 'react';
import '../Styles/Post.css'

const Post = (props)=>{
    return(
        <div className='postArea'>
            <input className='form-control' id='postInput' placeholder="Pen your post...."></input>
            <br/>
            <button className='btn btn-success'>Post</button>
        </div>
    )
}

export default Post;