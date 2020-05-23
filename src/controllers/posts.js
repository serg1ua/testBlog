import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/reducer/actions';
import * as reducers from '../store/reducer/reducer';

import Post from '../components/post';

class Posts extends React.Component {

  componentDidMount() {
    this.props.dispatch(actions.getPosts());
  }

  posts() {
    const { posts } = this.props;
    console.log(posts);
    return posts ? posts.map(post => (
      <Post post={post} key={post.id} />
    )) : <div></div>;
  }

  render() {
    return (
      <div className='posts'>
        {this.posts()}
      </div>
    );
  }
}

const mapStateToProps = (state) => reducers.getPosts(state);

export default connect(mapStateToProps)(Posts);
