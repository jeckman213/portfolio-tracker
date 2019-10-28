import React, { Component } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';
import { isNullOrUndefined } from 'util';

// High-Low Charts for displaying information about a stock
// Gets passed 4 props:
// calltype - the type of stock api endpoint call (i.e. history or intraday)
// symbol - the stock symbol for the desired stock
// stateDate or minutes - if the calltype is history pass a state date (format: YYYY-MM-DD)
//                        if the calltype is intraday pass in minutes for frequency of data
// endDate or days - if the calltype is history pass an end date (format: YYYY-MM-DD)
//                   if the calltype is intraday pass in days for how long the frequency is
// NOTE: This is subject to change depending on what is seen fit
class HighLowChart extends Component {
    constructor(props) {
        super(props);

        if (isNullOrUndefined(this.props.calltype)) throw new Error("No calltype was specified");
        if (isNullOrUndefined(this.props.symbol)) throw new Error("No symbol or search term was specified");

        this.state = {
            chartOptions: {}
        };
    }

    componentDidMount() {
        this.getData( (data) => {
            console.log(data);
            this.setState({
                chartOptions: {
                    
                    rangeSelector: {
                        selected: 1
                    },
            
                    title: {
                        text: `${this.props.symbol} High-Low`
                    },
            
                    series: [{
                        type: 'candlestick',
                        name: `${this.props.symbol}`,
                        data: data,
                        dataGrouping: {
                            units: [
                                [
                                    'week', // unit name
                                    [1] // allowed multiples
                                ], [
                                    'month',
                                    [1, 2, 3, 4, 6]
                                ], [
                                    'year',
                                    [1]
                                ]
                            ]
                        }
                    }]
                }
            });
        })
    }

    getData = async (callback) => {
        var chartData = [];
        this.callApi()
            .then(data => {
                var callData = (this.props.calltype === "history" ? data.history : data.intraday);
                Object.keys(callData).forEach((key, index) => {
                    chartData.push([ Date.parse(key), parseFloat(callData[key].open), parseFloat(callData[key].high), 
                                        parseFloat(callData[key].low), parseFloat(callData[key].close) ]);
                });
                callback(chartData.reverse());
            })
            .catch(err => {
                chartData = { Message: "An Error has occurred." };
                console.log(err);
            });
    }

    callApi = async () => {
        var endpoint = `/stock/${this.props.calltype}/${this.props.symbol}`;
        this.props.calltype === "history" ? endpoint += `/${this.props.startDate}/${this.props.endDate}` :
            this.props.calltype === "intraday" ? endpoint += `/${this.props.minutes}/${this.props.days}` : endpoint += "";

        const response = await fetch(endpoint);

        const body = await response.json();

        return body;
    }

    render() {
        const { chartOptions } = this.state;

        return (
            <div>
                <HighchartsReact 
                    highcharts = {Highcharts}
                    constructorType = {'stockChart'}
                    options = {chartOptions}
                />
            </div>
        )
    }
}

export default HighLowChart;

