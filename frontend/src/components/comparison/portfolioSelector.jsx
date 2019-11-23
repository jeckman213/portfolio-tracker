import React, { Component } from 'react';
import { Select, FormControl, InputLabel } from '@material-ui/core'

class PortfolioSelect extends Component {
  render() {
    return (
      <FormControl variant="filled" style={ style.formControl } >
          <InputLabel>Portfolio</InputLabel>
          <Select native>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </Select>
        </FormControl>
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

export default PortfolioSelect;