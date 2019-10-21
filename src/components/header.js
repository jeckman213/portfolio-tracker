import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
       
          <div>
            <h1>PORTFOLIOS < br/> Stock Manager</h1>
            <p>What would you do if you were given $100,000? Would you spend it all at once? Would you think about putting some of it in the bank? We’d like to teach you how to invest it, so you might grow it. Through Portfolios, you will gain a fundamental understanding of investing and how you might get your money to work for you."</p>
            <Link to="/packages">Sign Up  <i className="fas fa-chevron-circle-right"></i></Link> 
          </div>
        
      </header>
    );
  }
}

export default Header;
