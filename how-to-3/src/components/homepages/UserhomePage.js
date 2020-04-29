import React,{useEffect,useState,} from 'react'
import {Link,Switch,Route,BrowserRouter,useRouteMatch} from 'react-router-dom'
import Axios from 'axios'
import styled from 'styled-components'

import UserAside from '../aside/UserAside'
import UserNav from '../navs/UserNav'
import Postpage from '../postpage/Postpage'
import Todos from '../todos/Todos'


const url =''

const TodoContainer = styled.div `
    display:flex;
    flex-direction:row-reverse;
    flex-wrap:wrap;

    background:lightblue;
    width:80%;
    margin:0 auto;
    padding:3%;

`



export default function UserhomePage(props) {
    const {userLoggedIn} = props

    const [toDos,setToDos] = useState([])
    const [asideShow,setasideShow] = useState(false)    
    
    //useEffect for getting the logged in users  to do's andsetting them to{ toDos}

    useEffect(()=>{
        Axios.get(url)
        .then((res)=>{
            setToDos([...toDos,res.data])
    
        })
        .catch((err)=>{
            alert('An error happened while loading To Do')
    
        })
    },[])

    const addTodo = newTodo =>{
        setToDos([...toDos,newTodo])
    }

    const showAside = evt=>{
        setasideShow(!asideShow)
    }

    const match = useRouteMatch()
    
    return (
        <div>
            <UserNav/>

            <main>

                <div>
                    {!asideShow ? <button onClick={showAside}>show menu</button> : <UserAside addTodo={addTodo}/>}
                    
                    {asideShow ? <button onClick={showAside}>hide menu</button>:null}
                </div>
                
                <div>
                   
                            
                                <TodoContainer onMouseEnter={evt=>{setasideShow(false)}}>
                                    {toDos.map(todo=>{
                                    return (  
                                    
                                         
                                             <Todos todoInfo={todo} userLoggedIn={userLoggedIn}/>
                                         
                                    )
                                    })}
                                </TodoContainer>
                            
                        
                            
                        
               
                    
                </div>
                
                
            </main>
            
        </div>
    )
}
