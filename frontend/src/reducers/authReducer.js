import {
  AUTHENTICATING, AUTHENTICATED, AUTHENTICATION_FAILED,
  LOGGING_IN, LOGIN_FAILED,
  REGISTERING, REGISTERED, REGISTRATION_FAILED,   
  LOGGING_OUT, LOGGED_OUT, LOGOUT_FAILED 
} from '../actions/auth/types';

export default function(previousState = { authenticated : false }, action){
  const { id, username, failExpected, failReason } = action;

  switch(action.type){
    case AUTHENTICATING:
      return {
        authenticated : false,
        authenticating : true
      }

    case AUTHENTICATED:
      return {
        authenticated : true,
        username,
        id
      }
    
    case AUTHENTICATION_FAILED:
      return {
        authenticated : false,
        authenticationFailed : true,
        failExpected,
        failReason
      }
    
    case LOGGING_IN:
      return {
        authenticated : false,
        loggingIn : true
      }
    
    case LOGIN_FAILED:
      return {
        authenticated : false,
        loginFailed : true,
        failExpected,
        failReason
      }
    
    case REGISTERING:
      return {
        authenticated : false,
        registering : true
      }
  
    case REGISTERED:
      return {
        authenticated : false,
        registered : true
      }
    
    case REGISTRATION_FAILED:
      return {
        authenticated : false,
        registrationFailed : true,
        failExpected,
        failReason
      }
    
    case LOGGING_OUT:
      return {
        authenticated : true,
        loggingOut : true
      }
    
    case LOGGED_OUT:
      return {
        authenticated : false,
      }
    
    case LOGOUT_FAILED:
      return {
        authenticated : true,
        failExpected,
        failReason
      }

    default:
      return previousState;
  }
}
