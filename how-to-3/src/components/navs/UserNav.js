import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Nav = styled.nav `
background:black;
width:80%;
margin:0 auto;
padding:1%;
.nav-item{
  text-decoration:none;
  color:white;
}
`

export default function UserNav(props) {
    return (
        <Nav>
          <div>

          <span> 
            <Link className='nav-item' to='/'>Log Out</Link> 
            
          
          </span>
          </div>
          
        </Nav>
    )
}
