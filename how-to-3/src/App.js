import React, { useState } from "react";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import styled from "styled-components";
import Login from "./components/forms/Login";
import PrivateRoute from "./utilities/PrivateRoute";

import "./App.css";

//Component Imports

import UserhomePage from "./components/homepages/UserhomePage";
import Landing from "./components/homepages/Landing";
import Postpage from "./components/postpage/Postpage";
import Register from "./components/forms/Register";

//   return (
//     <Router>
//       <div className="App-header">
//         <Route exact path="/" component={Login} />
//           <PrivateRoute exact path="/howtopage" component={HowToPage} />

// const initialSignup = {
//   username:'',
//   email:'',
//   password:'',

// }

// const initialLogin = {
//   username:'',
//   password:'',
// }

function App() {
  // const [signupData,setSignupData] =useState(initialSignup)
  // const [loginData,setLoginData] = useState(initialLogin)
  const [userLoggedIn,setUserLoggedIn] = useState({})
  // const [isUserLoggedIn,setIsUserLoggedIn]= useState(false)
  const [toDos,setToDos] = useState([])
  const [asideShow,setasideShow] = useState(false) 
  const [postSelected,setPostSelected]=useState('')
     
    

  const [loginErrors, setLoginErrors] = useState({
    username: "",
    password: ""
  });
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    email: ""
  });
  const initialSignUp = {
    username: "",
    password: "",
    email: ""
  };

  const signUpScheme = yup.object().shape({
    username: yup
      .string()
      .required("valid username ")
      .min(5, "username must be atleast 5 characters"),
    password: yup
      .string()
      .required("A password is requred")
      .min(8, "password must be atleast 8 characters"),
    email: yup.string().email("Valid email Required")
  });
  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    yup
      .reach(signUpScheme, name)
      .validate(value)
      .then(valid => {
        setLoginErrors({ ...loginErrors, [name]: "" });
      })
      .catch(err => {
        setLoginErrors({ ...loginErrors, [name]: err.errors[0] });
      });

    setCredentials({
      ...credentials,
      [name]: value
    });

    // console.log('handleChange results: ', credentials)
  };

  

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

  const setpost = evt =>{
    setPostSelected(evt.target.name)
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/post/:id">
            <Postpage 
            toDos={toDos}
            postSelected={postSelected}
            />
          </Route>

          <Route path="/:user/homepage">
            <UserhomePage
            toDos={toDos}
            setToDos={setToDos}
            asideShow={asideShow}
            setasideShow={setasideShow}
            setpost={setpost}

            userLoggedIn = {userLoggedIn}
            />
          </Route>

          <Route path="/register">
            <Register
              loginErrors={loginErrors}
              handleChange={handleChange}
              credentials={credentials}
            />
          </Route>

          <Route path="/login">
            <Login loginErrors={loginErrors}
             setLoginErrors={setLoginErrors} 
             userLoggedIn={userLoggedIn}
             setUserLoggedIn={setUserLoggedIn}
             
             />
          </Route>

          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
