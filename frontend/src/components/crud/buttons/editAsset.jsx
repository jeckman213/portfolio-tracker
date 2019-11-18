import React, { Component } from 'react'
import PropTypes from 'prop-types';
import colors from '../../../assets/colors'
import Popup from 'reactjs-popup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

class EditAsset extends Component {
  constructor(props){
    super(props);
    const { symbol, shares, purchasedAt } = this.props;
    this.state = {
      symbol,
      shares,
      purchasedAt,
      requesting : false
    }
    
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit = close => async e => {
    e.preventDefault();
    this.setState({ requesting : true });

    const
      { id } = this.props,
      { symbol, shares, purchasedAt } = this.state,
      body = { symbol, shares, purchasedAt };
    console.log(body);
    await this.props.editAsset(id, body);

    this.setState({ requesting : false });
    close();
  }
  
  onChange = (e) => {
    this.setState({ [e.target.name] : e.target.value })
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
      outline : 'none',
      color : 'white'
    },
    icon : {
      color : colors.green,
      cursor : 'pointer' 
    }
  }

  render(){
    const 
      style = this.style,
      { symbol, shares, purchasedAt, requesting } = this.state;

    return (
      <Popup
        trigger={
          <FontAwesomeIcon style={ style.icon } icon={ faEdit }></FontAwesomeIcon>
        } 
        style={ style.popup }
        modal>
          { close => (
            <div style={ style.newForm } >
              <i className="fas fa sign"></i>
              <h2>Edit Asset</h2>
              <br/>
              <form onSubmit={ this.onSubmit(close) }>
                <div className="form-control">
                  <label htmlFor="symbol">Symbol</label>
                  <input type="text" onChange={ this.onChange } name="symbol" placeholder="Stock Symbol" required value={ symbol }/>
                </div>
                <div className="form-control">
                  <label htmlFor="shares">Shares</label>
                  <input type="number" onChange={ this.onChange } name="shares" placeholder="Shares" value={ shares } />
                </div> 
                <div className="form-control">
                  <label htmlFor="purchasedAt">Purchased At</label>
                  <input type="date" onChange={ this.onChange } min="2015-01-01" name="purchasedAt" value={ purchasedAt } />
                </div> 
                <div className="form-control">
                  <input type="submit" value="Edit" disabled={ requesting }/>
                </div>
              </form>
            </div>
          )}
      </Popup>
    )
  }
}

EditAsset.propTypes = {
  symbol : PropTypes.string,
  shares : PropTypes.string,
  purchasedAt : PropTypes.string
}

export default EditAsset;
