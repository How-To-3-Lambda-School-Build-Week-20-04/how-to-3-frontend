import React from 'react'
import styled from 'styled-components'


const TodoDiv = styled.div `

    width:25%;
    margin: 2%;
    background:black;
    color:white;
    .source{
        width:80%;
        margin:0 auto;
    }
`


export default function Todos(props) {
    const {todoInfo,userLoggedIn} = props;
    const fileType =todoInfo.file[0].type
    
const getDate = new Date()
    let hours = ''
if(getDate.getHours()> 12){
    hours = (getDate.getHours() ) - 12
}


    return (
        <TodoDiv>
            <img src={userLoggedIn.image} alt='userImage'/>
            <h2>{userLoggedIn.username} </h2>

            <h3>{todoInfo.title}</h3>
            <p>{hours} : {getDate.getMinutes()} </p>
            <h4>{todoInfo.subtitle} </h4>
            <p>{todoInfo.description} </p>
           
            
            {fileType.slice(0,5)==='video' ?
             <video className='source'  controls>
                 <source src={URL.createObjectURL(todoInfo.file[0])}/>
             </video>
             
             : <img className='source'  src={URL.createObjectURL(todoInfo.file[0])}/>}

            
        </TodoDiv>
    )
}
