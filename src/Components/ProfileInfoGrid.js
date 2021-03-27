import React from 'react';
import '../Styles/ProfileInfoGrid.css';
import EducationInfo from './EducationInfo';
const ProfileInfoGrid=(props)=>{
    console.log(props.userProfile)
    let profileEntries = props.profileEntries.map((value,index)=>{
        return(
            <div className='column' name={value.name} onClick={props.changeProfileInputHandler} id={value.id}>
            <h2>{value.name}</h2>
            </div>
        )
    })
    let profileEntriesForWork = props.profileEntriesForWork.map((value,index)=>{
        return(
            <div className='column' name={value.name} onClick={props.changeProfileInputHandler} id={value.id}>
            <h2>{value.name}</h2>
            </div>
        )
    })
    return(
        <div className='container profileGrid'>
            <div className='row header-row-profile'>
                {profileEntries}
                {profileEntriesForWork}
            </div>
            <div className='row content-row-profile'>
                <EducationInfo name={props.name} fromDate={props.fromDate} toDate={props.toDate} grade={props.grade} id={props.id} entries={props.headerForProfileInput} userProfile={props.userProfile}></EducationInfo>
            </div>
        </div>
    )
}

export default ProfileInfoGrid;