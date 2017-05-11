import { CHANGE_LOGIN, CHANGE_PASS } from '../actions/login';

export default function (state = { login: '', pass: '' }, { type, payload }) {
  switch (type) {
    case CHANGE_LOGIN:
    case CHANGE_PASS:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
}
export const login = state => state.login;
export const pass = state => state.pass;
