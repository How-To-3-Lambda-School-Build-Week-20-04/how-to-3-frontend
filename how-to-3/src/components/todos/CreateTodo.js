import React,{useState} from 'react'
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

    const {onInputChange,onFileChange,newTodo,onstepsInputChange,setNewTodo} = props
    const [steps,setSteps]= useState(3)
    const stepList = []
    const addStep = evt=>{
        setSteps(steps+1)
    }
    const subStep = evt=>{
        setSteps(steps-1)
        const Name = evt.target.name
        const obj = newTodo.steps
  
    
        
    }

    for(let i = 0; i < steps ;i++ ){
           stepList.push(<label>
                <h5>step{i+1}</h5>
               <input type='text' name={`step${i + 1}`} value ={newTodo.steps[`step$(i)`]} onChange={onstepsInputChange} placeholder={ `Step ${i + 1}`} />
               {/* <button name={`step${i + 1}`} onClick={subStep}>Delete Step</button> */}

           </label>
             )
    }

   




    return (
        
        <CreateDiv>
            <input type='text' name='title' value={newTodo.title} placeholder='Title'onChange={onInputChange}/>
            <input type='text' name='subtitle'  value={newTodo.subtitle} placeholder='Subtitle' onChange={onInputChange}/>
            {stepList}
            
            <button onClick={addStep}>Add steps</button>
            <textarea type='text' name='description'  value={newTodo.description} placeholder='Description' onChange={onInputChange}/>
            <input type='file' name= 'file' value={newTodo.files}   onChange={onFileChange}/>
        </CreateDiv>
    )
}