import React, { Component } from 'react';

import Nav from "../partials/nav.jsx";
import Footer from "../partials/footer.jsx";

import Routes from "../../routes/index";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <main>
          <Routes />
        </main>  
        <Footer />
      </div>
    );
  }
}

export default App;
