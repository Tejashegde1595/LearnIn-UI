import React from 'react';

const EducationInfo=(props)=>{
    let selectedInfo = props.userProfile[props.entries.id];
    let displaySelectedInfo=null;
    console.log(props.entries.id);
    console.log(selectedInfo);
    if(selectedInfo.length>0){
         displaySelectedInfo = selectedInfo.map((value,index)=>{
             return(
                <div>
                    <p>School Name</p>
                    <p>{value.school_name}</p>
                   {/*  <label for='name'>{props.entries.name}</label>
                    <p name='name'>{value.school_name}</p>           
                    <label for='fromDate'>{props.entries.fromDate}</label>
                    <p>{value.from_date}</p>
                    <label for='toDate'>{props.entries.toDate}</label>
                    <input type='date' className='form-control'  onChange={props.onChangeInput} value={value.to_date} name='toDate' id='toDate' disabled></input>
                    <label for='subject'>{props.entries.subject}</label>
                    <input type='text' className='form-control'  onChange={props.onChangeInput} name='subject' id='subject' disabled></input>
                    <label for='grade'>{props.entries.grade}</label>
                    <input type='text' className='form-control'  onChange={props.onChangeInput} value={value.grade} name='grade' id='grade' disabled></input>
                    <br></br>
                    <input type='submit' id={props.entries.id} className='btn btn-success' value='Edit' id={props.id} disabled></input>
                    <h3 className='status'>{props.message}</h3> */}
                </div>
             )
        })
    }
    return(
        <div className='container'>
            {  selectedInfo.length<0?
            <form>
                <label for='name'>{props.entries.name}</label>
                <input type='text' className='form-control' id='name' name='name' onChange={props.onChangeInput} required></input>           
                <label for='fromDate'>{props.entries.fromDate}</label>
                <input type='date' className='form-control'  onChange={props.onChangeInput} name='fromDate' id='fromDate' required></input>
                <label for='toDate'>{props.entries.toDate}</label>
                <input type='date' className='form-control'  onChange={props.onChangeInput} name='toDate' id='toDate' required></input>
                <label for='subject'>{props.entries.subject}</label>
                <input type='text' className='form-control'  onChange={props.onChangeInput} name='subject' id='subject' required></input>
                <label for='grade'>{props.entries.grade}</label>
                <input type='text' className='form-control'  onChange={props.onChangeInput} name='grade' id='grade' required></input>
                <br></br>
                <input type='submit' id={props.entries.id} className='btn btn-success' value='Add' id={props.id}></input>
                <h3 className='status'>{props.message}</h3>
            </form>
            :displaySelectedInfo}
        </div>
    )
}

export default EducationInfo;