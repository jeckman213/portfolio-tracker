import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import axios from 'axios';
import { validateRegistrationOnClient } from '../../utils/authService';
import { currencies } from '../../utils/currencies'

class Settings extends Component {
  constructor(props){
    super(props);
    this.state = {
      updating : false,
      updated : false,
      updateFailed : false,
      failReason : '',

      username : '',
      password : '',
      passwordVerified : '',
      email : '',
      firstname : '',
      lastname : '',
      currency : ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async componentDidMount(){
    const
      userId = this.props.id,
      user = await axios.get(`api/user/${userId}`).then(res => res.data),
      { username, email, firstname, lastname, currency } = user;
    
      this.setState({ username, email, firstname, lastname, currency });
  }

  onChange(e){
    this.setState({ [e.target.name] : e.target.value })
  }

  async onSubmit(e){
    e.preventDefault();
    this.setState({ updating : true });
    const
      userId = this.props.id,
      { username, password, passwordVerified, email, firstname, lastname, currency } = this.state,
      errReport = validateRegistrationOnClient({ username, password, passwordVerified, email, firstname, lastname, currency });

    if(errReport){ this.setState({ updateFailed : true, failReason : errReport.failReason }) }
    else {
      const 
        updatedSettings = { username, password, email, firstname, lastname, currency },
        data = await axios.put(`api/user/${userId}`, updatedSettings).then(res => res.data);
      
      if(data.success){ this.setState({ updated : true }); }
      else { this.setState({ updateFailed : true, failReason : data.failReason }); }
    }

    this.setState({ updating : false });
  }

  render() {
    const 
      { authenticated, currency : originalCurrency } = this.props,
      { updating, updated, updateFailed, failReason,
        username, password, passwordVerified, email, firstname, lastname } = this.state,
      currencyOptions = currencies.map(currency => {
        if(currency === originalCurrency){
          return ( <option key={ currency } value={ currency } selected>{ currency }</option> )
        }
        else {
          return ( <option key={ currency } value={ currency }>{ currency }</option> )
        }
      }),
      style = this.style;
    
    if(!authenticated){ return ( <Redirect to='/'></Redirect> ) }

    return (
      <section>
        <div>
          <i className="far fa-edit"></i>
          <h2>Edit your account settings </h2>
          <p>If you do not change or leave a field blank, it is ignored.</p>
          <br/>
          { updated && <h1>Update Successful</h1> }
          { updateFailed && 
            <h1>{ failReason ? failReason : 'An unexpected error has occured, try again later' }</h1>
          }
          <form onSubmit={ this.onSubmit }>
            <div className="form-control">
              <label>Username</label>
              <input type="text" name="username" onChange={ this.onChange } placeholder="Username" value={ username } />
            </div>
            <div className="form-control">
              <label>New Password</label>
              <input type="password" name="password" onChange={ this.onChange } placeholder="Password" value={ password } />
            </div>
            <div className="form-control">
              <label>Confirm New Password</label>
              <input type="password" name="passwordVerified" onChange={ this.onChange } placeholder="Confirm New Password" value={ passwordVerified } />
            </div>
            <div className="form-control">
              <label>Email</label>
              <input type="email" name="email" onChange={ this.onChange } placeholder="Email" value={ email } />
            </div>
            <div className="form-control">
              <label>First Name</label>
              <input type="text" name="firstname" onChange={ this.onChange } placeholder="First Name" value={ firstname } />
            </div>   
            <div className="form-control">
              <label>Last Name</label>
              <input type="text" name="lastname" onChange={ this.onChange } placeholder="Last Name" value={ lastname } />
            </div>
            <div className="form-control">              
              <label>Currency</label> 
              <select style={ style.select } name="currency" onChange={ this.onChange } >
                { currencyOptions }
              </select>   
            </div>
            <div className="form-control" style={ {display : 'block'} }>
              <input type="submit" value="Update" disabled={ updating } />
              { updating &&
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
    )
  }

  style = {
    select : {
      fontFamily : 'inherit',
      fontSize : '1rem',
      padding : '.7rem',
      borderRadius : '10px',
      outline : 'none'
    }
  }
}

const mapStateToProps = (state) => {
  const { authenticated, id, currency } = state.authentication;

  return { authenticated, id, currency }
};

export default connect(mapStateToProps, null)(Settings);

