import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App.jsx';
import registerServiceWorker from './registerServiceWorker';
//Router v4
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
registerServiceWorker();
