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
      username : "",
      redirect : false
    }
    
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onChange(e){
    const username = e.target.value;

    this.setState({ 
      username,
      redirect : false 
    });
  }

  onSubmit(e){
    e.preventDefault();
    this.setState({
      redirect : true 
    });
  }

  render(){
    const 
      style = this.style,
      { redirect, username } = this.state;

    return (
      <div>
        <form onSubmit={ this.onSubmit } >
          <input name="hidden" type="text" style={{ display : 'none'}} />
          <input style={ style.search } type="text" name="search" placeholder="Search users..." value={ username } onChange={ this.onChange } />
          <button type="submit" style={{ display : 'none'}}></button>
        </form>
        { redirect &&
          <Redirect to={ `/user/${username}` } ></Redirect>
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
      padding : '2rem 1rem',
      backgroundColor : colors.darkBlue,
      zIndex : '99',
      position: 'absolute',
      top: '5rem'
    },

    li : {
      display : 'block'
    }
  }
}

export default DropdownSearch;
