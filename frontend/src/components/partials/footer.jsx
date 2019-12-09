import React, { Component } from 'react';
import { dollar } from '../../assets/styles'

class Footer extends Component {
  render() {
    const style = this.style;

    return (
      <footer>
        <p>Portfolio<span style={ dollar }>$</span>&trade; is developed by Alex Passidomo, Sam Peck, Jonathan Eckman, Luis Fermin, and Keith Camacho for Professor Andrew Gallo's 418Y class at the University at Albany</p>
        <br />
        <p>Follow Us !</p>
        <br />
        <div style={ style.container }>
          <a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
          <a href="https://google.com"><i className="far fa-envelope"></i></a>
        </div>
        <br />
        <p>&copy; Group Z </p>
      </footer>
    );
  }

  style = {
    container : {
      maxWidth : '200px',
      margin : '0 auto',
      display : 'flex',
      justifyContent : 'space-around'
    }
  }
}

export default Footer;

