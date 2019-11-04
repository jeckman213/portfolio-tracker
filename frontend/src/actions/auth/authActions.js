import { REGISTERING, LOGGING_IN, LOGGING_OUT, AUTHENTICATING } from './types';
import { 
  validateRegistrationOnClient, validateRegistrationOnServer, 
  attemptLogin, attemptLogout, checkAuthentication 
} from '../../utils/authService';

export const signUp = (newUserData) => dispatch => {
  dispatch({ type : REGISTERING });

  /* Client-side validation */
  const 
    validationError = validateRegistrationOnClient(newUserData),
    validatedOnClient = validationError == null;

  /* Ready for server-side validation */
  if(validatedOnClient){
    validateRegistrationOnServer(newUserData)
      .then( result => dispatch(result)); // User either registered or server returns fail details
  }
  else { dispatch(validationError) }
};

export const login = (returningUserData) => dispatch => {
  dispatch({ type : LOGGING_IN });
  

  attemptLogin(returningUserData)
    .then(result => dispatch(result)); // Either user authenticated, invalid credentials, or network error
};

export const logout = () => dispatch => {
  dispatch({ type : LOGGING_OUT });

  attemptLogout()
    .then(result => dispatch(result)); // Either user logged out, or network error
}

export const authenticate = () => dispatch => {
  dispatch({ type : AUTHENTICATING });

  checkAuthentication()
    .then(result => dispatch(result)); // Either user is/isnt authenticated, or network error
}
