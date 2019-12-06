import React, { Component } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';
import PropTypes from 'prop-types';
import axios from 'axios';

import { isNullOrUndefined } from 'util';
import loading from '../../assets/loading.svg';

require('highcharts/indicators/indicators-all')(Highcharts);

// High-Low Charts for displaying information about a stock
// Gets passed 1 prop:
// symbol - the stock symbol for the desired stock
// NOTE: This is subject to change depending on what is seen fit
class HighLowChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartOptions : {},
      isLoading : true
    };
  }

  componentDidMount() {
    this.getStockData();
  }
  
  componentDidUpdate(prevProps) {
    if(this.props.symbol !== prevProps.symbol){
      this.getStockData();
    }
  }

  getStockData = async () => {
    // Highcharts/Highstocks needs data in an array format instead of an object
    // So, data is converted to array here
    this.setState({ isLoading : true });

    const
      symbol = this.props.symbol,
      chartData = [];

    axios.get(`/api/alpha/daily/${symbol}`)
      .then(res => {
        const { data } = res;

        // If the request limit was reached 
        if (isNullOrUndefined(data.Note)) {
          Object.keys(data).forEach(count => {
            chartData.push( [data[count].UTC, data[count].open, data[count].high, data[count].low, data[count].close] );
          });
        } 
        else { console.error(data.Note); }

        this.setState({
          isLoading : false,
          chartOptions : { 
            rangeSelector : { selected : 0 },
            title: { text : `${symbol} High-Low` },
            legend : { enabled : true },
            plotOptions: {
              series: {
                showInLegend: true
              }
            },
            yAxis : [
              {
                height : '75%',
                resize : {
                  enabled: true
                },
                labels : {
                  align : 'right',
                  x : -3
                },
                title : {
                  text : `${this.state.symbol}`
                }
              },
              {
                top : '75%',
                height : '25%',
                labels : {
                  align : 'right',
                  x : -3
                },
                offset : 0,
                title : {
                  text: 'MACD'
                }
              }
            ],
            series: [
              {
                type : 'candlestick',
                id : 'stock',
                name : symbol,
                data : chartData,
                dataGrouping : {
                  units : [
                    [ 'week', [1] ], // unit name / allowed multiples
                    [ 'month', [1, 2, 3, 4, 6] ],
                    [ 'year', [1] ]
                  ]
                }
              }, 
              {
                linkedTo : 'stock',
                type : 'sma',
                visible : false
              }, 
              {
                linkedTo : 'stock',
                type : 'macd',
                yAxis : 1,
                visible : false
              }
            ]
          }
        });
    })
    .catch(console.error);
  }

  render() {
    const { chartOptions, isLoading } = this.state;

    return (
      <div className='chart'>
        { isLoading
            ? <img className='isLoading' src={loading} alt="Loading..." />
            : <HighchartsReact 
                highcharts={ Highcharts }
                constructorType={ 'stockChart' }
                options={ chartOptions }
              />
        }
      </div>
    )
  }
}

HighLowChart.propTypes = {
    symbol:PropTypes.string.isRequired,
}

export default HighLowChart;

