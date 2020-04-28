import React from 'react'

export default function CreateTodo(props) {
    const {onInputChange} = props
    return (
        <div>
            <input type='text' name='title' placeholder='Title'onChange={onInputChange}/>
            <input type='text' name='subtitle' onChange={onInputChange}/>
            <input type='text' name='description' onChange={onInputChange}/>
            <input type='file' name= 'file' onChange={onInputChange}/>
        </div>
    )
}
