import React from 'react';
import '../Styles/Post.css'
import PostsFeed from './PostsFeed';

const Post = (props)=>{
    return(
        <div>
        <div className='postArea'>
            <input className='form-control' onChange={props.onChangePostInput} id='content' name='content' placeholder="Pen your post...."></input>
            <br/>
            <button className='btn btn-success' onClick={props.post}>Post</button>
        </div>
        <div>
            <PostsFeed posts={props.posts}></PostsFeed>
        </div>
        </div>
    )
}

export default Post;