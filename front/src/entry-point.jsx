import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import Root from './pages/root/root';

import createAppStore from './store-creator';

ReactDOM.render(
  <Provider store={createAppStore()}>
    <Root />
  </Provider>,
  document.getElementById('react-root'),
);
