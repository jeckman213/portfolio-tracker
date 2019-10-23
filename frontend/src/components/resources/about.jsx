import React, { Component } from 'react';
import hills from "../../assets/images/Albany.jpg";

class About extends Component {
  render() {
    return (
      <section className="description">
        <div>
          <i className="fas fa-chevron-circle-down"></i>
          <h2>About Us.</h2>
          <div>
            <p>Three teams enter only one team survives... wait nevermind wrong class. Group Z is a AGILE software development team learning how to develop software under Andrew Gallo.</p>
            <br />
            <p> Stocks are bought and sold on stock markets, which bring together buyers and sellers of publicly traded company shares. Stock markets operate kind of like auctions, where potential buyers name their highest price (“the bid”) and potential sellers name their lowest price (“the ask”). The actual price a trade is executed at is somewhere between the bid and the ask. Trades can be placed by stockbrokers, usually on behalf of portfolio managers or individual investors like you. The stock market in the US is made up of 13 exchanges, the best known are the New York Stock Exchange and NASDAQ..</p> 
          </div>
        </div>
        <img src={ hills } />
      </section>
    );
  }
}

export default About;
