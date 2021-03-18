import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Post from './Components/Post';
import UserInfo from './Components/UserInfo';
import News from './Components/News';
import PostsFeed from './Components/PostsFeed';

function App() {
  return (
    <div className="App">
        <Header headerBtn1='Profile' headerBtn2='Home' headerBtn3='LogOut'/>
        <div className='feed'>
          <UserInfo className='userInfo'></UserInfo>
          <Post className='postInfo'></Post>
        </div>
    </div>
  );
}

export default App;
