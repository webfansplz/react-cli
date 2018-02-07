import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './index.css';
import './App.css';
import Index from './page';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Index />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
