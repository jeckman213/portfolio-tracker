import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dollar } from "../../assets/styles";
import axios from 'axios';
import { formatCurrency } from '../../utils/currencies'

class StockPageHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading : true,
      value : 0,
      open : 0,
      high : 0,
      low : 0,
      change : 0
    }
  }

  componentDidMount(){
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if(this.props.name !== prevProps.name){
      this.fetchData();
    }
  }

  fetchData = () => {
    const name = this.props.name;

    this.setState({ isLoading : true });
    axios.get(`/api/stock/realtime/${name}`)
      .then(res => {
        const { value, open, high, low, change } = res.data;
        this.setState({ value, open, high, low, change, isLoading: false })
      })
      .catch(error => console.error(error));
  }

  handleChange = (e) => {
    e.preventDefault();
    var choice = e.target.value === "Line" ? 0 : 1;

    this.props.view(choice);
  }

  render(){
    const 
      name = this.props.name,
      { value, open, high, low, change, isLoading } = this.state,
      currency = this.props.currency || 'USD';

    return (
      <div style={ style.div } className="portfolio-header">
        { !isLoading &&
          <React.Fragment>
            <h2>{ name }</h2>
            <ul style={ style.ul }>
              <li>Value: { formatCurrency(currency, value) }</li>
              <li>Open: { formatCurrency(currency, open) }</li>
              <li>High: { formatCurrency(currency, high) }</li>
              <li>Low: { formatCurrency(currency, low) }</li>
              <li>Change: { formatCurrency(currency, change) }</li>
            </ul>
            <select style={ style.select } onChange={this.handleChange}>
              <option value="Line">Line Graph</option>
              <option value="High-Low">High-Low Graph</option>
            </select>
          </React.Fragment>
        }
      </div>
    )
  }
}

const style = {
  div : {
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'flex-start',
    alignItems : 'center',
    marginBottom : '0.9em'
  },

  select : {
    fontFamily : 'inherit',
    fontSize : '1rem',
    padding : '.7rem',
    borderRadius : '10px',
    outline : 'none'
  },

  ul : {
    fontSize : '1.6rem',
    listStyleType : 'none'
  }
}

const mapStateToProps = (state) => {
  const { currency } = state.authentication;

  return { currency };
};

export default connect(mapStateToProps, null)(StockPageHeader);
