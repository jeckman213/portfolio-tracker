import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class UserPortfolioSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm : null
    }

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleUserUpdate = this.handleUserUpdate.bind(this);
  }

  handleUpdate = (event) => {
    const { value } = event.target;
    this.setState({ searchTerm : value });
  }

  handleUserUpdate = (event) => {
    event.preventDefault();
    const { searchTerm } = this.state;
    this.props.update(searchTerm);
  }

  render() {
    return (
      <form className="comparisonSearchBar" onSubmit={ this.handleUserUpdate } onChange={this.handleUpdate} style={ style.formControl } autoComplete="off">
        <TextField className="comparisonTextField" label="User" variant="filled" style={style.input}/>
        <Button type="submit" variant="contained" style={style.button} className="compareSearchBtn"><i className="fas fa-search"></i></Button>
      </form>
    );
  }
}

const style = {
  input: {
    backgroundColor: 'white'
  },
  button: {
    padding: '21px'
  }
}

export default UserPortfolioSearch;