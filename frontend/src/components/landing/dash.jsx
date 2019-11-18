import React from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './dash.scss';
import Header2 from '../landing/Header2';
import Main2 from '../landing/Main2';
import SideBar from './sidebar';
import './Sidebar.css';

function dash() {
  return (
    <Router>
      <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
        <div className="app-container">
        
        <SideBar />
          {/* homepage redirects to markets page */}
          <Route exact path="/" render2={() => <Redirect to="/markets" />} />
          <header2 className="header2">
            <Header2 />
          </header2>

          <main2 className="main2">
            <Main2 />
          </main2>
        </div>
        
      </CSSTransition>
    </Router>
  );
}

export default dash;





