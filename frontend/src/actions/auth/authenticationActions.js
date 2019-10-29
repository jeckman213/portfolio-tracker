
import { AUTHENTICATING, AUTHENTICATED, AUTHENTICATION_FAILED } from './authTypes';
import axios from 'axios';

export const login = (returningUserData) => dispatch => {
  dispatch({
    type : AUTHENTICATING
  });
  
  axios.post('/api/authenticate', returningUserData)
    .then( res => {
      const { success, user, failExpected, failReason } = res.data;

      /* Successfully authenticated returning user */
      if(success){
        dispatch({
          type : AUTHENTICATED,
          user
        });
      } 
      /* Most likely either username/password is incorrect. Possibly Sequelize, bcrypt, or Passport error (already logged) */
      else {
        dispatch({
          type : AUTHENTICATION_FAILED,
          failExpected,
          failReason
        });
      }
    })
    /* Unexpected axios error requesting authentication endpoint */
    .catch( err => {
      console.error('axios /api/authenticate error:', err.message);
      dispatch({
        type : AUTHENTICATION_FAILED,
        failExpected : false,
        failReason : err
      });
    });
};