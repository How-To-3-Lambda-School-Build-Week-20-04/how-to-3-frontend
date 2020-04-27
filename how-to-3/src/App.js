import React,{useState} from 'react';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import * as yup from 'yup'
import axios from 'axios'

//Component Imports
import Login from './components/forms/Login'
import Signup from './components/forms/Signup'

//Css Import
import './App.css';
import UserhomePage from './components/homepages/UserhomePage';

//database url
const url = 'https://how-to-application.herokuapp.com/'
const postNewUser= url+'/api/auth/register'


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

function App() {
  const [signupData,setSignupData] =useState(initialSignup)
  const [loginData,setLoginData] = useState(null)

  const onChangeHandle = evt =>{
    const name = evt.target.name
    const value = evt.target.value
    setSignupData({...signupData,
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
          <Route path='/:user/homepage'>
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
