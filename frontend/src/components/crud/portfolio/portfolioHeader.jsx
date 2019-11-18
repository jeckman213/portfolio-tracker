import React, { Component } from 'react';

import { dollar } from "../../../assets/styles";

class PortfolioHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name,
            value: this.props.value
        }
    }

    handleChange = (event) => {
        event.preventDefault();

        var choice = event.target.value === "Pie" ? 0 : 1;

        this.props.view(choice);
    }

    render() {
        return(
            <div className="portfolio-header-container">
                <div className="portfolio-head-text">
                    <h3>{ this.state.name }: <span style={ dollar }>$</span>{ this.state.value }</h3>
                </div>
                <div className="portfolio-head-dropdown">
                    <select onChange={this.handleChange}>
                        <option value="Pie">Pie Graph</option>
                        <option value="Line">Line Graph</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default PortfolioHeader;