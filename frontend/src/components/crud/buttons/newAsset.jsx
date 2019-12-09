import React, { Component } from 'react'
import colors from '../../../assets/colors'
import Popup from 'reactjs-popup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios';
import { stringify as queryStringify } from 'query-string';

class NewAsset extends Component {
  constructor(){
    super();
    this.state = {
      symbol : "",
      shares : "",
      purchasedAt : "",
      requesting : false,

    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit = close => async e => {
    e.preventDefault();
    this.setState({ requesting : true });
    const 
      { symbol, shares, purchasedAt } = this.state,
      body = { symbol, shares, purchasedAt };
    await this.props.createAsset(body);
    this.setState({ requesting : false });
    close();
  }
  
  onChange = (e) => {
    this.setState({ [e.target.name] : e.target.value })
  }

  searchStocks = async (e, val) => {
    if(val){
      let
        queryString = queryStringify({ q : val }),
        stocks = await axios.get(`/api/search/stock?${queryString}`).then(res => res.data.results);
      stocks = stocks.map( stock => stock.symbol);
      this.setState({ stocks, symbol : val.toUpperCase() });
    }
  }
  
  style = {
    icon : {
      color : colors.blue,
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
    search : {
      width : '300px',
      backgroundColor : 'white',
      color : 'white',
      fontFamily : 'Comfortaa',
      margin : '0 auto'
    }
  }

  render(){
    const style = this.style;
    const { symbol, shares, purchasedAt, requesting, stocks } = this.state;

    return (
      <Popup
        trigger={
          <FontAwesomeIcon style={ style.icon } icon={ faPlus }></FontAwesomeIcon>
        } 
        style={ style.popup }
        modal>
          { close => (
            <div style={ style.newForm } >
            <i className="fas fa sign"></i>
            <h2>Add a New Asset</h2>
            <br/>
            <form onSubmit={ this.onSubmit(close) }>
              <div className="form-control">
                <label htmlFor="symbol">Symbol</label>
                <Autocomplete
                  clearOnEscape
                  inputValue={ symbol }
                  onInputChange={ this.searchStocks }
                  options={ stocks }
                  getOptionLabel={ option => option.symbol ? option.symbol : option }
                  style={ style.search }
                  renderInput={ params => (
                    <TextField { ...params } label="Search Stocks..." variant="outlined" fullWidth required/>
                  )}
                />
              </div>
              <div className="form-control">
                <label htmlFor="shares">Shares</label>
                <input type="number" onChange={ this.onChange } name="shares" placeholder="Shares" value={ shares } required />
              </div> 
              <div className="form-control">
                <label htmlFor="purchasedAt">Purchased At</label>
                <input type="date" onChange={ this.onChange } min="2015-01-01" name="purchasedAt" value={ purchasedAt } required/>
              </div> 
              <div className="form-control">
                <input type="submit" value="Create" disabled={ requesting }/>
                { requesting &&
                  <img 
                    style={ {float : 'right'} }
                    src={ process.env.PUBLIC_URL + '/animations/loading-gear.svg' } 
                    alt="loading" >
                  </img>
                }
              </div>
            </form>
          </div>
          )}
      </Popup>
    )
  }
}

export default NewAsset;
