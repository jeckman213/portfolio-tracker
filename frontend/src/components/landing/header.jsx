import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { title, dollar, subtitle } from "../../assets/styles"

class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <h1 style={ title }>Portfolio<span style={ dollar }>$</span></h1>
          <p style={ subtitle }>A <em>cutting edge</em>, minimalist’s portfolio tracking web app.</p>

          <p>What would you do if you were given $100,000?</p>
          <p>Would you spend it all at once? Would you think about putting some of it in the bank?</p>
          <p>We’d like to teach you how to invest it, so you might grow it.</p>
          <p>Through Portfolios, you will gain a fundamental understanding of investing and how you might get your money to work for you.</p>
          <Link to="/packages">Sign Up  <i className="fas fa-chevron-circle-right"></i></Link> 
        </div>
      </header>
    );
  }
}

export default Header;
