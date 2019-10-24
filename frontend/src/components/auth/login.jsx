import React, { Component } from 'react';

class Login extends Component {
  constructor(){
    super();
    this.state = {
      username: "",
      password: ""
    }
    
    this.onChange = this.onChange.bind(this);
  }

  onChange(e){
    this.setState({ [e.target.name] : e.target.value })
  }

  render() {
    return (
      <section>
        <div>
          <i className="fas fa sign"></i>
          <h2>Welcome Back.</h2>
          <br/>
          <form>
            <div className="form-control">
              <label>Username</label>
              <input type="text" onChange={ this.onChange } name="username" placeholder="Username" />
            </div> 
            <div className="form-control">
              <label>Password</label>
              <input type="text" onChange={ this.onChange } name="password" placeholder="Password" />
            </div> 
            <div className="form-control">
              <input type="submit" value="Login" />
            </div>  
          </form>
        </div>
      </section>
    );
  }
}

export default Login;
