import * as types from './actionTypes';
import HttpService from '../../services/http-service';
const http = new HttpService();

export const getPosts = () => {
  return async(dispatch) => {
    const postsList = await http.getPosts();
    dispatch({ type: types.GET_POSTS, postsList });
  };
};

export const getPostById = (id) => {
  return async(dispatch) => {
    const post = await http.getPostById(id);
    dispatch({ type: types.GET_POST_BY_ID, post });
  };
};

export const submitComment = (postId, body) => {
  return async(dispatch) => {
    const response = await http.submitComment(postId, body);
    dispatch({ type: types.SUBMIT_COMMENT, response });
  };
};


export const submitNewPost = (title, body) => {
  return async(dispatch) => {
    const newPost = await http.submitNewPost(title, body);
    dispatch({ type: types.NEW_POST, newPost });
  };
};
