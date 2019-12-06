import React, { Component } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';
import PropTypes from 'prop-types';
import axios from 'axios';

import loading from '../../assets/loading.svg';
import { isNullOrUndefined } from 'util';

// Line chart graphing for stocks
// The component must be pasted a calltype, a symbol, and either a startDate/endDate, or minutes/days
// Line chart component currently only supports intraday and history api calls to stocks
class LineChart extends Component {
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
            chartData.push([data[count].UTC, data[count].adjustedClose]);
          });
        } 
        else {
          console.error(data.Note);
          this.setState({ callsFlag: true, isLoading: false })
        }

      this.setState({
        isLoading : false,
        chartOptions : {
          rangeSelector: {
            selected : 0,
            buttons : [
              {
                type : 'month',
                count : 1,
                text : '1m'
              }, 
              {
                type : 'month',
                count : 3,
                text : '3m'
              }, 
              {
                type : 'month',
                count : 6,
                text : '6m'
              }, 
              {
                type : 'year',
                count : 1,
                text : '1y'
              }, 
              {
                type : 'all',
                text : 'All'
              }
            ],
          },
          title: { text: `${symbol} Price`, },
          subtitle: { text: 'Price based on closing price per timeframe' },
          series : [
            {
              name : symbol,
              data : chartData,
              tooltip : { valueDecimals: 2 }
            }
          ],
          responsive : {
            rules : [{
              condition : {  maxWidth : 500 },
              chartOptions : {
                chart : {
                    height : 300
                },
                subtitle : {
                    text : null
                },
                navigator : {
                    enabled : false
                }
              }
            }]
          }
        }
      });
    })
    .catch(console.error);
  }

  render() {
    const { chartOptions, isLoading, callsFlag } = this.state;

    return (
      <div className='chart'>
        { isLoading 
          ? <img className='isLoading' src={ loading } alt="Loading..." />
          : <HighchartsReact 
              highcharts={ Highcharts }
              constructorType={ 'stockChart' }
              options={ chartOptions }
            />
        }
        { callsFlag &&
          <h1 style={ style.callsFlag }>Too many calls at once</h1>
        }
      </div>
    )
  }
}

const style = {
  callsFlag: {
    textAlign: 'center'
  }
}

// Prop checking
LineChart.propTypes = {
  symbol : PropTypes.string.isRequired,
}

export default LineChart;

