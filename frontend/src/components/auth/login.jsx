import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Redirect } from 'react-router';
import { login } from '../../actions/auth/authenticationActions';

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
    const { loggingIn, authenticated, 
            loginFailed, failExpected, failReason } = this.props;
    
    if(authenticated){
      return ( <Redirect to='/about'/> );
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
            <div className="form-control">
              <input type="submit" value="Login" />
              { loggingIn &&
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
  const { loggingIn, authenticated, 
    loginFailed, failExpected, failReason } = state.authentication;
  
    return {
      loggingIn,
      authenticated,
      loginFailed,
      failExpected,
      failReason
    }
};

Login.propTypes = {
  login : PropTypes.func.isRequired
};

export default connect(mapStateToProps, { login })(Login);
