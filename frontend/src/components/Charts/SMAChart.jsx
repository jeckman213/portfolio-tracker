import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { isNullOrUndefined } from 'util';
import loading from '../../assets/loading.svg';

import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';
require("highcharts/indicators/indicators-all")(Highcharts);

class SMAChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chartOptions: {},
            isLoading: true,
            symbol: this.props.symbol,
            chartData: []
        }

        this.turnonSma = this.turnonSma.bind(this);
    }

    componentDidMount() {
        this.getStockData();
    }

    getStockData = async () => {
        Axios.get(`/api/alpha/daily/${this.state.symbol}`)
        .then(res => {
            const { data } = res;

            // If the request limit was reached 
            if (isNullOrUndefined(data.Note)) {
                Object.keys(data).forEach(count => {
                    this.state.chartData.push( [data[count].UTC, data[count].open, data[count].high, data[count].low, data[count].close] );
                });
            } else {
                console.error(data.Note);
            }

                this.setState({
                    chartOptions: {
                        
                        rangeSelector: {
                            selected: 1
                        },
                
                        title: {
                            text: `${this.state.symbol} SMA`
                        },

                        legend: {
                            enabled: true
                        },
                
                        plotOptions: {
                            series: {
                                showInLegend: true
                            }
                        },
                
                        series: [{
                            type: 'ohlc',
                            id: 'stock',
                            name: `${this.state.symbol}`,
                            data: this.state.chartData,
                        },  {
                            type: 'sma',
                            linkedTo: 'stock'
                        }]
                    },
                    isLoading: false
                });

        })
        .catch(error => {
            console.error(error);
        });

    }

    turnonSma = (event) => {
        var checked = event.target.checked;
        var series;
        if (checked) {
            series = [{
                type: 'ohlc',
                id: 'stock',
                name: `${this.state.symbol}`,
                data: this.state.chartData,
            }, {
                type: 'sma',
                linkedTo: 'stock'
            }]
        } else {
            series = [{
                type: 'ohlc',
                id: 'stock',
                name: `${this.state.symbol}`,
                data: this.state.chartData,
            }]
        }
        this.setState({
            chartOptions: {
                
                rangeSelector: {
                    selected: 1
                },
        
                title: {
                    text: `${this.state.symbol} SMA`
                },

                legend: {
                    enabled: true
                },
        
                plotOptions: {
                    series: {
                        showInLegend: true
                    }
                },
        
                series: series
            },
            isLoading: false
        });
    }


    render() {
        const { chartOptions, isLoading } = this.state;

        return (
            <div className='chart'>
                {!isLoading &&
                <HighchartsReact 
                    highcharts = {Highcharts}
                    constructorType = {'stockChart'}
                    options = {chartOptions}
                />
                }
                {isLoading &&
                    <img className='isLoading' src={loading} alt="Loading..." />
                }
                <input type="checkbox" defaultChecked={true} onChange={this.turnonSma}/>
                <label>SMA</label>
            </div>
        )
    }
}

SMAChart.propTypes = {
    symbol:PropTypes.string.isRequired,
}

export default SMAChart;