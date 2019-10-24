import { REGISTERED_USER } from '../../actions/auth/signup/signupTypes';

export default function(previousState = {}, action){
  switch(action.type){
    case REGISTERED_USER:
      console.log(action.userId)
      return {
        registered : true
      }
    
  //   case CREATED_POST:
  //     return [
  //       action.payload,
  //       ...state
  //     ]

    default:
      return previousState;
  }
}