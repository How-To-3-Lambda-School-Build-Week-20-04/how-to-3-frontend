import React from 'react'
import styled from 'styled-components'

const CreateDiv = styled.div `
    display:flex;
    flex-direction:column;
    text-align:center;
    input,textarea{
        text-align:center;
        &:focus{
            background:lightblue;
        }
    }
`

export default function CreateTodo(props) {

    const {onInputChange,onFileChange,newTodo} = props
    return (
        
        <CreateDiv>
            <input type='text' name='title' value={newTodo.title} placeholder='Title'onChange={onInputChange}/>
            <input type='text' name='subtitle'  value={newTodo.subtitle} placeholder='Subtitle' onChange={onInputChange}/>
            <textarea type='text' name='description'  value={newTodo.description} placeholder='Description' onChange={onInputChange}/>
            <input type='file' name= 'file' value={newTodo.files}   onChange={onFileChange}/>
        </CreateDiv>
    )
}
