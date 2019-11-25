import React, { Component } from 'react';

import { dollar } from "../../assets/styles";
import axios from 'axios';

class StockPageHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name : this.props.name,
      isLoading : true
    }

    console.log(this.props.name);
  }

  componentDidMount(){
    const { name } = this.state;

    axios.get(`/api/stock/realtime/${name}`)
      .then(res => {
        console.log(res.data);
        const { price } = res.data;
        this.setState({ price, isLoading: false })
      })
      .catch(error => console.error(error));
  }

  handleChange = (e) => {
    e.preventDefault();
    var choice = e.target.value === "Line" ? 0 : 1;

    this.props.view(choice);
  }

  render(){
    const { name, price, isLoading } = this.state;

    return (
      <div style={ style.div } className="portfolio-header">
        { !isLoading &&
          <React.Fragment>
            <h2>{ name } : <span style={ dollar }>$</span>{ price }</h2>
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
  }
}

export default StockPageHeader;