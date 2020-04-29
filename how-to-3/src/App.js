import React,{useState} from 'react';
import {BrowserRouter as Router,Route,Switch,Link } from 'react-router-dom'
import * as yup from 'yup'
import axios from 'axios'
import styled from 'styled-components'
import Login from './components/Login';
import PrivateRoute from './utilities/PrivateRoute';
import './App.css';

//Component Imports
import UserhomePage from './components/homepages/UserhomePage';
import Landing from './components/homepages/Landing'

function App() {
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

//   return (
//     <Router>
//       <div className="App-header">
//         <Route exact path="/" component={Login} />
//           <PrivateRoute exact path="/howtopage" component={HowToPage} />





//Yup validatiaon requirements
const formSchema = yup.object().shape({
  username:yup
  .string()
  .required('Create a new user name ')

})

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
  const [userLoggedIn,setUserLoggedIn] = useState({})

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
    setLoginData({...loginData,
      [name] :value
      
      })
    
  }
  const onSignup = evt =>{
    evt.preventDefault()
    axios.post(postNewUser,signupData)
    .then(res=>{
      console.log(res.data + 'success')
    })
    .catch(err=>{
      console.log(err)
    })

    setSignupData(initialSignup)

  }


  return (
    <Router>
      <div className="App">

        


        <Switch>

          <Route path='/:user/homepage' >
            <UserhomePage
            
            
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
