import React, { Component } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

// Pie Chart for portfolios 
// Get passed a slices prop
// Slices holds a an array of objects that have two attributes:
// name - which is a string name for that slice
// y - which is the percent of the pie chart that slice will be
// NOTE: This may change when portfolios are tied into an api endpoint
class PieChart extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      metric : 'value',
      chartOptions : {}
    }
  }

  componentDidMount() {
    var { portfolioName } = this.props;
    
    if (portfolioName === "null(null)") portfolioName = "";
    
    const 
      data = this.props.data,
      metric = this.state.metric;

    this.setState({
      chartOptions : {
        chart : {
          plotShadow: false,
          type: 'pie',
        },
        title : { text: portfolioName },
        tooltip : { pointFormat : '{series.name}: <b>{point.percentage:.1f}%</b>' },
        plotOptions : {
          pie : {
            allowPointSelect : true,
            cursor : 'pointer',
            dataLabels : {
              enabled : true,
              format : '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
          }
        },
        series : [{
          colorByPoint : true,
          data : data[metric]
        }],
      },
    });
  }

  render() {
    const { chartOptions } = this.state;

    return (
      <div>
        <HighchartsReact 
          highcharts={ Highcharts }
          options={ chartOptions }
        />
      </div>
    )
  }
}

export default PieChart;