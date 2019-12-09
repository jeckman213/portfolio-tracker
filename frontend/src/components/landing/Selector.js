import React, { Component } from "react";

export default class Selector extends Component {
  state = {
    entered: ""
  };

  render() {
    const { getData } = this.props;
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          getData(this.state.entered.toLowerCase());
          this.setState({
            entered: ""
          });
        }}
      >
        <div className="input-stock">
          <input
            className="form-control"
            aria-label="stock-symbol"
            aria-describedby="enter-stock-symbol"
            type="text"
            placeholder="Enter a Symbol"
            value={this.state.entered}
            onChange={e => {
              this.setState({
                entered: e.target.value
              });
            }}
          />
          <div className="input-button" />
          <button
            className="enter"
            type="button"
            onClick={e => {
              e.preventDefault();
              getData(this.state.entered.toLowerCase());
              this.setState({
                entered: ""
              });
            }}
          >
            ENTER
          </button>
        </div>
      </form>
    );


    
  }
}
