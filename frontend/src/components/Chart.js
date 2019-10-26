import React, { Component } from 'react';
import { render } from 'react-dom';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

class Chart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chartOptions: {
                series: [{
                    data:  []
                }]
            },
        };
    }

    componentDidMount() {
        this.getData( (data) => {
            console.log(data);
            this.setState({
                chartOptions: {
                    title: "Apple Stock This Week",
                    chart: {
                        type: 'spline'
                    },
                    series: [{
                        title: "Apple Stock This Week",
                        data: data
                    }]
                }
            });
        })
    }

    getData = async (callback) => {
        var chartData = [];
        this.callApi()
            .then(data => {
                Object.keys(data.history).forEach((key, index) => {
                    chartData.push([ key, parseFloat(data.history[key].close) ]);
                });
                callback(chartData.reverse());
            })
            .catch(err => {
                chartData = { Message: "An Error has occurred." };
                console.log(err);
            });
    }

    callApi = async () => {
        // Gets data for every hour in the current day
        const response = await fetch("/stock/history/AAPL/2019-10-21/2019-10-25");

        const body = await response.json();

        return body;
    }

    render() {
        const { chartOptions } = this.state;

        return (
            <div>
                <HighchartsReact 
                    highcharts = {Highcharts}
                    options = {chartOptions}
                />
            </div>
        )
    }
}

export default Chart;

