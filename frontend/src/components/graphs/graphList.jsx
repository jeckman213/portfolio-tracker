import React, { Component } from 'react';
import HighLowChart from "./highLowChart";
import LineChart from "./lineGraph";
import PieChart from "./pieGraph";

class Graphs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      symbol: "AAPL",
    }
  }

  render() {
    return(
      <div>
        <HighLowChart symbol={ this.state.symbol } /> 
        <LineChart symbol={ this.state.symbol } />
        <PieChart 
          slices={
            [
              {
                name: 'GE',
                y: 45.4
              }, 
              {
                name: 'AAPL',
                y: 34.6
              }, 
              {
                name: 'AMD',
                y: 12.5
              }, 
              {
                name: 'AMC',
                y: 7.5
              }
            ]
          }
        />
      </div>
    )
  }
}

export default Graphs;