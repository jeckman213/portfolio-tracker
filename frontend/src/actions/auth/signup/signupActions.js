import { REGISTERED_USER } from './signupTypes';
import axios from 'axios';

export const signUp = (newUserData) => dispatch => {
  const userRegistration = {
    username : newUserData.username,
    email : newUserData.email,
    password : newUserData.password,
    firstname : newUserData.firstname,
    lastname : newUserData.lastname,
    currency : newUserData.currency
  };

  axios.post('localhost:5000/register', userRegistration)
    .then( res => {
      if(res.registerSuccess){
        dispatch({
          type : REGISTERED_USER,
          userId : res.id
        });
      }
    });
};

export const login = (returningUserData) => dispatch => {

};

// export const fetchPosts = () => dispatch => {
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(posts => dispatch({ 
//       type : FETCHED_POSTS,
//       payload : posts 
//     }));
// }

// export const createPost = (postData) => dispatch => {
//   fetch('https://jsonplaceholder.typicode.com/posts', {
//       method : 'POST',
//       headers : {
//         'content-type' : 'application/json'
//       },
//       body : JSON.stringify(postData)
//     })
//     .then(res => res.json())
//     .then(post => dispatch({
//       type : CREATED_POST,
//       payload : post
//     }));
// }
