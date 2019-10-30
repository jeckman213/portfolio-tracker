import React, { Component } from 'react';
import HighLowChart from "./HighLowChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

class Graphs extends Component {
    render() {
        return(
            <div>
                <LineChart calltype={"history"} symbol={"GE"} startDate={"1980-10-19"} endDate={"2019-10-29"} />
                <LineChart calltype={"intraday"} symbol={"MSFT"} minutes={"60"} days={"30"} />
                <HighLowChart calltype={"history"} symbol={"AAPL"} startDate={"2000-10-19"} endDate={"2019-10-21"} />
                <HighLowChart calltype={"intraday"} symbol={"INTC"} minutes={"60"} days={"7"} />
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