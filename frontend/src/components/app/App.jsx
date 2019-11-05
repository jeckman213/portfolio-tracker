import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { authenticate } from '../../actions/auth/authActions';

import Nav from "../partials/nav.jsx";
import Footer from "../partials/footer.jsx";

import Routes from "../../routes/index";

class App extends Component {
  componentDidMount(){
    this.props.authenticate();
  }

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

App.propTypes = {
  authenticate : PropTypes.func.isRequired
};

export default connect(null, { authenticate })(App);
