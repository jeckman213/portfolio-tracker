import React, { Component } from 'react';

import Nav from "./components/nav";
import Footer from "./components/footer";
import Chart from "./components/Chart";

import Routes from "./routes";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <Chart />
        <main>
          <Routes />
        </main>  
        <Footer />
      </div>
    );
  }
}

export default App;
