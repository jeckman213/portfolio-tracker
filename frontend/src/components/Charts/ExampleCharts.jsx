import React, { Component } from 'react';
import HighLowChart from "./HighLowChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

class Graphs extends Component {
    render() {
        return(
            <div>
                <LineChart symbol={"GE"} />
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