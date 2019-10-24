import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App.jsx';
import registerServiceWorker from './registerServiceWorker';
//Router v4
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './utils/store.js'

ReactDOM.render(
  /* Redux global state config */
  <Provider store={ store }> 
    <Router>
      <App />
    </Router>
  </Provider>, 
document.getElementById('root'));

registerServiceWorker();
