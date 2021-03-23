import logo from './logo.svg';
import './Feed.css';
import Header from './Components/Header';
import Post from './Components/Post';
import UserInfo from './Components/UserInfo';
import News from './Components/News';
import PostsFeed from './Components/PostsFeed';
import { Component } from 'react';
import Constant from './Constants/Constant'
class Feed extends Component {
  
  constructor(){
    super();
    this.state={
        posts:[],
        postsInput:{
            content:''
        },
        user:{}
    }
  }

  componentDidMount(){
    this.getAllPosts();
    this.getUserInfo();
  }

  getAllPosts=()=>{
    console.log('getting posts');
    let access_token = localStorage.getItem('access_token');
    const requestOptions = {
        method: 'GET',
        headers: 
            { 
             'Content-Type': 'application/json' ,
             'Authorization':access_token
            }
    };
    fetch(new Constant().connection_string+'post/all',requestOptions)
    .then(response=>{
        return response.json();
    }).then((data)=>{
        this.setState({posts:data});
        console.log(data);
    }).catch(err=>{
        
    })
  }

  getUserInfo=()=>{
    let userId=this.props.match.params.id;
    console.log('getting users id: '+userId);
    let access_token = localStorage.getItem('access_token');
    const requestOptions = {
        method: 'GET',
        headers: 
            { 
             'Content-Type': 'application/json' ,
             'Authorization':access_token
            }
    };
    fetch(new Constant().connection_string+'user/'+userId,requestOptions)
    .then(response=>{
        return response.json();
    }).then((data)=>{
        this.setState({user:data});
        console.log(data);
    }).catch(err=>{
        
    })
  }

  onChangePostHandler=(e)=>{
    let post = this.state.postsInput;
    post[e.target.name]= e.target.value;
    this.setState({postsInput:post});
  }

   postHandler=(e)=>{
    let access_token = localStorage.getItem('access_token');
    const requestOptions = {
        method: 'POST',
        headers: 
            { 
             'Content-Type': 'application/json' ,
             'Authorization':access_token
            },
        body:JSON.stringify(this.state.postsInput)
    };
    fetch(new Constant().connection_string+'post/create',requestOptions)
    .then(response=>{
        return response;
    }).then((data)=>{
        this.getAllPosts();
        document.getElementById('content').value='';
    }).catch(err=>{
    })
    
  }

  likeHandler=(e,id)=>{
    console.log(new Constant().connection_string+'like/'+id);
    let access_token = localStorage.getItem('access_token');
    const requestOptions = {
        method: 'POST',
        headers: 
            { 
             'Content-Type': 'application/json' ,
             'Authorization':access_token
            },
    };
    fetch(new Constant().connection_string+'like/'+id,requestOptions)
    .then(response=>{
        console.log(response);
        return response.json();
    }).then((data)=>{
        let updatedPosts = this.state.posts;
        updatedPosts = updatedPosts.map((value)=>{
          if(value.id === id)
            return data;
          return value;
        })
        console.log(updatedPosts);
        this.setState({posts:updatedPosts});
    }).catch(err=>{
    })
    if(e.target.classList.contains('fa-thumbs-o-up')){
      e.target.classList.remove('fa-thumbs-o-up');
      e.target.classList.add('fa-thumbs-o-down');
    }else{
      e.target.classList.remove('fa-thumbs-o-down');
      e.target.classList.add('fa-thumbs-o-up');
    }
  }

  render(){
    return (
      <div className="App">
          <Header headerBtn1='Profile' headerBtn2='Home' headerBtn3='LogOut'/>
          <div className='feed'>
            <UserInfo className='userInfo' user={this.state.user}></UserInfo>
            <Post posts={this.state.posts} className='postInfo' post={this.postHandler} onChangePostInput={this.onChangePostHandler} likePost={this.likeHandler}></Post>
          </div>
      </div>
    );
  }
}

export default Feed;
