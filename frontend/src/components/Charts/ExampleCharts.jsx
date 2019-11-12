import React, { Component } from 'react';
import HighLowChart from "./HighLowChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

class Graphs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            symbol: "GE",
        }

    }

    render() {
        return(
            <div>

                <HighLowChart symbol={this.state.symbol} />
                
                <LineChart symbol={this.state.symbol} />

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