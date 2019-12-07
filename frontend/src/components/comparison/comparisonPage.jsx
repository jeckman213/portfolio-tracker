import React, { Component } from 'react';

// Component imports
import Header from './comparisonHeader';
import PieGraph from '../graphs/pieGraph';
import LineGraph from '../graphs/portfolioValueGraph';
import HighLowGraph from '../graphs/portfolioHighLow';
import ComparisonTable from './comparisonTable';
import PortfolioSelect from './portfolioSelector';
import UserPortfolioSearch from './userPortfolioSearch';

// Util imports
import { getPercentages } from '../../utils/pieChartPercentage';
import axios from 'axios';
import { stringify as queryStringify } from 'query-string';
import loading from '../../assets/loading.svg'
import { dollar } from "../../assets/styles";

class ComparisonPage extends Component {
  constructor(props) {
    super(props); 

    // graphOption: 0 => Pie
    //              1 => Line
    //              2 => High-Low
    this.state = {
      graphOption : 0,
      isLoading : false,
      isEmpty : true,
      noUserFound: false,

      FirstUserPortfolios : [],
      FirstPortfolio: {
        userId : 0,
        portfolioId : 0,
        username : null,
        portfolioName : null,
        name : null,
        value : 0,
        shares : 0,
        assets : [],
        history: {},
        pieChartData : {}
      },

      SecondUserPortfolios : [],
      SecondPortfolio: {
        userId : 0,
        portfolioId : 0,
        username : null,
        portfolioName : null,
        name : null,
        value : 0,
        shares : 0,
        assets : [],
        history : {},
        pieChartData : {}
      },
    }

    this.changeGraph = this.changeGraph.bind(this);
    this.changePortfolioOne = this.changePortfolioOne.bind(this);
    this.changePortfolioTwo = this.changePortfolioTwo.bind(this);
    this.changeUserOne = this.changeUserOne.bind(this);
    this.changeUserTwo = this.changeUserTwo.bind(this);
  }

  changeGraph = (value) => {
    this.setState({ graphOption : value });
  }

  changePortfolioOne = async (value) => {
    this.setState({ isLoading: true });
    const 
      { username } = this.state.FirstPortfolio, 
      portfolioName = value,
      queryObj1 = { username, portfolioName },
      queryString1 = queryStringify(queryObj1),
      { data : ids } = await axios.get(`/api/search/portfolio?${queryString1}`),
      { success } = ids;
    
    if(success){
      const { userId, portfolioId } = ids;
      
      const
        { data } = await axios.get(`/api/user/${userId}/portfolio/${portfolioId}`),
        {name, value, shares, assets, history, pieChartData } = data;
        this.setState({ FirstPortfolio: { userId, username, portfolioId, name, value, shares, assets, history, pieChartData}, isLoading: false });
    }
    console.log(this.state);
  }

  changePortfolioTwo = async (value) => {
    this.setState({ isLoading: true });
    const 
      { username } = this.state.SecondPortfolio,
      portfolioName = value,
      queryObj = { username: username, portfolioName: portfolioName },
      queryString = queryStringify(queryObj),
      { data : ids } = await axios.get(`/api/search/portfolio?${queryString}`),
      { success } = ids;
    
    if(success){
      const { userId, portfolioId } = ids;
      
      const
        { data } = await axios.get(`/api/user/${userId}/portfolio/${portfolioId}`),
        {name, value, shares, assets, history, pieChartData } = data;
        this.setState({ SecondPortfolio: { userId, username, portfolioId, name, value, shares, assets, history, pieChartData}, isLoading: false });
    }
  }

  changeUserOne = async (username) => {
    this.setState({isLoading : true});
    var
      queryObj = { username: username },
      queryString = queryStringify(queryObj),
      { data } = await axios.get(`api/search/user?${queryString}`),
      { id, success } = data;

      if (success) {
        let
          { data } = await axios.get(`api/user/${id}`),
          { portfolios } = data,
          portfolioId = portfolios[0].id, 
          portfolioName = portfolios[0].name;

          data = await axios.get(`api/user/${id}/portfolio/${portfolioId}`);
          const { value, shares, assets, history, pieChartData } = data.data;

          this.setState({ 
            FirstUserPortfolios : portfolios,
            FirstPortfolio : {
              userId : id,
              username : username,
              portfolioId : portfolioId,
              name : portfolioName,
              value,
              shares,
              assets,
              history,
              pieChartData
            },
            isLoading : false,
            isEmpty : false
          });
      }
      else {
        console.error("Couldn't Find User");
        this.setState({isLoading: false, noUserFound: true});
      }
  }

