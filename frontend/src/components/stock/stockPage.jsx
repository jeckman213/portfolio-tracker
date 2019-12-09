import React, { Component } from 'react'
import LineGraph from '../graphs/lineGraph'
import HighLowChart from '../graphs/highLowChart'
import Header from './stockPageHeader';
import axios from 'axios';

class StockPage extends Component {
  constructor(props){
    super(props);
  
    this.state = {
      // 0 => Line; 1 => High-Low
      graphOption : 0,
      symbol : '',
      name : '',
      exchange : ''
    }
    
    this.changeGraph = this.changeGraph.bind(this);
  }

  async componentDidMount(){
    console.log(this.props.match.params.symbol);
    const 
      symbol = this.props.match.params.symbol,
      stock = await axios.get(`/api/search/stock?symbol=${symbol}`).then(res => res.data.stock),
      { name, exchange } = stock;
    this.setState({ symbol, name, exchange });
  }

  async componentDidUpdate(prevProps){
    if(prevProps.match.params.symbol !== this.props.match.params.symbol){
      const 
        symbol = this.props.match.params.symbol,
        stock = await axios.get(`/api/search/stock?symbol=${symbol}`).then(res => res.data.stock),
        { name, exchange } = stock;
      this.setState({ symbol, name, exchange });
    }
  }

  changeGraph = (value) => {
    this.setState({ graphOption : value });
  }
  
  render(){
    const
      style = this.style, 
      { graphOption, symbol, name, exchange } = this.state;
    
    return (
      <section style={ style.section }>
        { name 
            ? <React.Fragment>
                <Header name={ name } symbol={ symbol } exchange={ exchange } view={ this.changeGraph }/>
                { (graphOption === 1) ? <HighLowChart symbol={ symbol }/> : <LineGraph symbol={ symbol }/> } 
              </React.Fragment>
            : <h1>Stock with symbol {symbol} DNE</h1>
        }
        
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
