import React, { Component } from 'react';
import HighLowChart from "./HighLowChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

class Graphs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            symbol: "AAPL",
            temp: "AAPL",
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState( { temp: event.target.value } );
    }

    handleSubmit(event) {
        this.setState( { symbol: this.state.temp } );
        this.getStockData();
        event.preventDefault();
    }

    render() {
        return(
            <div>
                <HighLowChart symbol={this.state.symbol} />

                <LineChart symbol={this.state.symbol} />

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Symbol:
                        <input id='symbol' type='text' value={this.state.temp} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

                <PieChart slices={[{
                        name: 'GE',
                        y: 45.4
                    }, {
                        name: 'AAPL',
                        y: 34.6
                    }, {
                        name: 'AMD',
                        y: 12.5
                    }, {
                        name: 'AMC',
                        y: 7.5
                    }]}
                    chartTitle={"Percentages of Portfolio"} 
                />
            </div>
        )
    }
}

export default Graphs;