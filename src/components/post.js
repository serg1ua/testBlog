import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Post extends React.Component {

  render() {
    const { id, title, body } = this.props.post;
    const link = `/posts/${id}`;
    return (
      <Card className="card">
        <CardContent>
          <Typography variant="h6">
            {title}
          </Typography>
          <hr/>
          <Typography  component="p">
            {body}
          </Typography>
          <hr/>
        </CardContent>
        <CardActions>
          <Link
            to={link}
            style={{textDecoration: 'none'}}
          >
            <Button
              className="submit-button"
              size="medium"
            >
              See more
            </Button>
          </Link>
        </CardActions>
      </Card>
    );
  }
}

export default Post;
