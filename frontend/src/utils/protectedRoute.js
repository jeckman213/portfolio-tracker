import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { authenticate } from '../actions/auth/authActions';

// Destructure component object passed (extract component property, rest are bundled together)
const ProtectedRoute = ({ authenticate, authenticating, authenticated, component : Component, ...rest }) => {
  return (
    <Route 
      { ...rest } // Pass the rest of the properties into Route
      render={
        (props) => { // Pass functional component into render
          return authenticated 
            ? <Component {...props} />
            : <Redirect to={{
                pathname : '/login',
                state : {
                  from : props.location
                }
              }} />;
        }
      }
    />
  );
};

const mapStateToProps = (state) => {
  const { authenticating, authenticated } = state.authentication;

  return { authenticating, authenticated }
};

ProtectedRoute.propTypes = {
  authenticate : PropTypes.func.isRequired
};

export default connect(mapStateToProps, { authenticate })(ProtectedRoute);
