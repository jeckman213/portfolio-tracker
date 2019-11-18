import React, { Component } from 'react';

import { dollar } from "../../assets/styles";
import axios from 'axios';

class StockPageHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name,
            isLoading: true
        }

        console.log(this.props.name);
    }

    componentDidMount() {
        const { name } = this.state;
        axios.get(`/api/stock/realtime/${name}`)
          .then(res => {
              console.log(res.data);
            const { price } = res.data;
            this.setState({ price, isLoading: false })
          })
          .catch(error => console.error(error));
      }

    handleChange = (event) => {
        event.preventDefault();

        var choice = event.target.value === "Line" ? 0 : 1;

        this.props.view(choice);
    }

    render() {
        const { name, price, isLoading } = this.state;
        return(
            <div className="portfolio-header-container">
                {!isLoading &&
                <div>
                    <div className="portfolio-head-text" style={ style.text }>
                        <h2>
                            { name }: 
                                <span style={ dollar }>$</span>
                                { price }
                        </h2>
                    </div>
                    <div style={ style.dropdown }>
                        <select onChange={this.handleChange}>
                            <option value="Line">Line Graph</option>
                            <option value="High-Low">High-Low Graph</option>
                        </select>
                    </div>
                </div>
                }
            </div>
        )
    }
}

const style = {
    dropdown: {
        float: 'center'
    },

    text: {
        float:'left',
        width: '45%'
    },

}

export default StockPageHeader;