import React, {useState} from "react";
import { axiosWithAuth } from "../../utilities/axiosWithAuth";
import * as yup from 'yup'
import styled from 'styled-components'
import Register from './Register';
import LandingNav from '../navs/LandingNav'

const Login = props => {
  const {loginErrors, setLoginErrors} = props
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    email: ""
  })
  
  const loginFormscheme= yup.object().shape({
    username:yup
    .string()
    .required('username Required')
    ,
    password:yup
    .string()
    .required()
  })
  const handleChange = e => {
    const name = e.target.name
    const value = e.target.value
    yup
    .reach(loginFormscheme,name)
    .validate(value)
    .then(valid=>{
      setLoginErrors({...loginErrors,[name]:''})
      
    })
    .catch(err=>{
      setLoginErrors({...loginErrors,[name] :err.errors[0]})
    })

    
    console.log('handleChange results: ', credentials)
    setCredentials({
      ...credentials,
      [name]: value
    })
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
    .post("/api/auth/login", credentials)
    .then(res => {
      console.log(res);
      localStorage.setItem('token', res.data.payload);
      props.history.push('/:username/homepage');
    })
  }
  const Title = styled.h1 `
    text-align:center
  `
  const Errors= styled.p `
    color:red;
    font-size:.8rem;
    background: rgb(210,209,235);
background: linear-gradient(90deg, rgba(210,209,235,1) 0%, rgba(255,171,147,0.6152836134453781) 43%, rgba(255,255,255,1) 100%);
  `
  const LoginDiv = styled.div `
  
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
  return (
    <>
    <LandingNav/>
     <div className='container'>
        
        <Title>How To App</Title>
        <LoginDiv>
    
        <div>
          <form onSubmit={handleSubmit}>
              <h2>Login</h2> 
            <div> 
            <Errors>{loginErrors.username}</Errors>
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
                <button>Log in</button>
              </div>  
            {/* <button exact path="/register" component={Register}>Register Here</button> */}
            
          </form>
        </div>
        </LoginDiv>
     </div>
    </>
  );
};

export default Login;