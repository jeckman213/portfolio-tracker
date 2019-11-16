import React, { Component } from 'react';

import PieGraph from '../graphs/pieGraph';
import PortfolioTable from "./portfolioTable";
import PortfolioHead from "./portfolioHeader";
import PortfolioValueGraph from "../graphs/portfolioValueGraph";

import portfolio from "./portfolio";
import { getPercentages } from '../../utils/pieChartPercentage.js';

class PortfolioPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            port: portfolio,
            // 0 => Pie; 1 => Line
            currentGraph: 0,
            name: portfolio['name'],
            value: portfolio['value'],
            historical: portfolio['historical'],
            assets: portfolio['assets']
        }

        this.changeGraph = this.changeGraph.bind(this);
    }

    changeGraph = (value) => {
        this.setState({
            currentGraph: value
        })
    }


    render(){
        const { currentGraph, name, value, historical, assets } = this.state;
        return(
            <div>
                <PortfolioHead 
                    name={name} 
                    value={value} 
                    view={this.changeGraph.bind(this)}
                />

                {(currentGraph === 0) &&
                    <PieGraph slices={getPercentages(assets)} />
                }
                {(currentGraph === 1) &&
                    <PortfolioValueGraph data={historical} name={name} />
                }
                <PortfolioTable stocks={assets} />
            </div>
        )
    }
}


export default PortfolioPage;
