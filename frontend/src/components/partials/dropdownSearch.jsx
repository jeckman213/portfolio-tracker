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
      res = await axios.get(`/api/search/stock?${queryString}`),
      results = res.data;

    // console.log(query, ' : ', results);
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
        let 
          { id, symbol, name} = result,
          maxLength = 40;
        name = name.length > maxLength ? name.slice(0, 15) + '...' : name; 
        const text = `[${symbol}] - ${name}`;
        return (
          <li style={ style.li } key={ id }><Link to={ `/stock/${symbol}` }>{ text }</Link></li>
        )
      });

    return (
      <div>
        <form onSubmit={ this.onSubmit } autocomplete="off">
          <input autocomplete="false" name="hidden" type="text" style={{ display : 'none'}}></input>
          <input style={ style.search } type="text" name="search" placeholder="Search for a Stock" onChange={ this.onChange }></input>
        </form>
        { query && 
          <ul style={ style.ul }>
            { results ? resultItems : <li>No results found</li> }
          </ul>
        }
        { redirect &&
          <Redirect to={ `/stock/${symbol}` } ></Redirect>
        }
      </div>
    )
  }

  style = {
    search : {
      padding : '12px',
      borderRadius : '15px',
      outline : 'none',
      border : 'none',
      WebkitAppearance: 'none',
      fontSize : '20px'
    },
    ul : {
      display : 'flex',
      flexDirection : 'column',
      justifyContent : 'flex-start',
      alignItems : 'flex-start',
      borderRadius : '15px',
      padding : '2rem',
      backgroundColor : colors.darkBlue,
      zIndex : '99',
      position: 'absolute',
      top: '8rem'
    },

    li : {
      display : 'block'
    }
  }
}

export default DropdownSearch;
