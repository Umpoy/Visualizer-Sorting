import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Nav/Nav';
import Main from './Graph/Graph';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="app">
        <Header />
        <Main />
      </div>
    )
  }
}

export default App;
