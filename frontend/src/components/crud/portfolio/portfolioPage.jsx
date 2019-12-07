import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { stringify as queryStringify } from 'query-string';

import PieGraph from '../../graphs/pieGraph';
import PortfolioTable from "./portfolioTable";
import PortfolioHead from "./portfolioHeader";
import PortfolioValueGraph from "../../graphs/portfolioValueGraph";

import { getPercentages } from '../../../utils/pieChartPercentage.js';

import loading from "../../../assets/loading.svg"

class PortfolioPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      currentGraph: 0,
      userId : 0,
      portfolioId : 0,
      name : null,
      owner : null,
      value : 0,
      shares : 0,
      assets : [],
      history : {},
      pieChartData : {
        value : [],
        shares : []
      }
    }

    this.changeGraph = this.changeGraph.bind(this);
  }

  async componentDidMount() {
    const 
      { username, portfolioName } = this.props.match.params,
      queryObj = { username, portfolioName },
      queryString = queryStringify(queryObj),
      { data : ids} = await axios.get(`/api/search/portfolio?${queryString}`),
      success = ids.success;
      
      if(success){
        const { userId, portfolioId } = ids;
        this.setState({ userId, portfolioId });
        
        const 
          { data } = await axios.get(`/api/user/${userId}/portfolio/${portfolioId}`),
          { name, owner, value, shares, assets, history, pieChartData } = data;
        this.setState({ name, owner, value, shares, assets, history, pieChartData, isLoading : false });
        console.log(data);
    }
  }

  changeGraph = (value) => {
    this.setState({ currentGraph : value });
  }

  render(){
    const { name, value, assets, currentGraph, history, pieChartData, userId, portfolioId, isLoading } = this.state;

    if (!isLoading) {
      var graph = <h1>There was a problem</h1>;
      if (currentGraph === 0) {
        graph = <PieGraph data={ pieChartData } portfolioName={ name } />
      }
      else {
        graph = <PortfolioValueGraph data={history} name={name} />
      }

      return(
        <div className="portfolio-page">
          <PortfolioHead 
            name={ name } 
            value={ value } 
            view={ this.changeGraph.bind(this) }
          />
          { graph }
          <PortfolioTable userId={ userId } portfolioId={ portfolioId } assets={ assets } />
        </div>
      );
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

PortfolioPage.propTypes = {
  userID: PropTypes.number,
  portfolioID: PropTypes.number
}

export default PortfolioPage;
