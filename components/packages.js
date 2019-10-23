import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Packages extends Component {
  render() {
    return (
        <section className="packagesContainer">
            <div>
                <i className="fas fa-chevron-circle-down"></i>
                <h2>Educational Packages.</h2>
                <div className="packages">
                   <div>
                       <h3>Free Tier</h3>
                       <div>
                           <p className="price">&#36;0</p>
                           <p>Add Stocks to your portfolio and start trading for free! But we starve</p>
                           <p className="buy"><Link to="/booking/single">Sign up for this worse tier</Link></p> 
                       </div>
                   </div>
                   <div className="preferred">
                       <h3>Class Package</h3>
                       <div>
                           <p className="price">&#36;449</p>
                           <p> Trade and learn as a class and help us grow! Share your portfolios with each other! Watch top of the line charts and graphs go up and down. Recieve real time vaulation data &amp; immense amounts of fun.</p>
                           <p className="buy"><Link to="/booking/class">Sign up for our Class Tier</Link></p> 
                       </div>
                   </div>
                  
                </div>
          </div>
        </section>
    );
  }
}

export default Packages;
