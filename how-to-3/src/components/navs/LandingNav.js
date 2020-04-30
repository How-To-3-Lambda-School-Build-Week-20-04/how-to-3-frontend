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
.navContainer{
  display:flex;
  justify-content:space-between;
}
.nav-item{
  width:80%;
  text-decoration:none;
  text-align:center;
  color:white;
  margin:0 .2%;
  transition:all .4s ease-in;
  padding:2%;
  &:hover{
    color:lightblue;
  }
}
`
export default function LandingNav() {
    return (
        <Nav>
          <div>

            <Link className='nav-item' to='/'>Home</Link>
          </div>
          <div className='navContainer'>
          
          <a href='#' className = 'nav-item'>About us</a>
          <a href='#' className='nav-item'>Contact us</a>
          <a href='#' className='nav-item'>FAQ</a>
          
          <Link className='nav-item' to='/login'>Log in </Link>
          <Link className='nav-item' to='/register'>Sign Up</Link>



          </div>

        </Nav>
    )
}
