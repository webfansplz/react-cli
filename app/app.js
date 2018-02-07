import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import data from './store/reducers';
import logo from './logo.svg';
import './index.css';
import './App.css';
import Index from './page';
const store = createStore(data);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <img src={logo} className="App-logo" />
          <Index />
        </div>
      </Provider>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
