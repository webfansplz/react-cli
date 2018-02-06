import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './index.css';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <img className="App-logo" src={logo} alt="logo" />
        <h1>Welcome to React-cli!</h1>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
