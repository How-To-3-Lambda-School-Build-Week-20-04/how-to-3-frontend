import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Nav = styled.nav `

`

export default function UserNav(props) {
    return (
        <Nav>
          <div>

            <Link className='nav-item' to='/'>Log Out</Link>
          </div>
          
        </Nav>
    )
}
