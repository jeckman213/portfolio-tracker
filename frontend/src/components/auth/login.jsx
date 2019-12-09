import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Redirect } from 'react-router';
import { login } from '../../actions/auth/authActions';

class Login extends Component {
  constructor(){
    super();
    this.state = {
      username: "",
      password: ""
    }
    
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({ [e.target.name] : e.target.value })
  }

  onSubmit(e){
    e.preventDefault();

    this.props.login(this.state);
  }

  render() {
    const 
      { loggingIn, authenticated, username,
        loginFailed, failExpected, failReason } = this.props,
      { from } = this.props.location.state || { from : { pathname : `/user/${username}` } };

    if(authenticated){
      return ( <Redirect to={ from } /> );
    }

    return (
      <section>
        <div>
          <i className="fas fa sign"></i>
          <h2>Welcome Back.</h2>
          <br/>
          { loginFailed &&
            <div>
              <h3> { failExpected ? failReason : 'An unexpected error has occured, try again later' } </h3>
            </div>
          }
          <form onSubmit={ this.onSubmit }>
            <div className="form-control">
              <label>Username</label>
              <input type="text" onChange={ this.onChange } name="username" placeholder="Username" required />
            </div> 
            <div className="form-control">
              <label>Password</label>
              <input type="password" onChange={ this.onChange } name="password" placeholder="Password" required />
            </div> 
            <div className="form-control" style={ {display : 'block'} }>
              <input type="submit" value="Login" disabled={ loggingIn } />
              { loggingIn &&
                <img 
                  style={ {float : 'right'} }
                  src={ process.env.PUBLIC_URL + '/animations/loading-gear.svg' } 
                  alt="loading" >
                </img>
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
  const 
    { loggingIn, authenticated, username,
      loginFailed, failExpected, failReason } = state.authentication;
  
    return {
      loggingIn,
      authenticated,
      username,
      loginFailed,
      failExpected,
      failReason
    }
};

Login.propTypes = {
  login : PropTypes.func.isRequired
};

export default connect(mapStateToProps, { login })(Login);
