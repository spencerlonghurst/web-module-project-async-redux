import { ADD_ALL_CHARACTERS } from './actionTypes';
import axios from 'axios';

export const fetchAllData = () => dispatch => {
  axios.get('https://swapi.dev/api/people')
  .then(res => {
    console.log('action creators', res);
    dispatch({ type: ADD_ALL_CHARACTERS, payload: res.data.results })
   
  })
  .catch(err => {
  debugger
  })
}

