import axios from 'axios';
// import { browserHistory } from 'react-router';
import { FETCH_TEST } from './types';
import {Spinner,pendingTasksReducer,pendingTask,begin,end} from 'react-redux-spinner';

// url location of the server
const TEST_URL = 'https://jsonplaceholder.typicode.com';


// make sure server is on when trying to call it!
export function testApi() {
  return function(dispatch) {
    // console.log(dispatch);
    axios.get(`${TEST_URL}`)
      .then(response => {
        console.log(response);
      })
      .catch(response => {
        // debugger;
      });
  }
}
