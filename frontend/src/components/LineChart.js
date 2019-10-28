import React, { Component } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';
import { isNullOrUndefined } from 'util';

// Line chart graphing for stocks
// The component must be pasted a calltype, a symbol, and either a startDate/endDate, or minutes/days
// Line chart component currently only supports intraday and history api calls to stocks
class LineChart extends Component {
    constructor(props) {
        super(props);

        if (isNullOrUndefined(this.props.calltype)) throw new Error("No calltype was specified");
        if (isNullOrUndefined(this.props.symbol)) throw new Error("No symbol or search term was specified");

        this.state = {
            chartOptions: {
                series: [{
                    data:  []
                }]
            },
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
                        text: `${this.props.symbol} Price`,
                    },
                    subtitle: {
                        text: 'Price based on closing price per timeframe'
                    },
            
                    series: [{
                        name: `${this.props.symbol}`,
                        data: data,
                        tooltip: {
                            valueDecimals: 2
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
                    chartData.push([ Date.parse(key), parseFloat(callData[key].close) ]);
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

export default LineChart;

