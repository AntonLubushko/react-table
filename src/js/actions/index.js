import { POSTS_LOADED, POST_LOADED, DATE_DIRECTION_CHANGED, VIEWS_DIRECTION_CHANGED } from '../constants/action-types.js';
import axios from "axios";

const START_DATE = 1400000000000;
const END_DATE = Date.now();
const ALL_TIME = END_DATE - START_DATE;
const VIEWS_COLUMN = 2;
const DATE_COLUMN = 3;

export function changeDirection(orderedColumnId, orderDirection) {
  return function(dispatch) {
    if (orderedColumnId === VIEWS_COLUMN) {
      dispatch({ type: VIEWS_DIRECTION_CHANGED, payload: orderDirection });
    }
    if (orderedColumnId === DATE_COLUMN) {
      dispatch({ type: DATE_DIRECTION_CHANGED, payload: orderDirection });
    }
  }
};

export function getPosts() {
  return async function(dispatch) {
    try {
      let { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
      data.forEach(post => addAdditionalData(post));
      dispatch({ type: POSTS_LOADED, payload: data });
    } catch (err) {
      console.log(err);
    }
  }
};

export function getPost(id) {
  return async function(dispatch) {
    try {
      let { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      dispatch({ type: POST_LOADED, payload: data });
    } catch (err) {
      console.log(err)
    }
  }
};

function addAdditionalData(post) {
  addViewsAmount(post);
  addDate(post);
}

function addViewsAmount(post) {
  post.views = Math.round(Math.random() * 1000);
}

function addDate(post) {
  post.createdAt = START_DATE + Math.round(Math.random() * (ALL_TIME));
}