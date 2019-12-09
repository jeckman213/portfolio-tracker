import React, { Component } from "react";
import newsHeader from "../landing/bHeader";
import Display from "../landing/Display";

import "./bApp.css";


class bApp extends Component {
  render() {
    return (
      <div className="newspage">
        <bHeader />
        <div className="container">
          <Display />
        </div>
      </div>
    );
  }
}

export default bApp;
