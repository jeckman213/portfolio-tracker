import { AUTHENTICATING, AUTHENTICATED, AUTHENTICATION_FAILED } from '../../actions/auth/authTypes';

export default function(previousState = {}, action){
  switch(action.type){
    case AUTHENTICATING:
      return {
        authenticating : true
      }

    case AUTHENTICATED:
      return {
        authenticated : true,
        userId : action.userId
      }
    
    case AUTHENTICATION_FAILED:
      return {
        failed : true,
        failExpected : action.failExpected,
        failReason : action.failReason
      }

    default:
      return previousState;
  }
}
