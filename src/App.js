import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <p className="App-intro">
          <a data-tip data-for='tooltip-1' data-event='click'>Click me first: ( •̀д•́)</a>
          <ReactTooltip id='tooltip-1' place="right" globalEventOff='click' isCapture="true">tooltip content</ReactTooltip>
        </p>

        <p className="App-intro">
          <a data-tip data-for='tooltip-2' data-event='click'>Click me second: ( •̀д•́)</a>
          <ReactTooltip id='tooltip-2' place="right" globalEventOff='click' isCapture="true">tooltip content</ReactTooltip>
        </p>

        <p className="App-intro">
          <a data-tip data-for='tooltip-3' data-event='click'>Click me third: ( •̀д•́)</a>
          <ReactTooltip id='tooltip-3' place="right" globalEventOff='click' isCapture="true">tooltip content</ReactTooltip>
        </p>

      </div>
    );
  }
}

export default App;
