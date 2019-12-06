import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatCurrency } from '../../../utils/currencies'
import { dollar } from "../../../assets/styles";

class PortfolioHeader extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (event) => {
    event.preventDefault();

    var choice = event.target.value === "Pie" ? 0 : 1;

    this.props.view(choice);
  }

  render(){
    const
      style = this.style,
      { name, value } = this.props,
      currency = this.props.currency || 'USD';

    return (
      <div className="portfolio-header-container">
        <div className="portfolio-head-text">
          <h1 style={ style.h1 }>{ name }: { formatCurrency(currency, value) }</h1>
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
    }
  }
}

const mapStateToProps = (state) => {
  const { currency } = state.authentication;

  return { currency };
};

export default connect(mapStateToProps, null)(PortfolioHeader);