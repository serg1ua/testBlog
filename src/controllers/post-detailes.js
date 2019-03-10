import React from 'react';
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import autoBind from 'react-autobind';

import * as actions from '../store/reducer/actions';
import * as reducers from '../store/reducer/reducer';

import Appbar from '../components/appBar';

class PostDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      postId: 1,
      comment: ''
    });

    autoBind(this);
  }
  componentDidMount() {
    const { url } = this.props.match;
    const id = url.replace('/posts/', '');
    this.props.dispatch(actions.getPostById(id));
  }

  handleChange = (event) => {
    this.setState({
      comment: event.target.value
    });
  }

  submit = (event) => {
    event.preventDefault();
    const postId = this.state.postId;
    const body = this.state.comment;
    this.setState({
      comment: ''
    });
    this.props.dispatch(actions.submitComment(postId, body));
  }

  render() {
    const { post, comment } = this.props;
    return (
      <div className="post-detailes">
        <Appbar />
        <Card className="card">
          <CardContent style={{margin: 'auto'}}>
            <Typography variant="h6" component="p" >
              {post.title}
            </Typography>
            <hr />
            <Typography component="p" >
              {post.body}
            </Typography>
            <hr />
            <h4>Comments:</h4>
            {comment ? 
              (<Typography component="p">
                {comment.body}
              </Typography>) :
              (<div></div>)
            }
            <form
              onSubmit={this.submit}
              className="form"
              autoComplete="off"
            >
              <div>
                <TextField
                  id="standard-name"
                  label="Leave a comment"
                  className="input"
                  value={this.state.comment}
                  onChange={this.handleChange}
                  margin="normal"
                />
              </div>
              <Button
                className="submit-button"
                type = "submit"
                size = "small"
              >
                submit comment
              </Button> 
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const detailed = reducers.getPostById(state);
  return detailed;
}
export default connect(mapStateToProps)(PostDetails);
