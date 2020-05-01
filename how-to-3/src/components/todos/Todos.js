import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { axiosWithAuth } from '../../utilities/axiosWithAuth';
import Axios from 'axios';


const TodoDiv = styled.div `


    display:flex;
    flex-direction:column;
    margin: 2% auto;
    background:black;
    color:white;
    padding:10%;
    border-radius:5px;
    box-shadow:0 0 10% ;
    transition: all .8s ease;
    text-align:center;
    #link{
        text-decoration:none;
        color:white;
        background:cornflowerblue;
        

    }
    &:hover{
        background:lightslategray;
    }

    .source{
        width:80%;
        margin:0 auto;
    };
    img{
        position:relative;
        width:20%;
        height:5%;
        float:left;
        margin-left:60%;
        align-content:flex-start;
    }

    @media screen and (max-width:800px){
        width:100%;
    }
`
const Close = styled.button `
    

`


export default function Todos(props) {
    const {todoInfo,setpost} = props;
    

// const fileType =todoInfo.file[0].type

const todoSteps = todoInfo.steps
const steps = Object.values(todoSteps)



    return (
         
       
        <TodoDiv>
                
           
            {/* <h4>{LouserggedIn.username} </h4> */}
            <ul>
                
            </ul>
            <h2>{todoInfo.title}</h2>
           
            <h4>{todoInfo.subtitle} </h4>
            {/* <p>{todoInfo.description} </p> */}
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

             <Link onClick={setpost} name={todoInfo.title} id='link' to={ `/post/${todoInfo.title}`}>
             show more
             </Link>

            <div>
                <p>likes: {todoInfo.likes} </p>
            </div>

            <Close>Delete</Close>
           
        </TodoDiv>
        
    )
}
