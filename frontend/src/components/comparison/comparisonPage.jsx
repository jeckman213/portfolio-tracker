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
    this.state = {
      graphOption: 0,
      isLoading: true,

      FirstPortfolio: {
        userId : 0,
        portfolioId : 0,
        name : null,
        value : 0,
        shares : 0,
        assets : [],
        historical: {},
      },

      SecondPortfolio: {
        userId : 0,
        portfolioId : 0,
        name : null,
        value : 0,
        shares : 0,
        assets : [],
        historical: {},
      },
    }

    this.changeGraph = this.changeGraph.bind(this);
  }

  async componentDidMount() {
    {
      const 
        username1 = 'dev', portfolioName1 = 'First Portfolio',
        queryObj1 = { username: username1, portfolioName: portfolioName1 },
        queryString1 = queryStringify(queryObj1),
        { data : ids } = await axios.get(`/api/search/portfolio?${queryString1}`),
        { success } = ids;
      
      if(success){
        const { userId, portfolioId } = ids;
        this.setState({ FirstPortfolio: { userId, portfolioId } });
        
        const
          { data } = await axios.get(`/api/user/${userId}/portfolio/${portfolioId}`),
          {name, value, shares, assets, historical } = data;
          this.setState({ FirstPortfolio: { name, value, shares, assets, historical} });
      }
    }
    {
      const 
        username2 = 'coolguy1', portfolioName2 = 'First Portfolio',
        queryObj2 = { username: username2, portfolioName: portfolioName2 },
        queryString2 = queryStringify(queryObj2),
        { data : ids } = await axios.get(`/api/search/portfolio?${queryString2}`),
        { success } = ids;
    
      if(success){
        const { userId, portfolioId } = ids;
        this.setState({ SecondPortfolio: { userId, portfolioId } });
        
        const
          { data } = await axios.get(`/api/user/${userId}/portfolio/${portfolioId}`),
          {name, value, shares, assets, historical } = data;
          this.setState({ SecondPortfolio: { name, value, shares, assets, historical}, isLoading: false });
      }
    }
    console.log(this.state.FirstPortfolio.historical)
  }

  changeGraph = (value) => {
    this.setState({ graphOption : value });
  }

  render() {
    const { FirstPortfolio, SecondPortfolio, isLoading, graphOption } = this.state;


    if(!isLoading) {
      var graph;

      if (graphOption === 0) {
        graph = 
          (<div style={ Style.PieContainer }>
            <PieGraph slices={ getPercentages(FirstPortfolio.assets) } style={ Style.PieOne }/>
            <PieGraph slices={ getPercentages(SecondPortfolio.assets) } style={ Style.PieTwo } />
          </div>);
      } 
      else if (graphOption === 1) {
        graph = <LineGraph data={ FirstPortfolio.historical } data2={ SecondPortfolio.historical } name={ FirstPortfolio.name } name2={ SecondPortfolio.name } />;
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