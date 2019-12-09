import React, { Component } from 'react';
import { Redirect } from 'react-router';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios';
import { stringify as queryStringify } from 'query-string';

class StockSearch extends Component{
  constructor(){
    super();
    this.state = {
      stocks : [],
      symbol : '',
      redirect : false
    }

    this.searchStocks.bind(this);
    this.redirectToStockPage.bind(this);
  }

  searchStocks = async (e, val) => {
    if(val){
      let symbol;
      if(val.search(/\[/) !== -1 && val.search(/\]/) !== -1){
        let 
          start = val.search(/\[/),
          end = val.search(/\]/);
        symbol = val.slice(start + 1, end);
      }
      else { symbol = val }
      const
        queryString = queryStringify({ q : symbol }),
        stocks = await axios.get(`/api/search/stock?${queryString}`).then(res => res.data.results);
      this.setState({ stocks, symbol, redirect : false });
    }
  }

  redirectToStockPage = (e) => {
    e.preventDefault();
    this.setState({
      redirect : true 
    });
  }

  render(){
    const 
      { stocks, symbol, redirect } = this.state,
      style = this.style;

    return (
      <div>
        <form onSubmit={ this.redirectToStockPage } autoComplete="off">
          <input autoComplete="false" name="hidden" type="text" style={{ display : 'none'}} />
          <Autocomplete
            clearOnEscape
            freeSolo
            inputValue={ this.symbol }
            onInputChange={ this.searchStocks }
            options={ stocks }
            getOptionLabel={ option => option.symbol ? `[${option.symbol}] - ${option.name}` : option }
            style={ style.search }
            renderInput={ params => (
              <TextField { ...params } label="Search Stocks..." variant="outlined" fullWidth />
            )}
          />
          <button type="submit" style={{ display : 'none'}}></button>
        </form>
        { redirect &&
          <Redirect to={ `/stock/${symbol.toUpperCase() }` } ></Redirect>
        }
      </div>
    );
  }

  style = {
    search : {
      width : '300px',
      backgroundColor : 'white',
      color : 'white',
      fontFamily : 'Comfortaa'
    }
  }
}

export default StockSearch;
