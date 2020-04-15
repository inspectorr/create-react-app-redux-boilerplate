import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './_helpers';
import * as serviceWorker from './serviceWorker';
import { App } from './App';
import './index.css';

// dev:
// setup fake backend
import { configureFakeBackend } from './_helpers';
configureFakeBackend();

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
