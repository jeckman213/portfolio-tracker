import React, { Component } from 'react';
import Header from './comparisonHeader';
import PieGraph from '../graphs/pieGraph';
import LineGraph from '../graphs/portfolioValueGraph';
import HighLowGraph from '../graphs/highLowChart';
import ComparisonTable from './comparisonTable';
import PortfolioSelect from './portfolioSelector';
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

      FirstUserPortfolios : [],
      FirstPortfolio: {
        userId : 0,
        portfolioId : 0,
        name : null,
        value : 0,
        shares : 0,
        assets : [],
        historical: {},
      },

      SecondUserPortfolios : [],
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
    this.changePortfolioOne = this.changePortfolioOne.bind(this);
    this.changePortfolioTwo = this.changePortfolioTwo.bind(this);
  }

  async componentDidMount() {
    // Gets the first portfolio
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

        {
          const { userId } = this.state.FirstPortfolio,
            { data } = await axios.get(`/api/user/${ userId }`),
            { portfolios } = data;
          this.setState({ FirstUserPortfolios : portfolios });
        }
        
        const
          { data } = await axios.get(`/api/user/${userId}/portfolio/${portfolioId}`),
          {name, value, shares, assets, historical } = data;
          this.setState({ FirstPortfolio: { name, value, shares, assets, historical} });
      }
    }
    // Gets the second portfolio
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

        {
          const { userId } = this.state.SecondPortfolio,
            { data } = await axios.get(`/api/user/${ userId }`),
            { portfolios } = data;
          this.setState({ SecondUserPortfolios : portfolios });
        }    
        
        const
          { data } = await axios.get(`/api/user/${userId}/portfolio/${portfolioId}`),
          {name, value, shares, assets, historical } = data;
          this.setState({ SecondPortfolio: { name, value, shares, assets, historical}, isLoading: false });
      }
    }
  }

  changeGraph = (value) => {
    this.setState({ graphOption : value });
  }

  changePortfolioOne = async(value) => {
    const 
      username1 = 'dev', portfolioName1 = value,
      queryObj1 = { username: username1, portfolioName: portfolioName1 },
      queryString1 = queryStringify(queryObj1),
      { data : ids } = await axios.get(`/api/search/portfolio?${queryString1}`),
      { success } = ids;
    
    if(success){
      const { userId, portfolioId } = ids;
      this.setState({ FirstPortfolio: { userId, portfolioId } });

      {
        const { userId } = this.state.FirstPortfolio,
          { data } = await axios.get(`/api/user/${ userId }`),
          { portfolios } = data;
        this.setState({ FirstUserPortfolios : portfolios });
      }
      
      const
        { data } = await axios.get(`/api/user/${userId}/portfolio/${portfolioId}`),
        {name, value, shares, assets, historical } = data;
        this.setState({ FirstPortfolio: { name, value, shares, assets, historical} });
    }
  }

  changePortfolioTwo = (value) => {

  }

  render() {
    const { FirstPortfolio, SecondPortfolio, isLoading, graphOption, FirstUserPortfolios, SecondUserPortfolios } = this.state;


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
        <PortfolioSelect portfolios={ FirstUserPortfolios } view={ this.changePortfolioOne } currentPortfolio={ FirstPortfolio.name }/>
        <div style={{float: 'right'}}>
        <PortfolioSelect portfolios={ SecondUserPortfolios } view={ this.changePortfolioTwo } currentPortfolio={ SecondPortfolio.name }/>
        </div>
        { graph }
        <div>
          <div>
            <ComparisonTable assets={ FirstPortfolio.assets } />
          </div>
          <div>
            <ComparisonTable assets={ SecondPortfolio.assets } />
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