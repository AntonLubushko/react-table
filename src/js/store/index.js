import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from '../reducers';
import thunk from "redux-thunk";
import { connectRouter, routerMiddleware } from "connected-react-router";
import createHistory from "history/createBrowserHistory";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createHistory();

const store = createStore(
  connectRouter(history)(rootReducer),
  storeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
);

export default store;