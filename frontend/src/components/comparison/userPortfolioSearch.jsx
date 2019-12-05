import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

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
        <TextField className="comparisonTextField" label="User" variant="filled" style={{width: "250px"}}/>
      </form>
    );
  }
}

const style = {
  formControl: {
    backgroundColor: 'white',
  }
}

export default UserPortfolioSearch;