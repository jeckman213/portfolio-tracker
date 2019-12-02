import React, { Component } from 'react';

import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';
import { isNullOrUndefined } from 'util';

import loading from '../../assets/loading.svg';

class PortfolioValueGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartOptions : {},
      isLoading : true,
      inData : this.props.data,
      inData2 : this.props.data2,
      portfolioName : this.props.name,
      portfolioName2 : this.props.name2
    }
  }

  componentDidMount() {
    var chartData = [];
    var chartData2 = [];
    var name;
    Object.keys(this.state.inData).forEach(key => {
      chartData.push([Date.parse(key), this.state.inData[key]["value"]]);
    });

    if (!isNullOrUndefined(this.state.inData2)) {
      Object.keys(this.state.inData2).forEach(key => {
        chartData2.push([Date.parse(key), this.state.inData2[key]["value"]]);
      });
      name = `${this.state.portfolioName} vs. ${this.state.portfolioName2}`;
    } else { name = `${this.state.portfolioName} Price` }

    chartData = chartData.reverse();
    chartData2 = chartData2.reverse();

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
      title : { text : name, },
      subtitle: { text : 'Price based on closing price per timeframe' },
      plotOption : {
        series : {
          compare : 'price',
          showInNavigator : true
        }
      },
      tooltip : {
        valueDecimals : 2,
        split : true
      },

      series : [{
        name : `${this.state.portfolioName}`,
        data : chartData,
        id : 'chart1'
      }, {
        name : `${this.state.portfolioName2}`,
        data : chartData2,
        id : 'chart2'
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