import React, { Component } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';
import { isNullOrUndefined } from 'util';
import PropTypes from 'prop-types';
import {getStockInfo} from "../../actions/stock/stockAction";

// Line chart graphing for stocks
// The component must be pasted a calltype, a symbol, and either a startDate/endDate, or minutes/days
// Line chart component currently only supports intraday and history api calls to stocks
class LineChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chartOptions: {}
        };
    }

    componentDidMount() {
        this.getData(data => {
            this.setState({
                chartOptions: {
                    rangeSelector: {
                        buttons: [{
                            type: 'month',
                            count: 1,
                            text: '1m'
                        }, {
                            type: 'month',
                            count: 3,
                            text: '3m'
                        }, {
                            type: 'month',
                            count: 6,
                            text: '6m'
                        }, {
                            type: 'year',
                            count: 1,
                            text: '1y'
                        }, {
                            type: 'all',
                            text: 'All'
                        }],
                        selected: 4
                    },

                    title: {
                        text: `${this.props.symbol} Price ${this.props.calltype}`,
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
                    }],

                    responsive: {
                        rules: [{
                            condition: {
                                maxWidth: 500
                            },
                            chartOptions: {
                                chart: {
                                    height: 300
                                },
                                subtitle: {
                                    text: null
                                },
                                navigator: {
                                    enabled: false
                                }
                            }
                        }]
                    }
                }
            });
        })
    }

    getData = async (callback) => {
        // Highcharts/Highstocks needs data in an array format instead of an object
        // So, data is converted to array here
        var chartData = [];

        // Checks whether to use minutes/days or startDate/endDate
        var start, end;
        if (this.props.calltype === 'history') {
            start = this.props.startDate;
            end = this.props.endDate
        } else {
            start = this.props.minutes;
            end = this.props.days;
        }

        getStockInfo((data) => {
            // Checks if call failed
            if (!isNullOrUndefined(data.Message)) {
                console.log(data.Message);
                return [];
            }

            // Converts the info into an array because that is the format Highcharts expects
            Object.keys(data).forEach((key) => {
                chartData.push([ Date.parse(key), parseFloat(data[key].close) ]);
            });

            // Reverses data because api retreives data in closest to latest date
            chartData.reverse();

            callback(chartData);
            },
            this.props.calltype, this.props.symbol, start, end);
        
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

// Prop checking
LineChart.propTypes = {
    calltype:PropTypes.oneOf([
        'history', 'intraday'
    ]).isRequired,
    symbol:PropTypes.string.isRequired,
    startDate:PropTypes.string,
    endDate:PropTypes.string,
    minutes:PropTypes.oneOfType([
        PropTypes.string, PropTypes.number
    ]),
    days:PropTypes.oneOfType([
        PropTypes.string, PropTypes.number
    ])
}

export default LineChart;

