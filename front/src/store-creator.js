import { createStore, applyMiddleware } from 'redux';
import createSaga from 'redux-saga';
import createLogger from 'redux-logger';
import rootReducer from './reducers/root-reducer';
import sagas from './sagas';


// import { saveState, loadState } from './localStorage';

export default function createAppStore() {
  const middlewares = [];
  const sagaMiddleware = createSaga();
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }
  middlewares.push(sagaMiddleware);

  const store = createStore(rootReducer,
    // loadState(),
    applyMiddleware(...middlewares),
  );

  sagaMiddleware.run(sagas);


  // store.subscribe(() => {
  //   saveState(store.getState());
  // });

  return store;
}

