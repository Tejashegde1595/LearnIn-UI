import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Post from './Components/Post';
import UserInfo from './Components/UserInfo';
import News from './Components/News';
import PostsFeed from './Components/PostsFeed';
import { Component } from 'react';

class App extends Component {
  
  constructor(){
    super();
    this.state={
        posts:[],
        postsInput:{
            content:''
        }
    }
  }

  componentDidMount(){
    this.getAllPosts();
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
    fetch('http://localhost:8080/api/post/all',requestOptions)
    .then(response=>{
        return response.json();
    }).then((data)=>{
        this.setState({posts:data});
        console.log(data);
    }).catch(err=>{
        
    })
  }

  onChangePostHnadler=(e)=>{
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
    fetch('http://localhost:8080/api/post/create',requestOptions)
    .then(response=>{
        return response;
    }).then((data)=>{
        this.getAllPosts();
        document.getElementById('content').value='';
    }).catch(err=>{
    })
    
  }


  render(){
    return (
      <div className="App">
          <Header headerBtn1='Profile' headerBtn2='Home' headerBtn3='LogOut'/>
          <div className='feed'>
            <UserInfo className='userInfo'></UserInfo>
            <Post posts={this.state.posts} className='postInfo' post={this.postHandler} onChangePostInput={this.onChangePostHnadler}></Post>
          </div>
      </div>
    );
  }
}

export default App;
