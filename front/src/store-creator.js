import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import about from './pages/about/about-reducer';
import messages from './pages/messages/messages-reducer';
import sagas from './sagas';
import { saveState, loadState } from './localStorage';

const sagaMiddleware = createSagaMiddleware();
export default function createAppStore() {
  const store = createStore(combineReducers({
    about,
    messages,
  }),
    loadState(),
    applyMiddleware(sagaMiddleware),
  );
  sagaMiddleware.run(sagas);

  store.subscribe(() => {
    saveState(store.getState());
  });

  return store;
}

