import React from 'react';
import { Switch, Route} from 'react-router-dom';
import ProtectedRoute from '../utils/protectedRoute';

// import Components
import Main from '../components/landing/main';
import About from '../components/resources/about';
import Packages from '../components/landing/packages';
import SignUp from '../components/auth/signup';
import Help from '../components/resources/help';
import Login from '../components/auth/login';
import Graphs from '../components/graphs/graphList';
import PortfolioPage from '../components/crud/portfolio/portfolioPage';
import UserPage from '../components/crud/userPage';
import StockPage from '../components/stock/stockPage';

const Routing = () => (
  <div>
    <Switch>
      <Route exact path='/' component={ Main } />
      <Route exact path='/about' component={ About } />
      <Route exact path='/graphs' component={ Graphs } />
      <Route exact path='/packages' component={ Packages } />
      <Route exact path="/help" component={ Help }/>
      <Route exact path='/signup/:type' component={ SignUp } />
      <Route exact path='/login' component={ Login }/>
      <Route exact path='/stock/:symbol' component={ StockPage } /> 
      <Route exact path='/user/:username' component={ UserPage } /> 
      <Route exact path='/user/:username/portfolio/:portfolioName' component={ PortfolioPage } /> 
      <ProtectedRoute exact path='/settings' component={ About }/>
      <Route path='*' component={ () => '404 Not Found' } /> 
    </Switch>
  </div>    
) 

export default Routing;
