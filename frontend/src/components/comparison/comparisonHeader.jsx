import React, { Component } from 'react';
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';


class ComparisonHeader extends Component {
  constructor(props) {
    super(props);

    this.state = { graph: "Pie" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ graph: value });
    
    if (value === "Pie") this.props.view(0);
    else if (value === "Line") this.props.view(1);
    else if (value === "High-Low") this.props.view(2);
  }

  render() {
    const { graph, classes } = this.state;
    return (
      <div style={ style.container }>
        <FormControl variant="filled" style={ style.formControl } >
          <InputLabel>Graph</InputLabel>
          <Select native value={ graph } onChange={ this.handleChange }>
            <option value={"Pie"}>Pie</option>
            <option value={"Line"}>Line</option>
            <option value={"High-Low"}>High-Low</option>
          </Select>
        </FormControl>
      </div>
    )
  }
}

const style = {
  container: {
    textAlign: 'center'
  },

  formControl: {
    backgroundColor: 'white'
  }
}

export default ComparisonHeader;