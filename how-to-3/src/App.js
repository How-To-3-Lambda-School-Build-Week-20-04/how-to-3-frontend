import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './components/Register';
import PrivateRoute from './utilities/PrivateRoute';
import HowToPage from './components/HowToPage';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App-header">
        <Route exact path="/" component={Register} />
          <PrivateRoute exact path="/howtopage" component={HowToPage} />
      </div>
    </Router>
  );
}

export default App;
