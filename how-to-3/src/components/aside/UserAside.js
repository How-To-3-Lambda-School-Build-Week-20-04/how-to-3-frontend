import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import CreateTodo from '../todos/CreateTodo'

const Aside = styled.div `
    position:fixed;
    top:12vh;
    width:fit-content;
    
    background:lightblue;
    padding:2.5%;
    border-radius:5px;
    
    ul{
        list-style:none;
        
    }
    input{
        margin:2% auto;
        border-radius:8px;
        padding:3%;
        font-size:1rem;
        

    }
    button{
        background:cornflowerblue;
        padding:8% 25%;
        font-size:1rem;
        margin-left:4%;
        margin-top:2%;
        transition:all .4 ease-in-out;
        color:white;

        &:hover{
            background:lightseagreen;
        }
    }
    

`
const initialNewTodo = {
    title:'',
    subtitle:'',
    description:'',
    steps:{},
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

    const onstepsInputChange = evt=>{
        const name = evt.target.name
        const value = evt.target.value
        setNewTodo({...newTodo,
            steps:{...newTodo.steps,
                [name]:value
            }
        })
    }

    // const onFileChange = evt=>{
    //     const name = evt.target.name
    //     const value = evt.target.files
    //     setNewTodo({...newTodo,
    //         [name]:value
    //     })

    // }

    const postNewtodo = evt=>{
        addTodo(newTodo)
        
        setNewTodo(initialNewTodo)
    }

   
    
    return (
        <Aside className='aside'>
            <div>
                {/* <img src='' id='userImg' alt='user img'/> */}
                <h2>User Name</h2>
                
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
            <CreateTodo onInputChange={onInputChange}  setNewTodo={setNewTodo} newTodo={newTodo}/>
            <button id='createBtn' onClick={postNewtodo}>Create To Do</button>
        </Aside>
    )
}
