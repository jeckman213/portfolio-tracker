import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatCurrency } from '../../../utils/currencies'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import Popup from 'reactjs-popup'
import colors from '../../../assets/colors'
import axios from 'axios'

class PortfolioHeader extends Component {
  constructor(props) {
    super(props);
    let { name, isPublic } = this.props;
    this.state = {
      requesting : false,
      name,
      isPublic
    }
    this.update = this.update.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.ownsPortfolio = this.props.ownsPortfolio.bind(this);
  }

  handleChange = (event) => {
    event.preventDefault();

    var choice = event.target.value === "Pie" ? 0 : 1;

    this.props.view(choice);
  }

  onChange = (e) => {
    this.setState({ [e.target.name] : e.target.value })
  }

  onClick = (e) => {
    this.setState({ isPublic : !this.state.isPublic })
  }

  update = (close) => async e => {
    e.preventDefault();
    
    if(!this.state.requesting){
      this.setState({ requesting : true })
      const 
        { userId, portfolioId } = this.props,
        { name, isPublic } = this.state,
        updatedPortfolio = { name, isPublic };
      await axios.put(`/api/user/${userId}/portfolio/${portfolioId}`, updatedPortfolio);

      close();
    }
  }

  render(){
    const
      style = this.style,
      { name, value } = this.props,
      currency = this.props.currency || 'USD',
      requesting = this.state.requesting;

      return (
      <div className="portfolio-header-container">
        <div className="portfolio-head-text">
          <h1 style={ style.h1 }>{ name }: { formatCurrency(currency, value) }</h1>
          { this.ownsPortfolio() &&
            <Popup
              trigger={
                <div style={ { cursor : 'pointer' }}>
                  <FontAwesomeIcon icon={ faEdit }></FontAwesomeIcon>
                </div>
              }
              modal>
                { close => (
                  <div style={ style.newForm } >
                    <h2>Rename { name }</h2>
                    <br/>
                    <form onSubmit={ this.update(close) }>
                      <div className="form-control">
                        <input type="text" onChange={ this.onChange } name="name" placeholder="Name" required value={ this.state.name }/>
                      </div>
                      <div className="form-control">
                        <label style={ { display : 'inline' } }>Public</label>
                        <input type="checkbox" onChange={ this.onClick } name="isPublic" value={ this.state.isPublic } />
                      </div> 
                      <div className="form-control">
                        <input type="submit" value="Edit" disabled={ requesting }/>
                      </div>
                    </form>
                  </div>
                )}
            </Popup>
          }
        </div>
        <div className="portfolio-head-dropdown">
          <select onChange={this.handleChange}>
            <option value="Pie">Pie Graph</option>
            <option value="Line">Line Graph</option>
          </select>
        </div>
      </div>
    )
  }

  style = {
    h1 : {
      marginLeft : '0.3rem',
      fontWeight : 'light'
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
  }
}

const mapStateToProps = (state) => {
  const { currency } = state.authentication;

  return { currency };
};

export default connect(mapStateToProps, null)(PortfolioHeader);