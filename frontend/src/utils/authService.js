import {
  AUTHENTICATED, AUTHENTICATION_FAILED,
  LOGIN_FAILED,
  REGISTERED, REGISTRATION_FAILED,    
  LOGGED_OUT, LOGOUT_FAILED
} from '../actions/auth/types';
import isEmail from 'validator/lib/isEmail';
import isAlpha from 'validator/lib/isAlpha';
import matches from 'validator/lib/matches';
import axios from 'axios';

const validateRegistrationOnClient = (newUserData) => {
  const 
    { username, email, password, passwordVerified, firstname, lastname } = newUserData,
    usernamePattern = /^[A-Za-z0-9_-]{3,40}$/,
    passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,24}$/;
        
  if(!matches(username, usernamePattern)){ /* Invalid username */
    return {
      type : REGISTRATION_FAILED,
      failExpected : true,
      failReason : 'Username can only consist of letters, numbers, underscores, and hyphens, and is between 8-24 characters'
    };
  }
  else if(!matches(password, passwordPattern)){ /* Invalid password */
    return {
      type : REGISTRATION_FAILED,
      failExpected : true,
      failReason : 'Password must have a number, an uppercase character, a special character (shifted numbers only) and is between 8-24 characters'
    };
  }
  else if(password !== passwordVerified){ /* Password not confirmed */
    return {
      type : REGISTRATION_FAILED,
      failExpected : true,
      failReason : 'Passwords do not match'
    };
  }
  else if(!isEmail(email)){ /* Invalid email */
    return {
      type : REGISTRATION_FAILED,
      failExpected : true,
      failReason : 'Invalid Email'
    };
  }
  else if(firstname && !isAlpha(firstname)){ /* Invalid firstname */
    return {
      type : REGISTRATION_FAILED,
      failExpected : true,
      failReason : 'First Name can only contain letters'
    };
  }
  else if(lastname && !isAlpha(lastname)){ /* Invalid lastname */
    return {
      type : REGISTRATION_FAILED,
      failExpected : true,
      failReason : 'Last Name can only contain letters'
    };
  }
  else { return null; }
};

const validateRegistrationOnServer = (newUserData) => {
  const 
    { username, email, password, firstname, lastname, currency } = newUserData,
    userRegistration = {
      username,
      email,
      password,
      firstname,
      lastname,
      currency
    };
  
  return axios.post('/api/register', userRegistration)
    .then( res => {
      const { success, failExpected, failReason } = res.data;

      if(success){ /* Successfully reigstered new user */
        return { type : REGISTERED };
      }
      else { /* Either username or email is already taken (failed server-side validation) */
        return {
          type : REGISTRATION_FAILED,
          failExpected,
          failReason
        };
      }
    })
    .catch( err => { /* Unexpected axios error (network issue likely) */
      console.error('axios /api/register error:', err);
      return {
        type : REGISTRATION_FAILED,
        failExpected : false,
        failReason : err
      };
    });
};

const attemptLogin = (returningUserData) => {
  return axios.post('/api/login', returningUserData)
    .then( res => {
      const { success, id, username, currency, failExpected, failReason } = res.data;
      
      if(success){ /* Successfully authenticated returning user */
        return {
          type : AUTHENTICATED,
          id,
          username,
          currency
        };
      } 
      else { /* Most likely either username/password is incorrect. Possible Sequelize, bcrypt, or Passport error (all already logged) */
        return {
          type : LOGIN_FAILED,
          failExpected,
          failReason
        };
      }
    })
    .catch( err => { /* Unexpected axios error (network issue likely) */
      console.error('axios /api/login error:', err.message);
      return {
        type : LOGIN_FAILED,
        failExpected : false,
        failReason : err
      };
    });
}

const attemptLogout = () => {
  return axios.get('/api/logout')
    .then( res => { 
      const { success, failExpected, failReason } = res.data;

      if(success){
        return {
          type : LOGGED_OUT
        };
      }
      else {
        return {
          type : LOGOUT_FAILED,
          failExpected,
          failReason
        };
      }
    })
    .catch( err => { /* Unexpected axios error (network issue likely) */
      console.error('axios /api/logout error:', err.message);
      return {
        type : AUTHENTICATION_FAILED,
        failExpected : false,
        failReason : err
      };
    });
}

const checkAuthentication = () => {
  return axios.get('/api/authenticate')
    .then( res => {
      console.log(res);
      const { 
        success, username, id, currency, 
        failExpected, failReason 
      } = res.data;

      if(success){ /* User successfully authenticated, i.e. sessions has not expired */
        return {
          type : AUTHENTICATED,
          id,
          username,
          currency
        };
      }
      else { 
        return {
          type : AUTHENTICATION_FAILED,
          failExpected,
          failReason
        };
      } 
    })
    .catch( err => { /* Unexpected axios error (network issue likely) */
      console.error('axios /api/authenticate error:', err.message);
      return {
        type : AUTHENTICATION_FAILED,
        failExpected : false,
        failReason : err
      };
    });
}

export { validateRegistrationOnClient, validateRegistrationOnServer, attemptLogin, attemptLogout, checkAuthentication };