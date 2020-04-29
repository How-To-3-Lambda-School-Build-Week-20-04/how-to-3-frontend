import React from 'react'

export default function CreateTodo(props) {
    const {onInputChange,onFileChange,newTodo} = props
    return (
        
        <div>
            <input type='text' name='title' placeholder='Title'onChange={onInputChange}/>
            <input type='text' name='subtitle' placeholder='Subtitle' onChange={onInputChange}/>
            <textarea type='text' name='description' placeholder='Description' onChange={onInputChange}/>
            <input type='file' name= 'file' onChange={onFileChange}/>
        </div>
    )
}
