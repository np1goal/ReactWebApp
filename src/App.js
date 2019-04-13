import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import SignInUp from './pages/SignInUp';
import './App.css';
import SingleSignOn from './pages/SingleSignOn';


class App extends Component {
  render() {
    return (
      <Router>
        {/* Routes to SingleSignOn.js and SignInUp.js in pages folder*/}
        <div>
          <Route exact to path="/" component={SingleSignOn}>
          </Route>
          <Route path="/sign-in" component={SignInUp}></Route>
          <Route path="/sign-up" component={SignInUp}></Route>
        </div>
        
      </Router>
    );
  }
}

export default App;
