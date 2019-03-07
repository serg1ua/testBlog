import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Appbar extends React.Component {

  render() {
    return (
      <div className='appbar'>
      <AppBar 
        position="static"
        color="default"
      >
        <Toolbar>
          <Typography
            variant="h6"
            color="inherit"
          >
            <Link
              style={{textDecoration: 'none', color: 'black'}}
              title="see all posts"
              to="/"
            >
              Test Blog
            </Link>
          </Typography>
          <h4 style={{marginLeft: '20px'}}>
            <Link
              style={{textDecoration: 'none', color: 'black'}}
              title="see all posts"
              to="/new"
            >
              New post
            </Link>
          </h4>
        </Toolbar>
      </AppBar>
    </div>
    );
  }
}

export default Appbar;
