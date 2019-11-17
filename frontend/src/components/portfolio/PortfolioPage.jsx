import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isNullOrUndefined } from 'util';

import PieGraph from '../graphs/pieGraph';
import PortfolioTable from "./portfolioTable";
import PortfolioHead from "./portfolioHeader";
import PortfolioValueGraph from "../graphs/portfolioValueGraph";

import getPortfolio from "../../utils/getPortfolio";
import { getPercentages } from '../../utils/pieChartPercentage.js';

import loading from "../../assets/loading.svg"

class PortfolioPage extends Component {
    constructor(props) {
        super(props);

        var userID, portfolioID;

        if (isNullOrUndefined(this.props.userID)) userID = 1;
        if (isNullOrUndefined(this.props.portfolioID)) portfolioID = 1;

        this.state = {
            currentGraph: 0,
            isLoading: true,
            userID: userID,
            portfolioID: portfolioID
        }

        this.changeGraph = this.changeGraph.bind(this);
    }

    componentDidMount() {
        const { userID, portfolioID } = this.state;
        getPortfolio(userID, portfolioID, res => {
            const { data } = res;
            this.setState({
                // 0 => Pie; 1 => Line
                currentGraph: 0,
                portfolio: data,
                name: data['name'],
                value: data['value'],
                historical: data['historical'],
                assets: data['assets'],
                isLoading: false
            });
        })
    }

    changeGraph = (value) => {
        this.setState({
            currentGraph: value,
        });
    }

    render(){
        const { name, value,  assets, isLoading, currentGraph, historical } = this.state;

        if (!isLoading) {
            var graph = <h1>There was a problem</h1>;
            if (currentGraph === 0) {
                graph = <PieGraph slices={getPercentages(assets)} chartTitle={`${name} Assets`} />
            }
            else {
                graph = <PortfolioValueGraph data={historical} name={name} />
            }
    
            return(
                <div className="portfolio-page">
                
                    <PortfolioHead 
                        name={name} 
                        value={value} 
                        view={this.changeGraph.bind(this)}
                    />

                    {graph}

                    <PortfolioTable stocks={assets} />
                </div>
            );
        }
        else {
            return(
                <div className="portfolio-page">
                    <img className='isLoading' src={loading} alt="Loading..." />
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
