import React from 'react';
import { connect } from 'react-redux';

import Post from '../components/post';

import * as actions from '../store/reducer/actions';
import * as reducers from '../store/reducer/reducer';

class Posts extends React.Component {

  componentDidMount() {
    this.props.dispatch(actions.getPosts());
  }

  posts = () => {
    const { posts } = this.props;
    return posts.map(post => (
      <Post post={post} key={post.id} />
    ));
  }

  render() {
    return (
      <div className='posts'>
        {this.posts()} 
      </div>
    );
  }
}


function mapStateToProps(state) {
  const posts = reducers.getPosts(state);
  console.log(posts);
  return posts;
}

export default connect(mapStateToProps)(Posts);
