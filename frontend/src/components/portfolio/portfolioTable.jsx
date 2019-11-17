import React, { Component } from 'react';

import { dollar } from "../../assets/styles";

class PortfolioTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stocks: this.props.stocks
        }

        this.printStocks = this.printStocks.bind(this);
    }

    printStocks = () => {
        let tableData = [];

        for(let i = 0; i < this.state.stocks.length; i++) {
            tableData.push(
                    <tr>
                        <td>{ this.state.stocks[i]["symbol"] }</td>
                        <td><input type="text" value={ this.state.stocks[i]["shares"] } className="portfolio-table-input" readOnly={true}/></td>
                        <td><input type="text" value={ this.state.stocks[i]["purchasedAt"] } className="portfolio-table-input" readOnly={true}/></td>
                        <td><span style={ dollar }>$</span>{ this.state.stocks[i]["value"].toFixed(2) }</td>
                        <td><button className="button-link blue"><i className="fas fa-edit"></i></button></td>
                        <td><button className="button-link red"><i className="fas fa-trash"></i></button></td>
                    </tr>
            )
        }

        return tableData;
    }

    render() {
        return(
            <table className="portfolio-table">
                <tbody>
                    <tr>
                        <th>Symbol</th>
                        <th>Shares</th>
                        <th>Purchase Date</th>
                        <th>Total Value</th>
                        <th></th>
                        <th></th>
                    </tr>
                    { this.printStocks() }
                </tbody>
            </table>
        )
    }
}

export default PortfolioTable;