  changeUserTwo = async (username) => {
    this.setState({isLoading : true});
    var
      queryObj = { username: username },
      queryString = queryStringify(queryObj),
      { data } = await axios.get(`api/search/user?${queryString}`),
      { id, success } = data;

      if (success) {
        let
          { data } = await axios.get(`api/user/${id}`),
          { portfolios } = data,
          portfolioId = portfolios[0].id, 
          portfolioName = portfolios[0].name;

          data = await axios.get(`api/user/${id}/portfolio/${portfolioId}`);
          const { value, shares, assets, history, pieChartData } = data.data;

          this.setState({ 
            SecondUserPortfolios : portfolios,
            SecondPortfolio : {
              userId : id,
              username : username,
              portfolioId : portfolioId,
              name : portfolioName,
              value,
              shares,
              assets,
              history,
              pieChartData
            },
            isLoading : false,
            isEmpty : false
          });
      } 
      else {
        console.error("Couldn't Find User");
        this.setState({isLoading: false, noUserFound: true});
      }
  }

  render() {
    const { FirstPortfolio, SecondPortfolio, isLoading, graphOption, FirstUserPortfolios, SecondUserPortfolios, isEmpty, noUserFound } = this.state;

    if(isEmpty) {
      return (
        <div style={Style.isEmptyContainer}>
          <h2>Comparison Page</h2>
          <h3>Search For User:</h3>
          <div style={Style.onlySearchContainer} className="comparisonSearchContainer">
            <div style={Style.onlySearch}>
              <UserPortfolioSearch update={ this.changeUserOne } />
            </div>
            <div style={Style.onlySearch}>
              <UserPortfolioSearch update={ this.changeUserTwo } />
            </div>
          </div>
        </div>
      )
    }
    else if(!isLoading) {
      var graph;

      if (graphOption === 0) {
        graph = 
          (<div style={ Style.PieContainer }>
            <PieGraph portfolioName={ `${FirstPortfolio.name}(${FirstPortfolio.username})` } data={ FirstPortfolio.pieChartData } style={ Style.PieOne }/>
            <PieGraph portfolioName={ `${SecondPortfolio.name}(${SecondPortfolio.username})` } data={ SecondPortfolio.pieChartData } style={ Style.PieTwo } />
          </div>);
      } 
      else if (graphOption === 1) {
        graph = <LineGraph data={ FirstPortfolio.history } data2={ SecondPortfolio.history } name={ FirstPortfolio.name } name2={ SecondPortfolio.name } />;
      }
      else {
        graph = <HighLowGraph data={ FirstPortfolio.history } data2={ SecondPortfolio.history } name={ FirstPortfolio.name } name2={ SecondPortfolio.name } />;
      }

    return (
      <div>
        <Header view={ this.changeGraph } />

        <div style={Style.searchContainer} className="comparisonSearchContainer">
          <div style={Style.search} className="compareSearch">
          <div className="portfolioSelect">
            <PortfolioSelect portfolios={ FirstUserPortfolios } view={ this.changePortfolioOne } currentPortfolio={ FirstPortfolio.name }/>
          </div>
            <div className="userPortfolioSearch" style={{marginLeft: "1rem"}}>
            <UserPortfolioSearch update={ this.changeUserOne } />
            </div>
          </div>
          <div style={Style.search} className="compareSearch">
            <div className="portfolioSelect">
              <PortfolioSelect portfolios={ SecondUserPortfolios } view={ this.changePortfolioTwo } currentPortfolio={ SecondPortfolio.name }/>
            </div>
            <div className="userPortfolioSearch" style={{marginLeft: "1rem"}}>
              <UserPortfolioSearch update={ this.changeUserTwo } />
            </div>
          </div>
        </div>

        {noUserFound &&
          <div style={{textAlign: 'center'}}>
            <h4 style={{color: "red"}}>Couldn't find user with that username...</h4>
          </div>
        }

        <div>
          { graph }
        </div>

        <div>
          <div style={ Style.TableOne }>
          <h3>{ FirstPortfolio.name }({ FirstPortfolio.username }): <span style={ dollar }>$</span>{ FirstPortfolio.value }</h3>
            <ComparisonTable assets={ FirstPortfolio.assets } />
          </div>
          <div style={ Style.TableTwo }>
          <h3>{ SecondPortfolio.name }({ SecondPortfolio.username }): <span style={ dollar }>$</span>{ SecondPortfolio.value }</h3>
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
  },

  isEmptyContainer: {
    textAlign: 'center'
  },

  onlySearchContainer: {
    display: 'flex',
    width: '100%',
    height: '250px'
  },

  onlySearch: {
    margin: 'auto',
    display: 'flex',
  },

  searchContainer: {
    display: 'flex',
    width: '100%',
  },

  search: {
    margin: '1rem auto',
    display: 'flex',
  },
}

export default ComparisonPage;