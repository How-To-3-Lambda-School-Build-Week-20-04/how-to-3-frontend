import React from 'react';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'

//Component Imports
import Login from './components/forms/Login'
import Signup from './components/forms/Signup'

//Css Import
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          
          <Route path='/signup'>
          <Signup
          //Signup Props
          
          />
          </Route>
          
          <Route path='/login'>
            <Login
            //Login Props 

            
            />
          </Route>
          
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
