import React, { Component } from 'react';
import '../Styles/PostsFeed.css'
class PostsFeed extends Component{
    constructor(){
        super();
        this.state={
            posts:[
                {
                    postId:'101',
                    userId:'1441',
                    userName:'Bob',
                    post:'The Great Wall is coming down',
                    likes:2,
                    comments:[
                        {
                            userId:'401',
                            userName:'Sam',
                            commentId:'101',
                            comment:'What a day!'
                        }
                    ],
                    uploadedTime:'10-15-2021'
                },
                {
                    postId:'102',
                    userId:'1442',
                    userName:'Sam',
                    post:'Catch me live at 8',
                    likes:2,
                    comments:[
                        {
                            userId:'402',
                            userName:'Gen',
                            commentId:'101',
                            comment:'Cant wait'
                        }
                    ],
                    uploadedTime:'10-21-2021'
                },
                {
                    postId:'103',
                    userId:'1444',
                    userName:'Gen',
                    post:'No time to Sleep!',
                    likes:2,
                    comments:[],
                    uploadedTime:'10-21-2021'
                },
                {
                    postId:'104',
                    userId:'1441',
                    userName:'Bob',
                    post:'The Great Wall is coming down',
                    likes:2,
                    comments:[
                        {
                            userId:'401',
                            userName:'Sam',
                            commentId:'101',
                            comment:'What a day!'
                        }
                    ],
                    uploadedTime:'10-15-2021'
                }
            ]
        }
    }

    render(){
       return( <div className="commentSection">
            {
                this.state.posts.map((posts)=>{
                    return(
                        <div className='comments' key={posts.postId}>
                            <p className='uploadedUserName'>{posts.userName}<span className='uploadedTime'>{posts.uploadedTime}</span></p>
                            <p className='postContent'>{posts.post}</p>
                            <p><span className='likesNumber'>{posts.likes}</span><span className='commentsNumber'>{posts.comments.length}</span></p><br/>
                            <p className='eventSection'><span className='postLikes'><i class="fa fa-thumbs-up"></i></span><span className='postComments'><i class="fa fa-comment"></i></span></p>
                        </div>
                    )
                })
            }
        </div>)
    }
}


export default PostsFeed;