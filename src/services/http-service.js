import { fetch } from 'whatwg-fetch';

var instance = null;
const URL = 'https://simple-blog-api.crew.red';
class HttpService {

  constructor() {
    if (!instance) {
      instance = this;
    }
    return instance;
  }

  getPosts = () => {
    var promise = new Promise((resolve, reject) => {
      fetch(`${URL}/posts`)
        .then(response => {
          resolve(response.json());
          reject({ error: 'error' });
        });
    });
    return promise;
  }

  getPostById = (id) => {
    var promise = new Promise((resolve, reject) => {
      fetch(`${URL}/posts/${id}`)
        .then(response => {
          resolve(response.json());
          reject({ error: 'error' });
        });
    });
    return promise;
  }

  submitComment = (body, id) => {
    var promise = new Promise((resolve, reject) => {
      fetch(`${URL}/comments`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ body, id })
        })
        .then(response => {
          resolve(response.json());
          reject({ error: 'error' });
        });
    });
    return promise;
  }

  submitNewPost = (title, body) => {
    var promise = new Promise((resolve, reject) => {
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
    return promise;
  }
}



export default HttpService;
