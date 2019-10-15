import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };
  
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };

  
render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={process.env.PUBLIC_URL + '/logos/portfolios/logo.png'} className="App-logo" alt="logo" />
          <h2>
            Portfolio<span className="Dollar-Sign">$</span>
          </h2>
        </header>
        <p>{this.state.response}</p>
      </div>
    );
  }
}

export default App;