import React,{useState} from 'react';

import {BrowserRouter as Router,Route,Switch,Link } from 'react-router-dom'
import * as yup from 'yup'
import axios from 'axios'
import styled from 'styled-components'
import login from './components/forms/login';
import PrivateRoute from './utilities/PrivateRoute';
import './App.css';

//Component Imports

import UserhomePage from './components/homepages/UserhomePage';
import Landing from './components/homepages/Landing';
import Postpage from './components/postpage/Postpage';
import Register from './components/forms/Register';



//   return (
//     <Router>
//       <div className="App-header">
//         <Route exact path="/" component={Login} />
//           <PrivateRoute exact path="/howtopage" component={HowToPage} />







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
  // const [signupData,setSignupData] =useState(initialSignup)
  // const [loginData,setLoginData] = useState(initialLogin)
  const [loginErrors,setLoginErrors] = useState({
    email:'',
    password:''
  })
  // const [userLoggedIn,setUserLoggedIn] = useState({})
  // const [isUserLoggedIn,setIsUserLoggedIn]= useState(false)

  // const onChangeHandle = evt =>{
  //   const name = evt.target.name
  //   const value = evt.target.value
  //   setSignupData({...signupData,
  //     [name] :value
      
  //     })
    
  // }

  // const onLoginChange = evt =>{
  //   const name = evt.target.name
  //   const value = evt.target.value
  //   yup
  //   .reach(loginFormscheme,name)
  //   .validate(value)
  //   .then(valid=>{
  //     setLoginErrors({...loginErrors,[name]:''})
  //     setLoginData({...loginData,
  //       [name] :value
        
  //       })
  //   })
  //   .catch(err=>{
  //     setLoginErrors({...loginErrors,[name] :err.errors[0]})
  //   })
   
    
  // }

  // const onLoginClick = evt=>{
  //   evt.preventDefault()
    // axios.post(url,loginData)
    //   .then(res=>{
    //     setUserLoggedIn(res.data)
    //     setIsUserLoggedIn(true)
    //     return <Redirect to={`/${res.data.name}/homepage`}/>

    //   })

      // .catch(err=>{
      //   // return <Redirect to='/signup'/>

      // })
    
  
  // const onSignup = evt =>{
  //   evt.preventDefault()
  //   axios.post(postNewUser,signupData)
  //   .then(res=>{
  //     console.log(res.data + 'success')
  //     return <Redirect to='/login'/>
  //   })
  //   .catch(err=>{
  //     console.log(err)
  //   })

  //   setSignupData(initialSignup)

  // }

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
            
            // userLoggedIn = {userLoggedIn}
            />
          </Route>
          
          <Route path='/register'component={Register}/> 
            
          
          
          <Route path='/login'component={login}/>
            
        

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
