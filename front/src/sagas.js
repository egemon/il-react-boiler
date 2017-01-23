import { call, put, takeLatest } from 'redux-saga/effects';
import Api from './api';

// worker Saga: will be fired on MESSAGES_FETCH_REQUESTED actions
function* fetchMessage(/* action */) {
  try {
    const messages = yield call(Api.fetchMessages);
    const messages2 = yield messages.json();
    yield put({ type: 'MESSAGES_FETCH_SUCCEEDED', payload: { messages: messages2 } });
  } catch (e) {
    yield put({ type: 'MESSAGES_FETCH_FAILED', message: e.message });
  }
}

/*
  Starts fetchUser on each dispatched `MESSAGES_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// function* mySaga() {
//   yield takeEvery('MESSAGES_FETCH_REQUESTED', fetchUser);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If 'MESSAGES_FETCH_REQUESTED' gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  yield takeLatest('MESSAGES_FETCH_REQUESTED', fetchMessage);
}

export default mySaga;
