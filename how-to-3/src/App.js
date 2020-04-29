import React,{useState} from 'react';
import {BrowserRouter as Router,Route,Switch,Link,useRouteMatch, Redirect } from 'react-router-dom'

import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';

//Component Imports
import Login from './components/forms/Login';
import Signup from './components/forms/Signup';
import UserhomePage from './components/homepages/UserhomePage';
import Landing from './components/homepages/Landing';
import Postpage from './components/postpage/Postpage';


//Css Import
import './App.css';


//database url
const url = 'https://how-to-application.herokuapp.com/'
const postNewUser= url+'/api/auth/register'




const initialSignup = {
  username:'',
  email:'',
  password:'',

}

const initialLogin = {
  username:'',
  password:'',
}

function App() {
  const [signupData,setSignupData] =useState(initialSignup)
  const [loginData,setLoginData] = useState(initialLogin)
  const [loginErrors,setLoginErrors] = useState({
    email:'',
    password:''
  })
  const [userLoggedIn,setUserLoggedIn] = useState({})
  const [isUserLoggedIn,setIsUserLoggedIn]= useState(false)

  const onChangeHandle = evt =>{
    const name = evt.target.name
    const value = evt.target.value
    setSignupData({...signupData,
      [name] :value
      
      })
    
  }

  const onLoginChange = evt =>{
    const name = evt.target.name
    const value = evt.target.value
    yup
    .reach(loginFormscheme,name)
    .validate(value)
    .then(valid=>{
      setLoginErrors({...loginErrors,[name]:''})
      setLoginData({...loginData,
        [name] :value
        
        })
    })
    .catch(err=>{
      setLoginErrors({...loginErrors,[name] :err.errors[0]})
    })
   
    
  }

  const onLoginClick = evt=>{
    evt.preventDefault()
    axios.post(url,loginData)
      .then(res=>{
        setUserLoggedIn(res.data)
        setIsUserLoggedIn(true)
        return <Redirect to={`/${res.data.name}/homepage`}/>

      })

      .catch(err=>{
        return <Redirect to='/signup'/>

      })
    
  }
  const onSignup = evt =>{
    evt.preventDefault()
    axios.post(postNewUser,signupData)
    .then(res=>{
      console.log(res.data + 'success')
      return <Redirect to='/login'/>
    })
    .catch(err=>{
      console.log(err)
    })

    setSignupData(initialSignup)

  }

  //Yup validatiaon requirements
const loginFormscheme = yup.object().shape({
  email: yup
  .string()
  .email('must be a valid email ')
  .required('valid email required'),
  
  password: yup
  
    .string()
    .required()
  
})


  return (
    <Router>
      <div className="App">

        


        <Switch>

        <Route path = { `/post/:posttitle`}>
                            
           <Postpage/>
         </Route>

          <Route path='/:user/homepage' >
            <UserhomePage
            
            userLoggedIn = {userLoggedIn}
            />
          </Route>
          
          <Route path='/signup'>
          <Signup
          //Signup Props
          onChangeHandle= {onChangeHandle}
          onSignup = {onSignup}
          signupData ={signupData}
          />
          </Route>
          
          <Route path='/login'>
            <Login
            //Login Props 
            onLoginChange={onLoginChange}
            loginData = {loginData}
            loginErrors={loginErrors}
            onLoginClick={onLoginClick}

            
            />
          </Route>

          <Route path='/'>
            <Landing
            
            />

          </Route>

        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
