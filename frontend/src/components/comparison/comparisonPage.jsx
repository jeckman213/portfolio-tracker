import React, { Component } from 'react';
import Header from './comparisonHeader';
import PieGraph from '../graphs/pieGraph';
import LineGraph from '../graphs/portfolioValueGraph';
import HighLowGraph from '../graphs/highLowChart';
import ComparisonTable from './comparisonTable';
import { getPercentages } from '../../utils/pieChartPercentage';
import axios from 'axios';
import { stringify as queryStringify } from 'query-string';
import loading from '../../assets/loading.svg'

class ComparisonPage extends Component {
  constructor(props) {
    super(props); 

    // graphOption: 0 => Pie
    //              1 => Line
    //              2 => High-Low
    this.state = { graphOption: 0, isLoading: true }

    this.changeGraph = this.changeGraph.bind(this);
   }

   async componentDidMount() {
    const 
       username  = 'dev',
       portfolioName = 'First Portfolio',
      queryObj = { username, portfolioName },
      queryString = queryStringify(queryObj),
      { data : ids } = await axios.get(`/api/search/portfolio?${queryString}`),
      { success } = ids;
      
      if(success){
        const { userId, portfolioId } = ids;
        this.setState({ userId, portfolioId });
        
        const 
          { data } = await axios.get(`/api/user/${userId}/portfolio/${portfolioId}`),
          { name, value, shares, assets, historical, pieChartData } = data;
          this.setState({ name, value, shares, assets, historical, pieChartData, isLoading : false })
    }
  }

  changeGraph = (value) => {
    this.setState({ graphOption : value });
  }

  render() {
    const { graphOption, name, value, shares, assets, historical, pieChartData, isLoading } = this.state;


    if(!isLoading) {
      var graph;

      if (graphOption === 0) {
        graph = 
          (<div style={ Style.PieContainer }>
            <PieGraph slices={ getPercentages(assets) } style={ Style.PieOne }/>
            <PieGraph slices={ getPercentages(assets) } style={ Style.PieTwo } />
          </div>);
      } 
      else if (graphOption === 1) {
        graph = <LineGraph data={ historical } data2={ historical } name={ name } />;
      }
      else {
        graph = <HighLowGraph symbol={ "AAPL" } />;
      }

    return (
      <div>
        <Header view={ this.changeGraph } />
        { graph }
        <div style={{overflow: 'hidden'}}>
          <div style={{float:'left', width: '50%'}}>
            <ComparisonTable  />
          </div>
          <div style={{float: 'right', width: '50%'}}>
            <ComparisonTable />
          </div>
        </div>
      </div>
    )
    }
    else {
      return(
        <div className="portfolio-page">
          <img className='isLoading' src={ loading } alt="Loading..." />
        </div>
      )
    }
  }
}

const Style = {
  PieContainer: {
    width: '100%',
    margin: 'auto'
  },

  PieOne: {
    width: '50%',
    float: 'left'
  },

  PieTwo: {
    width: '50%',
    float: 'right'
  }
}

export default ComparisonPage;