export const CHANGE_LOGIN = 'CHANGE_LOGIN';
export const changeLogin = login => ({
  type: CHANGE_LOGIN,
  payload: {
    login,
  },
});

export const CHANGE_PASS = 'CHANGE_PASS';
export const changePass = pass => ({
  type: 'CHANGE_PASS',
  payload: {
    pass,
  },
});
