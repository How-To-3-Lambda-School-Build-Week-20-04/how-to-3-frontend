import React,{useEffect,useState,} from 'react'
import {Link,Switch,Route,BrowserRouter,useRouteMatch} from 'react-router-dom'
import Axios from 'axios'
import styled from 'styled-components'
import gsap from "gsap"

import UserAside from '../aside/UserAside'
import UserNav from '../navs/UserNav'
import Postpage from '../postpage/Postpage'
import Todos from '../todos/Todos'


const url =''

const TodoContainer = styled.div `
    display:flex;
    flex-direction:row-reverse;
    flex-wrap:wrap;

    background:darkgreen(tan,20%);
    width:90%;
    margin:0 auto;
    padding:3%;

`
const Button = styled.button `
    position:fixed;
    padding:1% .5%;
    margin-left:.3%;
    margin-top:.3%;
    border-radius:25%;
    box-shadow:-3px -2px .3rem black;
    font-size:1rem;

    


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
        gsap.from('.gsapDiv',{opacity:0,duration:1})
        
    }


    
    return (
        <div>
            <UserNav/>

            <main className='container'>

            <Switch>
                  <Route >
                        <div className='asideDiv'>
                            {!asideShow ? <Button onClick={showAside} >show menu</Button> : <UserAside addTodo={addTodo} />}
                            
                            {asideShow ? <Button onClick={showAside}>hide menu</Button>:null}
                            
                        </div>
                        
                        <div>
                           
                                    
                             <TodoContainer >
                             {toDos.map(todo=>{
                                return (  
                                            
                                                 
                                <Todos todoInfo={todo} userLoggedIn={userLoggedIn}/>
                                                 
                                )
                                })}
                                </TodoContainer>
                                    
                                
                                    
                                
                       
                            
                        </div>
                  </Route>
                
                  <Route path = { `/post/:posttitle`}>
                                
                <Postpage/>
                </Route>
                    
            </Switch>
                
            </main>
            
        </div>
    )
}
