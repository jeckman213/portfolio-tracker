import React, { Component } from 'react';

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
                    <td>{ this.state.stocks[i]["shares"] }</td>
                    <td>{ this.state.stocks[i]["purchasedAt"] }</td>
                    <td>{ this.state.stocks[i]["value"].toFixed(2) }</td>
                    <td><button>Edit</button></td>
                    <td><button>Delete</button></td>
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