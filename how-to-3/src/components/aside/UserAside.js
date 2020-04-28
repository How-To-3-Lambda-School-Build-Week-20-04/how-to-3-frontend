import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import CreateTodo from '../todos/CreateTodo'

const Aside = styled.div `
    position:fixed;
    top:20%;
    width:fit-content;
    background:lightblue;

`
const initialNewTodo = {
    title:'',
    subtitle:'',
    description:'',
    file: {}

}

export default function UserAside(props) {
    const [newTodo,setNewTodo]= useState(initialNewTodo)
    const {addTodo} = props

    const onInputChange = evt=>{
        const name = evt.target.name
        const value = evt.target.value
        setNewTodo({...newTodo,
            [name]:value
        })
    }

    const onFileChange = evt=>{
        const name = evt.target.name
        const value = evt.target.files
        setNewTodo({...newTodo,
            [name]:value
        })

    }

    const postNewtodo = evt=>{
        addTodo(newTodo)
        setNewTodo(initialNewTodo)
    }

   
    
    return (
        <Aside>
            <div>
                <img src='' id='userImg' alt='user img'/>
                <p>User Name</p>
                
                <h3>Create a new How to </h3>
                <ul>
                    <li>
                        <h4>Make it fun</h4>

                    </li>

                    <li>
                        <h4>Make it Informative </h4>

                    </li>

                    <li>
                        <h4>Make it Exciting </h4>

                    </li>

                   
                </ul>
            </div>
            <CreateTodo onInputChange={onInputChange} onFileChange={onFileChange} newTodo={newTodo}/>
            <button onClick={postNewtodo}>Create To Do</button>
        </Aside>
    )
}
