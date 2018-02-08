import React, { Component } from 'react';
import { connect } from 'react-redux';
import { home_txt, home_req } from 'actions/home';

@connect(({ home: { text, img } }) => ({ text, img }))
class home extends Component {
  componentWillMount() {
    this.props.dispatch(home_txt('welcome to home pages'));
    // this.props.dispatch(home_req());
  }
  render() {
    return (
      <div>
        <span>{this.props.text}</span>
      </div>
    );
  }
}
export default home;
