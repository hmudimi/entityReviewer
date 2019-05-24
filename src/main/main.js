import React, { Component } from 'react';
import './Main.css';
import MainBanner from './mainBanner';
import MainBottom from './mainBottom';

class Main extends Component {
    render() {
      return (
        <div className="main">
          <MainBanner />
          <MainBottom />
        </div>
      );
    }
  }
  
  export default Main;