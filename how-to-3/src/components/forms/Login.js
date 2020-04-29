import React from 'react'
import styled from 'styled-components'
import * as yup from 'yup'
import LandingNav from '../navs/LandingNav'




export default function Login(props) {
    const {onLoginChange,loginData,loginErrors,onLoginClick} = props
    
    return (
        <div>
            <LandingNav/>
            <div className='input-box'>
                <label htmlFor='Email'>
                    Email 
                </label>
                <p> {loginErrors.email} </p>
                <input name='email' type='email' value={loginData.email} placeholder='Email'onChange={onLoginChange}></input>
            </div>

            <div className='input-box'>
                <label htmlFor='password'>
                    Password
                </label>
                <p>{loginErrors.password} </p>
                <input name='password' type='password' value={loginData.password} placeholder='Password'onChange={onLoginChange}></input>
            </div>
            
            <button onClick={onLoginClick}>Login</button>
        </div>
    )
}
