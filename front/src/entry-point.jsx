import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';

import AppRouter from './pages/router';
import createAppStore from './store-creator';

ReactDOM.render(
  <Provider store={createAppStore()}>
    <AppRouter/>
  </Provider>,
  document.getElementById('react-root')
);