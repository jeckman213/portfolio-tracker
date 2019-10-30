import {
  AUTHENTICATING, AUTHENTICATED, AUTHENTICATION_FAILED,
  LOGGING_IN, LOGIN_FAILED,
  REGISTERING, REGISTERED, REGISTRATION_FAILED,    
  LOGGING_OUT, LOGGED_OUT, LOGOUT_FAILED
} from './types';
import axios from 'axios';
import isEmail from 'validator/lib/isEmail';
import isAlpha from 'validator/lib/isAlpha';
import matches from 'validator/lib/matches';

export const signUp = (newUserData) => dispatch => {
  dispatch({
    type : REGISTERING
  });

  const { username, email, password, passwordVerified, firstname, lastname, currency } = newUserData,
        usernamePattern = /^[A-Za-z0-9_-]{3,40}$/,
        passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,24}$/;

  /* Client-side validation */
  if(!matches(username, usernamePattern)){
    dispatch({
      type : REGISTRATION_FAILED,
      failExpected : true,
      failReason : 'Username can only consist of letters, numbers, underscores, and hyphens, and is between 8-24 characters'
    });
  }
  else if(!matches(password, passwordPattern)){
    dispatch({
      type : REGISTRATION_FAILED,
      failExpected : true,
      failReason : 'Password must have a number, an uppercase character, a special character (shifted numbers only) and is between 8-24 characters'
    });
  }
  else if(password !== passwordVerified){
    dispatch({
      type : REGISTRATION_FAILED,
      failExpected : true,
      failReason : 'Passwords do not match'
    });
  }
  else if(!isEmail(email)){
    dispatch({
      type : REGISTRATION_FAILED,
      failExpected : true,
      failReason : 'Invalid Email'
    });
  }
  else if(firstname && !isAlpha(firstname)){
    dispatch({
      type : REGISTRATION_FAILED,
      failExpected : true,
      failReason : 'First Name can only contain letters'
    });
  }
  else if(lastname && !isAlpha(lastname)){
    dispatch({
      type : REGISTRATION_FAILED,
      failExpected : true,
      failReason : 'Last Name can only contain letters'
    });
  }

  /* Ready for server-side validation */
  else {
    const userRegistration = {
      username,
      email,
      password,
      firstname,
      lastname,
      currency
    };
  
    axios.post('/api/register', userRegistration)
      .then( res => {
        const { success, failExpected, failReason } = res.data;

        if(success){
          /* Successfully reigstered new user */
          dispatch({
            type : REGISTERED
          });
        } else {
          /* Either username or email is already taken (failed server-side validation) */
          dispatch({
            type : REGISTRATION_FAILED,
            failExpected,
            failReason
          });
        }
      })
      /* Unexpected axios error */
      .catch( err => {
        console.error('axios /api/register error:', err);
        dispatch({
          type : REGISTRATION_FAILED,
          failExpected : false,
          failReason : err
        });
      });
  }
};

export const login = (returningUserData) => dispatch => {
  dispatch({
    type : LOGGING_IN
  });
  
  axios.post('/api/login', returningUserData)
    .then( res => {
      const { success, username, failExpected, failReason } = res.data;
      
      /* Successfully authenticated returning user */
      if(success){
        dispatch({
          type : AUTHENTICATED,
          username
        });
      } 
      /* Most likely either username/password is incorrect. Possibly Sequelize, bcrypt, or Passport error (already logged) */
      else {
        dispatch({
          type : LOGIN_FAILED,
          failExpected,
          failReason
        });
      }
    })
    /* Unexpected axios error */
    .catch( err => {
      console.error('axios /api/login error:', err.message);
      dispatch({
        type : LOGIN_FAILED,
        failExpected : false,
        failReason : err
      });
    });
};

export const authenticate = () => dispatch => {
  dispatch({
    type : AUTHENTICATING
  });

  axios.get('/api/authenticate')
    .then( res => {
      const { success, username } = res.data;

      if(success){
        dispatch({
          type : AUTHENTICATED,
          username
        });
      }
      else {
        dispatch({
          type : AUTHENTICATION_FAILED,
          failExpected : true,
          failReason : 'Session expired or never logged in'
        });
      }
    })
    /* Unexpected axios error */
    .catch( err => {
      console.error('axios /api/authenticate error:', err.message);
      dispatch({
        type : AUTHENTICATION_FAILED,
        failExpected : false,
        failReason : err
      });
    });
}

export const logout = () => dispatch => {
  dispatch({
    type : LOGGING_OUT
  });

  axios.get('/api/logout')
    .then( res => { 
      const { success, failExpected, failReason } = res.data;

      if(success){
        dispatch({
          type : LOGGED_OUT
        });
      }
      else {
        dispatch({
          type : LOGOUT_FAILED,
          failExpected,
          failReason
        });
      }
    })
    /* Unexpected axios error */
    .catch( err => {
      console.error('axios /api/logout error:', err.message);
      dispatch({
        type : AUTHENTICATION_FAILED,
        failExpected : false,
        failReason : err
      });
    });
}
