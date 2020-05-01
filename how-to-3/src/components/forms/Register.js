import React, {useState} from "react";
import { axiosWithAuth } from "../../utilities/axiosWithAuth";
import styled from 'styled-components'

import LandinigNav from '../navs/LandingNav'
import LandingNav from "../navs/LandingNav";

const Title = styled.h1`
text-align:center
`
const LoginDiv = styled.div`


width:80%;
margin:0 auto;
margin-top:1%;
padding:5%;
form{
width:60%;
margin:0 auto;
background:whitesmoke;
text-align:center;
padding:10%;
border-radius:5px;
box-shadow:0 -2px 6px black;
h2{
  text-shadow:0 3px 2px black;
  padding:3%;
  background:black;
  color:white;
}
div{
  border:1px solid black;
  padding:17%;
}
input{
  margin:5% auto;
  padding:3%;
  text-align:center;
  border-radius:8px;
  box-shadow:0 0 10% black;
  transition:all .7 ease-in-out;
  &:focus{
    background:lightblue;
  }
}
button{
  margin-top:4%;
  background:lightgreen;
  padding:5% 19%;
  border-radius:5px;
  transition:all .4 ease-in-out;
  &:hover{
    background:lightblue;

  }
}

}
`

const Errors = styled.p`
color:red;
font-size:.8rem;
background: rgb(210,209,235);
background: linear-gradient(90deg, rgba(210,209,235,1) 0%, rgba(255,171,147,0.6152836134453781) 43%, rgba(255,255,255,1) 100%);
`


const Register = props => {

const {handleChange,credentials,loginErrors} = props
  
  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
    .post("/api/auth/register", credentials)
    .then(res => {
      console.log(res);
      localStorage.setItem('token', res.data.payload);
      props.history.push('/login');
    })
  }

  return (
    <>
    <LandingNav/>
      <div className='container'>
        <Title>How To App</Title>
        <LoginDiv>
          <form onSubmit={handleSubmit}>
          <h2>Signup Today</h2>
            <div>  
            <Errors> {loginErrors.username} </Errors> 
              <input 
                type='text'
                name='username'
                placeholder='Username'
                value={credentials.username}
                onChange={handleChange}
              />
              <br/>
              <Errors>{loginErrors.password} </Errors>
              <input 
                type='password'
                name='password'
                placeholder='Password'
                value={credentials.password}
                onChange={handleChange}
              />
              <br/>
              <Errors>{loginErrors.email} </Errors>
              <input 
                type='email'
                name='email'
                placeholder='Email'
                value={credentials.email}
                onChange={handleChange}
              />
              <br/>
            <button>Sign Up</button>
            </div>
          </form>
        </LoginDiv>
      </div>
    </>
  );
};

export default Register;