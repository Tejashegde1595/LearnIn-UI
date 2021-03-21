import React, { Component } from 'react';
import '../Styles/PostsFeed.css'
const PostsFeed=(props)=>{

    return( <div className="commentSection">
            {
                props.posts.map((posts)=>{
                    return(
                        <div className='comments' key={posts.id}>
                            <p className='uploadedUserName'>{posts.user}<span className='uploadedTime'>{posts.uploadedDate.split(' ')[0]}</span></p>
                            <p className='postContent'>{posts.content}</p>
                            <p><span className='likesNumber'>{posts.likes}</span><span className='commentsNumber'>{posts.comments}</span></p><br/>
                            <p className='eventSection'><span className='postLikes'><i class="fa fa-thumbs-up"></i></span><span className='postComments'><i class="fa fa-comment"></i></span></p>
                        </div>
                    )
                })
            }
        </div>)
    
}


export default PostsFeed;