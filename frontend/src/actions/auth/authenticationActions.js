
import { AUTHENTICATING, AUTHENTICATED, AUTHENTICATION_FAILED } from './authTypes';
import axios from 'axios';

export const login = (returningUserData) => dispatch => {
  dispatch({
    type : AUTHENTICATING
  });
  
  axios.post('/api/authenticate', returningUserData)
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
        type : AUTHENTICATION_FAILED,
        failExpected : false,
        failReason : err
      });
    });
};