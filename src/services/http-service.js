import { fetch } from 'whatwg-fetch';

let instance = null;
const URL = 'https://simple-blog-api.crew.red';
class HttpService {

  constructor() {
    if (!instance) {
      instance = this;
    }
    return instance;
  }

  getPosts() {
    return new Promise((resolve, reject) => {
      fetch(`${URL}/posts`)
        .then(response => {
          resolve(response.json());
          reject({ error: 'error' });
        });
    });
  }

  getPostById(id) {
    return new Promise((resolve, reject) => {
      fetch(`${URL}/posts/${id}`)
        .then(response => {
          resolve(response.json());
          reject({ error: 'error' });
        });
    });
  }

  submitComment(postId, body) {
    return new Promise((resolve, reject) => {
      fetch(`${URL}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ postId, body })
      })
        .then(response => {
          resolve(response.json());
          reject({ error: 'error' });
        });
    });
  }

  submitNewPost(title, body) {
    return new Promise((resolve, reject) => {
      fetch(`${URL}/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, body })
      })
        .then(response => {
          resolve(response.json());
          reject({ error: 'error' });
        });
    });
  }
}

export default HttpService;
//https: //github.com/blockbuster/back-end-candidate-test
