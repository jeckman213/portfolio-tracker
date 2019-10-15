import React, { Component } from 'react';

<<<<<<< HEAD
import logo from '../../assets/logos/portfolios/logo.png';

=======
>>>>>>> master
import './App.css';

class App extends Component {
  state = {
    model: '',
  };
  
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ model: res }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/stock/realtime/AAPL');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    console.log(body);
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
        <p><b>Name:</b> {this.state.model.name}</p>
        <p><b>Price:</b> {this.state.model.price}</p>
        <p><b>Day High:</b> {this.state.model.day_high}</p>
        <p><b>Day Low:</b> {this.state.model.day_low}</p>
      </div>
    );
  }
}

export default App;