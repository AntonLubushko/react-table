import { POSTS_LOADED, POST_LOADED, DATE_DIRECTION_CHANGED, VIEWS_DIRECTION_CHANGED } from "../constants/action-types";
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const initialState = {
  remotePosts: [],
  currentPost: {}
};

export function rootReducer(state = initialState, action) {

  if (action.type === POSTS_LOADED) {
    return Object.assign({}, state, {
      remotePosts: state.remotePosts.concat(action.payload)
    });
  }

  if (action.type === POST_LOADED) {
    return Object.assign({}, state, {
      currentPost: action.payload
    });
  }

  if (action.type === VIEWS_DIRECTION_CHANGED) {
    return Object.assign({}, state, {
      viewsDirection: action.payload,
      dateDirection: null
    });
  }

  if (action.type === DATE_DIRECTION_CHANGED) {
    return Object.assign({}, state, {
      viewsDirection: null,
      dateDirection: action.payload
    });
  }

  return state;
};

export default (history) => combineReducers({
  router: connectRouter(history)
})