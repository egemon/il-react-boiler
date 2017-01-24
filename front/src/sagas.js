import { call, put, takeLatest } from 'redux-saga/effects';
import Api from './api';
import { fetchMessagesActionFail, fetchMessagesActionOk } from './async-action-creators';

function* fetchMessage(/* action */) {
  try {
    const messages = yield call(Api.fetchMessages);
    const messages2 = yield messages.json();
    yield put(fetchMessagesActionOk(messages2));
  } catch (error) {
    yield put(fetchMessagesActionFail(error));
  }
}


function* mySaga() {
  yield takeLatest('MESSAGES_FETCH_REQUESTED', fetchMessage);
}

export default mySaga;
