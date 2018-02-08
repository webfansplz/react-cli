import * as types from 'actionTypes';
import { reqfn } from 'services/home';

export function home_txt(text) {
  return {
    type: types.HOME_TXT,
    text
  };
}

export function home_req() {
  return async function(dispatch) {
    let res = await reqfn();
    dispatch({ type: types.HOME_REQ, img: res });
  };
}
