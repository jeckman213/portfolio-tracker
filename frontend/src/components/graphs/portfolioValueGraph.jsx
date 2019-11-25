import React, { Component } from 'react';

import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';

import loading from '../../assets/loading.svg';

class PortfolioValueGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartOptions : {},
      isLoading : true,
      inData : this.props.data,
      portfolioName : this.props.name
    }
  }

  componentDidMount() {
    var chartData = [];
    Object.keys(this.state.inData).forEach(key => {
      chartData.push([Date.parse(key), this.state.inData[key]["value"]]);
    });

    chartData = chartData.reverse();

    this.setState({
      isLoading : false,
      chartOptions : {
        rangeSelector : {
          selected : 0,
          buttons : [
            {
              type: 'month',
              count: 1,
              text: '1m'
            }, 
            {
              type: 'month',
              count: 3,
              text: '3m'
            }, 
            {
              type: 'month',
              count: 6,
              text: '6m'
            }, 
            {
              type: 'year',
              count: 1,
              text: '1y'
            }, 
            {
              type: 'all',
              text: 'All'
            }
          ]
      },
      title : { text : `${this.state.portfolioName} Total`, },
      subtitle: { text : 'Price based on closing price per timeframe' },
      series : [{
        name : `${this.state.portfolioName}`,
        data : chartData,
        tooltip : { valueDecimals : 2 }
      }],
      responsive : {
        rules : [{
          condition : { maxWidth: 500 },
          chartOptions: {
            chart : { height : 300 },
            subtitle: { text : null },
            navigator: { enabled : false }
          }
        }]
      }
    },
    });
  }

  render(){
    const { isLoading, chartOptions } = this.state;
    return (
      <div className='chart'>
        { isLoading
            ? <img className='isLoading' src={loading} alt="Loading..." />
            : <HighchartsReact 
                highcharts = {Highcharts}
                constructorType = {'stockChart'}
                options = {chartOptions}
              />
        }
      </div>
    )
  }
}

export default PortfolioValueGraph;