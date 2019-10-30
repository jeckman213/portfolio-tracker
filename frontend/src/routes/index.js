import React from 'react';
import { Switch, Route} from 'react-router-dom';

// import the modules
import Main from '../components/landing/main';
import About from '../components/resources/about';
import Packages from '../components/landing/packages';
import SignUp from '../components/auth/signUp';
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
    </Switch>
  </div>    
) 

export default Routing;