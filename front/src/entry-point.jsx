import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';

import AppRouter from './pages/router';
import createAppStore from './rootReducer';

ReactDOM.render(
  <Provider store={createAppStore()}>
    <AppRouter/>
  </Provider>,
  document.getElementById('react-root')
);