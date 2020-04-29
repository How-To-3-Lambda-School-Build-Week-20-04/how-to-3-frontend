import React, {useState} from "react";
import { axiosWithAuth } from "../../utilities/axiosWithAuth";

import LandinigNav from '../navs/LandingNav'
import LandingNav from "../navs/LandingNav";

const Register = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    email: ""
  })

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
    console.log('handleChange results: ', credentials)
  }
  
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
        <h1>How To App</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <input 
              type='text'
              name='username'
              placeholder='Username'
              value={credentials.username}
              onChange={handleChange}
            />
            <br/>
            <input 
              type='password'
              name='password'
              placeholder='Password'
              value={credentials.password}
              onChange={handleChange}
            />
            <br/>
            <input 
              type='email'
              name='email'
              placeholder='Email'
              value={credentials.email}
              onChange={handleChange}
            />
            <br/>
            <button>Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;