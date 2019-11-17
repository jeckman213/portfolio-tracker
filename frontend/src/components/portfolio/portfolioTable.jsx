import React, { Component } from 'react';

import { dollar } from "../../assets/styles";

class PortfolioTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stocks: this.props.stocks
        }

        this.printStocks = this.printStocks.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleEdit = (event) => {
        var id = event.target.id;
        const shareId = id.replace('edit', 'shares');
        const dateId = id.replace('edit', 'date');

        document.getElementById(shareId).readOnly = false;
        document.getElementById(dateId).readOnly = false;
    }

    printStocks = () => {
        let tableData = [];

        for(let i = 0; i < this.state.stocks.length; i++) {
            tableData.push(
                    <tr id={'row' + i}>
                        <td>{ this.state.stocks[i]["symbol"] }</td>
                        <td><input id={'shares' + i} type="text"  defaultValue={ this.state.stocks[i]["shares"] } className="portfolio-table-input" readOnly={true}/></td>
                        <td><input id={'date' + i} type="date" defaultValue={ this.state.stocks[i]["purchasedAt"] } className="portfolio-table-input" readOnly={true}/></td>
                        <td><span style={ dollar }>$</span>{ this.state.stocks[i]["value"].toFixed(2) }</td>
                        <td><button className="button-link blue" onClick={this.handleEdit}><i id={'edit' + i} className="fas fa-edit"></i></button></td>
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