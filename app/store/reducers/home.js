import * as types from 'actionTypes';

export default function todos(state = { text: '' }, action) {
  switch (action.type) {
    case types.HOME_TXT:
      return Object.assign({}, state, { text: action.text });
    case types.HOME_REQ:
      return Object.assign({}, state, { img: action.img });
    default:
      return state;
  }
}
