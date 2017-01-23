import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import about from './pages/about/about-reducer';
import messages from './pages/messages/messages-reducer';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

export default function createAppStore() {
  const store = createStore(combineReducers({
    about,
    messages,
  }),
    applyMiddleware(sagaMiddleware),
  );
  sagaMiddleware.run(sagas);

  return store;
}

