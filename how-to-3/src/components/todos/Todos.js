import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { axiosWithAuth } from '../../utilities/axiosWithAuth';
import Axios from 'axios';


const TodoDiv = styled.div `

    
    margin: 2% auto;
    background:black;
    color:white;
    padding:10%;
    border-radius:5px;
    box-shadow:0 0 10% ;

    .source{
        width:80%;
        margin:0 auto;
    }
`


export default function Todos(props) {
    const {todoInfo} = props;
    

// const fileType =todoInfo.file[0].type

const todoSteps = todoInfo.steps
const steps = Object.values(todoSteps)

axiosWithAuth()
.get()

    return (
        <TodoDiv>
            {/* <img  alt='userImage'/> */}
            {/* <h4>{LouserggedIn.username} </h4> */}
            <ul>
                
            </ul>
            <h2>{todoInfo.title}</h2>
           
            <h4>{todoInfo.subtitle} </h4>
            <p>{todoInfo.description} </p>
            <ol>
                {steps.map(step=>{
                  return  <li>{ step}</li>
                })}
            </ol>
            
            {/* {fileType.slice(0,5)==='video' ?
             <video className='source'  controls>
                 <source src={URL.createObjectURL(todoInfo.file[0])}/>
             </video>
             
             : <img className='source'  src={URL.createObjectURL(todoInfo.file[0])}/>} */}

             <Link to={ `/post/${todoInfo.title}`}>
             show more
             </Link>

            <div>
                <p>likes: {todoInfo.likes} </p>
            </div>
        </TodoDiv>
    )
}
