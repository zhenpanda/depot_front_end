// import from action types

// import { FETCH_TEST,BOARD_TEST,ROLL_TEST,FETCH_BOARD } from '../actions/types';
import { FETCH_TEST} from '../actions/types';

// determent how stat should be returned when action is called
export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_TEST:
      return {...state, message: action.payload};
  };
  return state;
};
