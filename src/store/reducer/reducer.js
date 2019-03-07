import Immutable from 'seamless-immutable';
import * as types from './actionTypes';

const initialState = Immutable({
  posts: [],
  post: {},
  comment: {}
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_POSTS:
      return state.merge({
        posts: action.postsList
      });
    case types.GET_POST_BY_ID:
      return state.merge({
        post: action.post
      });
    case types.SUBMIT_COMMENT:
      console.log(action.response);
      return state.merge({
        comment: action.response
      });
    case types.NEW_POST:
      console.log(action.newPost);
      return state.merge({
        post: action.newPost
      });
    default:
      return state;
  }
}
