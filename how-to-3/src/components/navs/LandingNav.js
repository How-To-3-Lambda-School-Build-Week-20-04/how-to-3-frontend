import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Nav = styled.nav `

`
export default function LandingNav() {
    return (
        <Nav>
          <div>

            <Link className='nav-item' to='/'>Home</Link>
          </div>
          <div>
            <Link to='/login'>Log in </Link>
            <Link to='/register'>Sign Up</Link>

          </div>

        </Nav>
    )
}
