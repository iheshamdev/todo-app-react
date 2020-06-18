import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import configuerStore from './store/configureStore';
import { Provider } from 'react-redux';

const store = configuerStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
