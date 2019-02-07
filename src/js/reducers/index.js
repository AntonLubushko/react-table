import { POSTS_LOADED, POST_LOADED } from "../constants/action-types";
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const initialState = {
  articles: [],
  remotePosts: [],
  currentPost: {},
  message: ""
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
  return state;
};

export default (history) => combineReducers({
  router: connectRouter(history)
})