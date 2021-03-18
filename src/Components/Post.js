import React from 'react';
import '../Styles/Post.css'
import PostsFeed from './PostsFeed';

const Post = (props)=>{
    return(
        <div>
        <div className='postArea'>
            <input className='form-control' id='postInput' placeholder="Pen your post...."></input>
            <br/>
            <button className='btn btn-success'>Post</button>
        </div>
        <div>
            <PostsFeed></PostsFeed>
        </div>
        </div>
    )
}

export default Post;