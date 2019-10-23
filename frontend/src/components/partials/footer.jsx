import React, { Component } from 'react';
import { dollar } from '../../assets/styles'

class Footer extends Component {
  render() {
    return (
      <footer>
        <p>Portfolio<span style={ dollar }>$</span> &trade; is developed by Alex Passidomo, Sam Peck, Jonathan Eckman, Luis Fermin, and Keith Camacho for Professor Andrew Gallo's 418Y class at the University at Albany</p>
        <br />
        <p>Follow Us !</p>
        <br />
        <ul>
          <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
          <li><a href="#"><i className="far fa-envelope"></i></a></li>
        </ul>
        <br />
        <p>&copy; Group Z </p>
      </footer>
    );
  }
}

export default Footer;

