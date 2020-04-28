import React,{useEffect,useState} from 'react'
import Axios from 'axios'

import UserAside from '../aside/UserAside'
import UserNav from '../navs/UserNav'

import Todos from '../todos/Todos'

const url =''




export default function UserhomePage(props) {

    const [toDos,setToDos] = useState([])
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
        setToDos([...setToDos,newTodo])
    }
    
    return (
        <div>
            <UserNav/>

            <div>
                <UserAside addTodo={addTodo}/>
                
            </div>

            <div>
                {toDos.map(todo=>{
                return    <Todos todoInfo={todo}/>
                })}
            </div>
            

            
        </div>
    )
}
