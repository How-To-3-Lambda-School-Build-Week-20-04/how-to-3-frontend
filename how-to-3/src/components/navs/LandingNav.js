import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Nav = styled.nav `
background:black;
width:80%;
margin:0 auto;
padding:1%;
display:flex;
justify-content:space-between;
.nav-item{
  text-decoration:none;
  color:white;
}
`
export default function LandingNav() {
    return (
        <Nav>
          <div>

            <Link className='nav-item' to='/'>Home</Link>
          </div>
          <div>
          <Link className='nav-item' to='/login'>Log in </Link>
          <Link className='nav-item' to='/register'>Sign Up</Link>

          </div>

        </Nav>
    )
}
