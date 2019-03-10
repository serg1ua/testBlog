import React from 'react';
import './App.css';

import Appbar from '../components/appBar';
import Posts from '../controllers/posts';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Appbar />
        <Posts />
      </div>
    );
  }
}

export default App;
