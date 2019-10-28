import { REGISTERING, REGISTERED, REGISTRATION_FAILED } from './authTypes';
import axios from 'axios';
import isEmail from 'validator/lib/isEmail';
import isAlpha from 'validator/lib/isAlpha';

export const signUp = (newUserData) => dispatch => {
  dispatch({
    type : REGISTERING
  });

  const { username, email, password, passwordVerified, firstname, lastname, currency } = newUserData;

  /* Client-side validation */
  if(password !== passwordVerified){
    dispatch({
      type : REGISTRATION_FAILED,
      failExpected : true,
      failReason : 'Passwords do not match'
    })
  }
  else if(!isEmail(email)){
    dispatch({
      type : REGISTRATION_FAILED,
      failExpected : true,
      failReason : 'Invalid Email'
    })
  }
  else if(firstname && !isAlpha(firstname)){
    dispatch({
      type : REGISTRATION_FAILED,
      failExpected : true,
      failReason : 'First Name can only contain letters'
    })
  }
  else if(lastname && !isAlpha(lastname)){
    dispatch({
      type : REGISTRATION_FAILED,
      failExpected : true,
      failReason : 'Last Name can only contain letters'
    })
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
        const { registerSuccess, id, failExpected, failReason } = res.data;

        if(registerSuccess){
          /* Valid reigstration */
          dispatch({
            type : REGISTERED,
            userId : id
          });
        } else {
          /* Either username or email is already taken */
          dispatch({
            type : REGISTRATION_FAILED,
            failExpected,
            failReason
          });
        }
      })
      .catch( err => {
        /* Unexpected error */
        dispatch({
          type : REGISTRATION_FAILED,
          failExpected : false,
          failReason : err
        });
      });
  }
};
