import React, { Component } from 'react';
import './App.css';
import Side from './side/side';
import Main from './main/main';
// import history from 'History'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Side />
        <Main />
      </div>
    );
  }
}

export default App;
