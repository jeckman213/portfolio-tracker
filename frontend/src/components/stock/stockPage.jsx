import React, { Component } from 'react'
import LineGraph from '../graphs/lineGraph'
import HighLowChart from '../graphs/highLowChart'

class StockPage extends Component {
  constructor(props){
    super(props);
    const { symbol } = this.props.match.params;
    this.state = {
      symbol
    }
  }
  
  render() {
    const { symbol } = this.state;
    return (
      <div>
        <h1>{ symbol }</h1>
        <HighLowChart symbol={ symbol }/>
        <LineGraph symbol={ symbol }/>
      </div>
    )
  }
}

export default StockPage;
