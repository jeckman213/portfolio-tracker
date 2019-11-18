import React from 'react';
import { Switch, Route} from 'react-router-dom';
import ProtectedRoute from '../utils/protectedRoute';

// import Components
import Main from '../components/landing/main';
import About from '../components/resources/about';
import Packages from '../components/landing/packages';
import SignUp from '../components/auth/signup';
import Login from '../components/auth/login';
import Graphs from '../components/graphs/graphList';
import PortfolioPage from '../components/portfolio/portfolioPage';
import UserPage from '../components/crud/userPage';

const Routing = () => (
  <div>
    <Switch>
      <Route exact path='/' component={ Main } />
      <Route exact path='/about' component={ About } />
      <Route exact path='/graphs' component={ Graphs } />
      <Route exact path='/packages' component={ Packages } />
      <Route exact path='/signup' component={ SignUp } />
      <Route exact path='/login' component={ Login }/>
      <Route exact path='/user/:username' component={ UserPage} /> 
      <Route exact path='/user/:username/portfolio/:portfolioName' component={ PortfolioPage} /> 
      <ProtectedRoute exact path='/protected' component={ About }/>
      <Route path='*' component={ () => '404 Not Found' } /> 
    </Switch>
  </div>    
) 

export default Routing;
