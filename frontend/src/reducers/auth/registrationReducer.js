import { REGISTERING, REGISTERED, REGISTRATION_FAILED } from '../../actions/auth/authTypes';

export default function(previousState = {}, action){
  switch(action.type){
    case REGISTERING:
      return {
        registering : true
      }

    case REGISTERED:
      return {
        registered : true,
        userId : action.userId
      }
    
    case REGISTRATION_FAILED:
      return {
        failed : true,
        failExpected : action.failExpected,
        failReason : action.failReason
      }

    default:
      return previousState;
  }
}
