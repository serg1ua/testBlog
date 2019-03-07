import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import autoBind from 'react-autobind';

import './controllers.css';

import * as reducer from '../store/reducer/actions';

import Appbar from '../components/appBar';

class NewPost extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: ''
    };
    autoBind(this);
  }

  submitPost = (event) => {
    event.preventDefault();
    const title = this.state.title;
    const body = this.state.body;
    this.props.dispatch(reducer.submitNewPost(title, body));
    window.location.pathname = '/';
  }

  postData = (event) => {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: target.value
    });
  }


  render() {
    return (
      <div className="new-post">
        <Appbar />
          <div>
          <Card className="card">
            <CardHeader className="cardHeader" title="New post"/>
            <CardContent>
              <form className="form" onSubmit={this.submitPost} autoComplete="off">
                <div>
                  <TextField 
                    style={{width: '80%'}}
                    label="Post title"
                    className="title"
                    multiline
                    rowsMax="4"
                    margin="normal"
                    name="title"
                    value={this.state.title}
                    onChange={this.postData}
                    required
                  />
                </div>
                <div>
                  <TextField
                    style={{width: '80%'}}
                    label="Post body"
                    className="body"
                    multiline
                    rowsMax="10"
                    margin="normal"
                    name="body"
                    value={this.state.body}
                    onChange={this.postData}
                    required
                  />
                </div>
                  <Button
                    className="submit-button"
                    type="submit"
                    size="medium"
                    variant="contained"
                  >
                    Submit
                  </Button>
              </form>
            </CardContent>  
          </Card>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps)(NewPost);
