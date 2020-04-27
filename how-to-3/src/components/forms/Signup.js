import React,{useState} from 'react'
import styled from 'styled-components'
import * as yup from 'yup'





const Form = styled.form `

`   

export default function Signup(props) {
    const {onChangeHandle,onSignup,signupData} = props
    
    return (
        <Form>
            <div className='input-box'>
                <label htmlFor='username'>
                    UserName
                </label>
                <input name='username' value={signupData.username} type='text' placeholder='User Namae' onChange={onChangeHandle} ></input>
            </div>

            <div className='input-box'>
                <label htmlFor='Email'>
                    Email 
                </label>
                <input name='email' type='email' value={signupData.email} placeholder='Email'onChange={onChangeHandle}></input>
            </div>

            <div className='input-box'>
                <label htmlFor='password'>
                    Password
                </label>
                <input name='password' type='password' value={signupData.password} placeholder='Password'onChange={onChangeHandle}></input>
            </div>

            <button type='submit'onClick={onSignup}>Sign Up</button>
            
        </Form>
    )
}
