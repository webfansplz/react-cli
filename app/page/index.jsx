import React, { Component } from 'react';
import routes from '../routes';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';

class Index extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <img src={logo} className="App-logo" />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          {routes.map((v, i) => (
            <Route path={v.path} component={v.component} key={i} />
          ))}
        </div>
      </Router>
    );
  }
}
export default Index;
