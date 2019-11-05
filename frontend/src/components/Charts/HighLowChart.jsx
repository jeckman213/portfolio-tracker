import React, { Component } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';
import PropTypes from 'prop-types';
import Axios from 'axios';

// High-Low Charts for displaying information about a stock
// Gets passed 1 prop:
// symbol - the stock symbol for the desired stock
// NOTE: This is subject to change depending on what is seen fit
class HighLowChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chartOptions: {},
            isLoading: true
        };
    }

    componentDidMount() {
        this.getStockData();
    }

    getStockData = async () => {
         // Highcharts/Highstocks needs data in an array format instead of an object
        // So, data is converted to array here
        var chartData = [];

        Axios.get(`/alpha/daily/${this.props.symbol}`)
        .then(res => {
            const data = res.data;

            Object.keys(data).forEach(count => {
                chartData.push( [data[count].UTC, data[count].open, data[count].high, data[count].low, data[count].close] );
            });

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
                            data: chartData,
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
                    },
                    isLoading: false
                });

        })
        .catch(error => {
            console.log(error);
        });

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
    symbol:PropTypes.string.isRequired,
}

export default HighLowChart;

