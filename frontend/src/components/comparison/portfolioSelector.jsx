import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

class PortfolioSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolios : this.props.portfolios,
      currentPortfolio : this.props.currentPortfolio
    }

    this.handleChange = this.handleChange.bind();  
    this.printOptions = this.printOptions.bind();  
  }

  printOptions = () => {
    const { portfolios } = this.state;
    var options = [];

    for(let portfolio of portfolios) {
      let { name } = portfolio;
      options.push(
        <option value={name}>{ name }</option>
      );
    }

    return options;
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.props.view(value);
  }

  render() {
    const { currentPortfolio } = this.state;
    return (
        <FormControl variant="filled">
            <InputLabel>Portfolio</InputLabel>
            <Select style={ style.formControl } native value={ currentPortfolio } onChange={ this.handleChange }>
              { this.printOptions() }
            </Select>
        </FormControl>
    )
  }
}

const style = {
  formControl: {
    backgroundColor: 'white',
    width: '150px'
  }
}

export default PortfolioSelect;