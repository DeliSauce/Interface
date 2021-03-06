import merge from 'lodash/merge';
import {UPDATE_CURRENT_VIEW} from '../actions/views';

const defaultState = 'leaderBoard';

const ViewReducer = (state = defaultState, action) => {
  console.log('hit reducer');
  Object.freeze(state);
  switch(action.type) {
    case UPDATE_CURRENT_VIEW:
      console.log('UPDATE_CURRENT_VIEW');
      return action.view;
    default:
      return state;
  }
};

export default ViewReducer;
