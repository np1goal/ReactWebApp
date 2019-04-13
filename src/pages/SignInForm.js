import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Form.css';

// To be added
// Connect to server

class SignInForm extends Component {
  // Stores values of textbox
    constructor() {
      super();
      this.state = {
        email: '',
        password: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
      let target = e.target;
      let value = target.type === 'checkbox' ? target.checked : target.value;
      let name = target.name;

      this.setState({
        [name]: value
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log('The form was submitted with the following data:');
    console.log(this.state);
}

    render() {
        return (
          // Sign In Form
            <div className="FormCenter">
              <form className="FormFields" onSubmit={this.handleSubmit}>

                <div className="FormField">
                  <label className="FormField__Label" htmlFor="email">E-mail address</label>
                  <input type="text" id="name" className="FormField__Input" placeholder="Enter your email address" name="email" value={this.state.email} onChange={this.handleChange}/>
                </div>

                <div className="FormField">
                  <label className="FormField__Label" htmlFor="password">Password</label>
                  <input type="text" id="name" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange}/>
                </div>

                <div className="FormField">
                  <button className="FormField__Button mr-20">Sign In</button><Link to="/sign-up" className="FormField__Link">Create an account</Link>
                </div>
              </form>
            </div>
        );
    }
}

export default SignInForm;