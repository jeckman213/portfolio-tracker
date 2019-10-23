import React, { Component } from 'react';



class Booking extends Component {

  //So booking or signup im 
  //The class tiers was just an idea for the demo to get some points tbh we can not do it but 
  // it was easy enough to just intlligent switch. 

  //set default state
  constructor(){
    super();
    this.state = {
      name: "",
      lastname: "",
      email: "",
      username: "",
      password: "",
      Currency: ""
     
    }
  }

  //basic form handlers
  nameHandler = (e) => {
    let name = e.target.value;
    this.setState({
      name : name
    });
    
  }
  lastnameHandler = (e) => {
    let lastname = e.target.value;
    this.setState({
      lastname : lastname
    });
  
  }
  passwordHandler = (e) => {
    let password = e.target.value;
    this.setState({
      password : password
    });
  
  }

  //Got email normal form to work this is what demands the typical text @ text . whatever 
  emailHandler = (e) => {
    let email = e.target.value;
    if(email.match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)){
      this.setState({
        email: email
    });
      }else{
        this.setState({
          email: ""
      });
      console.log("Incorrect Email, must match Expression");
    }
  } 
  usernameHandler = (e) => {
    let username = e.target.value;
    this.setState({
      username : username
    });
    
  }
  

  formHandler = (e) =>{
    e.preventDefault();

    if(this.state.name === "" || this.state.email === "" || this.state.message === "" ){
     console.log("cant process the values");
      return false;
    }else{
    console.log(`
      booking{ 
       name: ${this.state.name},
       lastname: ${this.state.lastname}, 
       email: ${this.state.email}, 
       username: ${this.state.username},
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
           <i className="fas fa-book"></i>
                <h2>Sign up for {this.props.match.params.id} Tier and start learing! </h2>
                <p>Portfilios allows anyone with an internet access to enjoy most of our features for free and without being apart of a larger group or class. If you enjoy single tier please consider forming a group.</p>
                <br/>
                <form>
                 <div className="form-control">
                  <label>First Name:</label>
                  <input type="text" onChange = {this.nameHandler} name="name" placeholder="First Name" />
                 </div>   
                 <div className="form-control">
                  <label>Last name:</label>
                  <input type="text" onChange = {this.lastnameHandler} name="lastname" placeholder="Last name" />
                 </div>   
                 <div className="form-control">
                  <label>Email:</label>
                  <input type="email" onChange = {this.emailHandler} name="email" placeholder="Email" />
                 </div>   
                 <div className="form-control">
                  <label>Password:</label>
                  <input type="password" onChange = {this.passwordHandler} name="password" placeholder="Password" />
                 </div>   
                 <div className="form-control">
                  <label>Username:</label>
                  <input type="text" onChange = {this.usernameHandler} name="username" placeholder="Username" />
                 </div>  

                

                 <div className="form-control">
                    <input type="submit" onClick={this.formHandler} name="submit" value="Sign Up" />
                 </div>  
                 

                </form>


          </div>
        </section>
    );
  }
}

export default Booking;
