import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';

import sagas from './sagas';
// import { saveState, loadState } from './localStorage';

const sagaMiddleware = createSagaMiddleware();
export default function createAppStore() {
  const store = createStore(rootReducer,
    // loadState(),
    applyMiddleware(sagaMiddleware),
  );
  sagaMiddleware.run(sagas);

  // store.subscribe(() => {
  //   saveState(store.getState());
  // });

  return store;
}

