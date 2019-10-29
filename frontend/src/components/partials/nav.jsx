import React, { Component } from 'react';
//importing the Link module
import { Link } from "react-router-dom";
import { title, dollar } from "../../assets/styles"

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li style={ title }><Link to="/">Portfolio<span style={ dollar }>$</span></Link></li>
          <div id="nav-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </ul>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/packages">Sign Up</Link></li>
          <li><Link to="/login">Login</Link> </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;