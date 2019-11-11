import React, { Component } from 'react';
import HighLowChart from "./HighLowChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import SMAChart from "./SMAChart";
import MACDChart from "./MACDChart";

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

                <SMAChart symbol={this.state.symbol} />

                <MACDChart symbol={this.state.symbol} />

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