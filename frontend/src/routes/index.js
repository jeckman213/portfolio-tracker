import React from 'react';
import { Switch, Route} from 'react-router-dom';
import ProtectedRoute from '../utils/protectedRoute';

// import the modules
import Main from '../components/landing/main';
import About from '../components/resources/about';
import Packages from '../components/landing/packages';
import SignUp from '../components/auth/signup';
import Login from '../components/auth/login'

// Hey Alex/John I added some routes
// hope you like it
const Routing = () => (
  <div>
    <Switch>
      <Route exact path='/' component={ Main } />
      <Route exact path='/about' component={ About } />
      <Route exact path='/packages' component={ Packages } />
      <Route exact path='/signup/:type' component={ SignUp } />
      <Route exact path="/login" component={ Login }/>
      <ProtectedRoute exact path="/protected" component={ About }/>
      <Route path="*" component={ () => '404 Not Found' } /> 
    </Switch>
  </div>    
) 

export default Routing;