import React, { Component } from 'react';



class signin extends Component {

  //So booking or signup im 
  //The class tiers was just an idea for the demo to get some points tbh we can not do it but 
  // it was easy enough to just intlligent switch. 

  //set default state
  constructor(){
    super();
    this.state = {
      username: "",
      password: ""
      }
  }

  //basic form handlers
 
  usernameHandler = (e) => {
    let username = e.target.value;
    this.setState({
      username : username
    });
    
  }
  
  passwordHandler = (e) => {
    let password =e.target.value;
    this.setState ({
        password : password

    });

  }




  formHandler = (e) =>{
    e.preventDefault();

    if(this.state.username === "" || this.state.password === "" ){
     console.log("cant process the signin ");
      return false;
    }else{
    console.log(`
      signin{ 
         username: ${this.state.username}
         password: ${this.state.password}
       
      } 
    }
    `);
  }
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
                  <label>Username:</label>
                  <input type="text" onChange = {this.usernameHandler} name="username" placeholder="Username" />
                 </div> 
                 <div className="form-control">
                  <label>Password:</label>
                  <input type="text" onChange = {this.passwordHandler} name="password" placeholder="Password" />
                 </div> 
                 <div className="form-control">
                    <input type="submit" onClick={this.formHandler} name="submit" value="Sign In" />
                 </div>  
                 

                </form>


          </div>
        </section>
    );
  }
}

export default signin;
