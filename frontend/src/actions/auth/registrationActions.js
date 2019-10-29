import { REGISTERING, REGISTERED, REGISTRATION_FAILED } from './authTypes';
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
        const { success, id, failExpected, failReason } = res.data;

        if(success){
          /* Successfully reigstered new user */
          dispatch({
            type : REGISTERED,
            userId : id
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
      .catch( err => {
        /* Unexpected axios error */
        console.error('axios error:', err);
        dispatch({
          type : REGISTRATION_FAILED,
          failExpected : false,
          failReason : err
        });
      });
  }
};
