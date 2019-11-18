import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Redirect } from 'react-router';
import { signUp, login } from '../../actions/auth/authActions';
import currencies from '../../utils/currencies'

class SignUp extends Component {
  // So booking or signup im 
  // The class tiers was just an idea for the demo to get some points tbh we can not do it but 
  // it was easy enough to just intlligent switch. 

  //set default state
  constructor(){
    super();
    this.state = {
      username : '',
      email : '',
      firstname : '',
      lastname : '',
      password : '',
      passwordVerified : '',
      currency : 'USD'
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({ [e.target.name] : e.target.value })
  }

  onSubmit(e){
    e.preventDefault();

    this.props.signUp(this.state);
  }

  render(){
    const 
      { registering, registered, loggingIn, authenticated, username,
        registrationFailed, loginFailed, failExpected, failReason, } = this.props,
      currencyOptions = [];

    if(registered){
      this.props.login(this.state);
    }

    if(authenticated){
      return ( <Redirect to={`/user/${username}`}/> );
    }
    else if(loginFailed){
      return ( <Redirect to='/login'/> );
    }

    for(const currency of currencies){
      currencyOptions.push(<option key={ currency } value={ currency }>{ currency }</option>)
    }

    return (
      <section>
        <div>
        <i className="fas fa-book"></i>
          <h2>Sign up for { this.props.match.params.type } Tier and start learing! </h2>
          <p>Portfilios allows anyone with an internet access to enjoy most of our features for free and without being apart of a larger group or class. If you enjoy single tier please consider forming a group.</p>
          <br/>
          { registrationFailed &&
            <div>
              <h3> { failExpected ? failReason : 'An unexpected error has occured, try again later' } </h3>
            </div>
          }
          <form onSubmit={ this.onSubmit }>
            <div className="form-control">
              <label>Username*</label>
              <input type="text" name="username" onChange={ this.onChange } placeholder="Username" required />
            </div>
            <div className="form-control">
              <label>Password*</label>
              <input type="password" name="password" onChange={ this.onChange } placeholder="Password" required />
            </div>
            <div className="form-control">
              <label>Re-enter Password*</label>
              <input type="password" name="passwordVerified" onChange={ this.onChange } placeholder="Re-enter Password" required />
            </div>
            <div className="form-control">
              <label>Email*</label>
              <input type="email" name="email" onChange={ this.onChange }  placeholder="Email" required />
            </div>
            <div className="form-control">
              <label>First Name</label>
              <input type="text" name="firstname" onChange={ this.onChange }  placeholder="First Name" />
            </div>   
            <div className="form-control">
              <label>Last Name</label>
              <input type="text" name="lastname" onChange={ this.onChange }  placeholder="Last Name" />
            </div>
            <div className="form-control">              
              <label>Currency*</label> 
              <select name="currency" onChange={ this.onChange } >
                { currencyOptions }
              </select>   
            </div>
            <div className="form-control">
              <input type="submit" value="Sign Up" disabled={ registering } />
              { (registering || loggingIn) &&
                <img src={ process.env.PUBLIC_URL + '/animations/loading-gear.svg' } alt="loading" ></img>
              }
            </div>  
          </form>
        </div>
      </section>
    );
  }
}

// Bring auth reducer state into this file. Accessed through this.props
const mapStateToProps = (state) => {
  const { registering, registered, loggingIn, authenticated, username,
          registrationFailed, loginFailed, failExpected, failReason, } = state.authentication;
  
  return {
    registering,
    registered,
    registrationFailed,
    failExpected,
    failReason,
    loggingIn,
    loginFailed,
    authenticated,
    username
  }
};

SignUp.propTypes = {
  signUp : PropTypes.func.isRequired,
  login : PropTypes.func.isRequired
};

export default connect(mapStateToProps, { signUp, login })(SignUp);
