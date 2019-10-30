import React, { Component } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';
import { isNullOrUndefined } from 'util';
import PropTypes from 'prop-types';
import {getStockInfo} from "../../actions/stock/stockAction";

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
            this.setState({
                chartOptions: {
                    
                    rangeSelector: {
                        selected: 1
                    },
            
                    title: {
                        text: `${this.props.symbol} High-Low ${this.props.calltype}`
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

        getStockInfo(data => {
                Object.keys(data).forEach(key => {
                    chartData.push([ Date.parse(key), parseFloat(data[key].open), parseFloat(data[key].high), 
                                        parseFloat(data[key].low), parseFloat(data[key].close) ]);
                });

                chartData.reverse();

                callback(chartData);
            },
            this.props.calltype,
            this.props.symbol,
            start,
            end);
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

HighLowChart.propTypes = {
    calltype:PropTypes.oneOf([
        'history', 'intraday'
    ]).isRequired,
    symbol:PropTypes.string.isRequired,
    startDate:PropTypes.string,
    endDate:PropTypes.string,
    minutes:PropTypes.string,
    days:PropTypes.string
}

export default HighLowChart;

