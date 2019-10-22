import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
            
        <footer>
        <p>Portfolios is developed by Alex Passidomo, Sam Peck, Jonathan Eckman, Luis Fermin and Keith Camacho for Proffesor Andrew Gallo's 418Y class at The University At Albany</p>
        <br />
        <p>Follow Us!</p>
        <br />
        <ul>
        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
        <li><a href="#"><i className="far fa-envelope"></i></a></li>

        </ul>
        <br />
        <p>&copy; Team Z </p>
        </footer>
    );
  }
}

export default Footer;

