import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './utilities/PrivateRoute';
import HowToPage from './components/HowToPage';
import './App.css';


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

  return (
    <Router>
      <div className="App-header">
        <Route exact path="/" component={Login} />
          <PrivateRoute exact path="/howtopage" component={HowToPage} />
      </div>
    </Router>
  );
}

export default App;
