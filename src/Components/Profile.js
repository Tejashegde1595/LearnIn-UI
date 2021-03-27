import { Component } from "react";
import UserInfo from "./UserInfo";
import Constant from '../Constants/Constant';
import '../Styles/profile.css';
import ProfileInfo from "./ProfileInfoGrid";
class Profile extends Component{

    constructor(){
        super();
        this.state={
            user:{},
            headerForProfileInput:{
                id:'school',
                name:'school Name',
                fromDate:'fromDate',
                toDate:'toDate',
                subject:'Subject',
                grade:'grade'
            },
            profileEntriesForEducation:[
                {name:'school'},
                {name:'college'},
                {name:'bachelors'}
            ],
            profileEntriesForWork:[
                {name:'work'}
            ],
            userProfile:{
                school:[],
                college:[]
            }
        }
      }
    
    componentDidMount(){
        this.getUserInfo();
        Object.keys(this.state.userProfile).map((key)=>{
            this.getUserEducationDetails(key);
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

      getUserEducationDetails=(input)=>{
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
        fetch(new Constant().connection_string+'education/'+input+'/all/'+userId,requestOptions)
        .then(response=>{
            return response.json();
        }).then((data)=>{
            if(data.length>0){
                let userProfileState = this.state.userProfile;
                userProfileState.school.push(data);
                this.setState({userProfile:userProfileState})
            }
        }).catch(err=>{
            
        })
      }


      changeProfileInputHandler=(e)=>{
        let input = e.target.outerText;
        let selectedHeader = {...this.state.headerForProfileInput};
        selectedHeader.id=input;
        selectedHeader.name=input+' Name';
        this.setState({headerForProfileInput:selectedHeader});       
      }

    render(){
        return(
            <div className='userInfoForProfile'>
                <UserInfo  user={this.state.user}></UserInfo>
                <ProfileInfo changeProfileInputHandler={this.changeProfileInputHandler} profileEntries={this.state.profileEntriesForEducation} 
                profileEntriesForWork={this.state.profileEntriesForWork}
                headerForProfileInput={this.state.headerForProfileInput}
                userProfile={this.state.userProfile}
                ></ProfileInfo>
            </div>
        )
    }
}

export default Profile;