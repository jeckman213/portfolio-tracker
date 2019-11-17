import React, { Component } from 'react'
import colors from '../../../assets/colors'
import Popup from 'reactjs-popup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

class newPortfolio extends Component {
  constructor(){
    super();
    this.state = {
      name : "",
      isPublic : false,
      posting : false
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit = close => async e => {
    e.preventDefault();
    this.setState({ posting : true });
    const 
      { name, isPublic } = this.state,
      body = { name, isPublic};
    await this.props.createPortfolio(body);
    this.setState({ name : "", isPublic : false, posting : false });
    close();
  }
  
  onChange = (e) => {
    this.setState({ [e.target.name] : e.target.value })
  }

  onClick = (e) => {
    this.setState({ isPublic : !this.state.isPublic })
  }
  
  style = {
    newButton : {
      border : `1px solid ${colors.green}`,
      borderRadius : '10px',
      padding : '2em',
      fontSize : '2em',
      cursor : 'pointer'
    },
    popup : {
      border : 'none',
      boxShadow : 'none',
      padding : '0'
    },
    newForm : {
      backgroundColor : colors.darkBlue,
      padding : '20px',
      boxSizing: 'border-box',
      width : '100%',
      height : '100%',
      outline : 'none'
    }
  }

  render(){
    const style = this.style;
    const { posting } = this.state;

    return (
      <Popup
        trigger={
          <div style={ style.newButton }>
            <FontAwesomeIcon icon={ faPlus }></FontAwesomeIcon>
          </div>
        } 
        style={ style.popup }
        modal>
          { close => (
            <div style={ style.newForm } >
              <i className="fas fa sign"></i>
              <h2>Create a new Portfolio</h2>
              <br/>
              <form onSubmit={ this.onSubmit(close) }>
                <div className="form-control">
                  <input type="text" onChange={ this.onChange } name="name" placeholder="Name" required value={ this.state.name }/>
                </div>
                <div className="form-control">
                  <label style={ { display : 'inline' } }>Public</label>
                  <input type="checkbox" onChange={ this.onClick } name="isPublic" value={ this.state.isPublic } />
                </div> 
                <div className="form-control">
                  <input type="submit" value="Create" disabled={ posting }/>
                </div>
              </form>
            </div>
          )}
      </Popup>
    )
  }
}

export default newPortfolio;
