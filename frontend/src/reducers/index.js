import { combineReducers } from 'redux';
import registration from './auth/registrationReducer';
import authentication from './auth/authenticationReducer';

export default combineReducers({
  registration,
  authentication
})