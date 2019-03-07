import React from 'react';
import { connect } from 'react-redux';
import autoBind from 'react-autobind';

import Post from '../components/post';

import * as reducer from '../store/reducer/actions';

class Posts extends React.Component {

  constructor(props) {
    super(props);
    autoBind(this);
  }

  componentDidMount() {
    this.props.dispatch(reducer.getPosts());
  }

  posts = () => {
    const { posts } = this.props.reducer;
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
  return state;
}

export default connect(mapStateToProps)(Posts);
