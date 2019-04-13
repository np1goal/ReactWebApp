import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import './SignInUp.css';


class SignInUp extends Component {
    render() {
        return (
        <div className="App">
            <div className = "App__Aside"></div>
            <div className = "App__Form">
                {/* Creates Page Switcher */}
                <div className = "PageSwitcher"> 
                <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In </NavLink> 
                <NavLink exact to="/sign-up" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
                </div>

                {/* Creates switching between Form Titles */}
                <div className="FormTitle">
                <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or
                <NavLink exact to="/sign-up" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
                </div>

                {/* Routes to SignUp Form */}
                <Route exact path="/sign-up" component={SignUpForm}>
                </Route>
                {/* Routes to SignIn Form */}
                <Route path="/sign-in" component={SignInForm}>
                </Route>
            </div>
          </div>
        ); 
    }
}

export default SignInUp;