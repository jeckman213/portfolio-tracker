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
      graphOption : 0,
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
  
  render(){
    const style = this.style, 
      { symbol, graphOption } = this.state;
    
    return (
      <section style={ style.section }>
        <Header name={ symbol } view={ this.changeGraph }/>
        { (graphOption === 1) ? <HighLowChart symbol={ symbol }/> : <LineGraph symbol={ symbol }/> } 
      </section>
    )
  }

  style = {
    section : {
      margin : '0 0.3rem',
      width : '100%'
    }
  }
}

export default StockPage;
