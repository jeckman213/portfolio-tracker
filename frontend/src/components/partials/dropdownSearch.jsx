import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router';
import { Link } from "react-router-dom";
import colors from '../../assets/colors';
import { stringify as queryStringify } from 'query-string';

class DropdownSearch extends Component {
  constructor(){
    super();
    this.state = {
      query : "",
      results : [],
      stockIdMap : {},
      stockId : "",
      redirect : false
    }
    
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onChange(e) {
    const 
      query = e.target.value,
      queryString = queryStringify({ q : query });

    this.setState({ 
      query,
      redirect : false 
    });

    let
      res = await axios.get(`/api/stock/search?${queryString}`),
      results = res.data;

    console.log(query, ' : ', results);
    this.setState({ results })
  }

  onSubmit(e) {
    e.preventDefault();
    const { query } = this.state;
    this.setState({
      symbol : query,
      results : [],
      redirect : true 
    });
  }

  render() {
    const 
      style = this.style,
      { query, results, redirect, symbol } = this.state,
      resultItems = this.state.results.map( result => {
        const 
          { id, symbol, name} = result,
          text = `${symbol} - ${name}`;
        return (
          <li style={ style.li } key={ id }><Link to={ `/app/stock/${symbol}` }>{ text }</Link></li>
        )
      });

    return (
      <div style={ style.div }>
        <form onSubmit={ this.onSubmit }>
          <input type="text" name="search" placeholder="Search for a Stock" onChange={ this.onChange }></input>
        </form>
        { query && 
          <ul>
            { results ? resultItems : <li>No results found</li> }
          </ul>
        }
        { redirect &&
          <Redirect to={ `/app/stock/${symbol}` } ></Redirect>
        }
      </div>
    )
  }

  style = {
    div : {
      backgroundColor : colors.darkBlue,
      position: 'relative',
      top: '10px'
    },

    li : {
      display : 'block'
    }
  }
}

export default DropdownSearch;
