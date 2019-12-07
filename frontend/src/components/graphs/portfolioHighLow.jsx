import React, { Component } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';
import { isNullOrUndefined } from 'util';

class PortfolioHighLow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      historical : this.props.data,
      portfolioName : this.props.name,
      historical2 : this.props.data2,
      portfolioName2 : this.props.name2,
      chartOptions : {}
    }
  }

  componentDidMount() {
    let { historical, historical2, portfolioName, portfolioName2 } = this.state;

    console.log(historical);

    var chartData = [],
        chartData2 = [];

    Object.keys(historical).forEach(key => {
      chartData.push( [Date.parse(key), historical[key].open, historical[key].high, historical[key].low, historical[key].close] );
    });

    Object.keys(historical2).forEach(key => {
      chartData2.push( [Date.parse(key), historical2[key].open, historical2[key].high, historical2[key].low, historical2[key].close] );
    });

    chartData = chartData.reverse();
    chartData2 = chartData2.reverse();

    var name;

    if (isNullOrUndefined(portfolioName2)) { 
      name = `${portfolioName} High-Low` 
      portfolioName2 = "";
    }
    else {
      name = `${portfolioName} vs. ${portfolioName2} High-Low`;
    }

    this.setState({
      chartOptions : {
        rangeSelector : { selected : 0 },
            title: { text : name },
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
                  text : name
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
                name : portfolioName,
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
              },  {
                type : 'candlestick',
                id : 'stock2',
                name : portfolioName2,
                data : chartData2,
                dataGrouping : {
                  units : [
                    [ 'week', [1] ], // unit name / allowed multiples
                    [ 'month', [1, 2, 3, 4, 6] ],
                    [ 'year', [1] ]
                  ]
                }
              }, 
              {
                linkedTo : 'stock2',
                type : 'sma',
                visible : false
              }, 
              {
                linkedTo : 'stock2',
                type : 'macd',
                yAxis : 1,
                visible : false
              }
            ]
      }
    });
  }

  render() {
    const { chartOptions } = this.state;

    return (
      <HighchartsReact 
        highcharts={ Highcharts }
        constructorType={ 'stockChart' }
        options={ chartOptions }
      />
    )
  }
}

export default PortfolioHighLow;