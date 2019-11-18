import React, { Component } from 'react'
import LineGraph from '../graphs/lineGraph'
import HighLowChart from '../graphs/highLowChart'
import Header from './stockPageHeader';

class StockPage extends Component {
  constructor(props){
    super(props);
    const { symbol } = this.props.match.params;
    this.state = {
      symbol,
      // 0 => Line; 1 => High-Low
      graphOption: 0,
    }
    
    this.changeGraph = this.changeGraph.bind(this);
  }

  componentDidMount(){
    const { symbol } = this.props.match.params;
    this.setState({ symbol })
  }

  changeGraph = (value) => {
    this.setState({ graphOption : value });
  }
  
  render() {
    const { symbol, graphOption, price } = this.state;
    return (
      <div>
        {graphOption === 1 
        ?
        <div>
          <HighLowChart symbol={ symbol }/>
          <Header name={ symbol } view={ this.changeGraph }/>
          </div>
        :
        <div>
          <LineGraph symbol={ symbol }/>
          <Header name={ symbol } value={ price } view={ this.changeGraph }/>
          </div>
        }
      </div>
    )
  }
}

export default StockPage;
