import React from 'react'
import styled from 'styled-components'

import UserNav from '../navs/UserNav'
import UserAside from '../aside/UserAside'



export default function Postpage(props) {
    const {toDos,postSelected} = props

    


    function search(nameKey, myArray){
        for (var i=0; i < myArray.length; i++) {
            
            if (myArray[i].title === nameKey) {
                return myArray[i];
                
            }
        }
    }
    const postinfo = search(postSelected,toDos)
    console.log(postinfo)
    

    
    
    return (
        <div className='container'>
            <UserNav back/>
            <h2> {postinfo.title} </h2>
            <h4> {postinfo.subtitle} </h4>
            <p> {postinfo.description} </p>
            
            
        </div>
    )
}
