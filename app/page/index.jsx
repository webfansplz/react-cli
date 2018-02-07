import React, { Component } from 'react';
import routes from '../routes';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
class Index extends Component {
  render() {
    return (
      <Router>
        <div>
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
