import React, { Component } from 'react';
import {BrowserRouter as Route, Link} from 'react-router-dom';
import SignInUp from './SignInUp';

// To be added *************
// Single Sign On code
// Create 3 different apps - Profile, Classes, Settings for Sign Sign On implementation

class SingleSignOn extends Component {
    render() {
      return (
        <div>
        <div>Single Sign On Page</div>
        <br></br>
        {/* Links to Sign In page */}
        <div><Link to="/sign-in">Sign In / Sign Up</Link></div>
        </div>
      );
    }
}
export default SingleSignOn;


