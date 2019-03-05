import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import eventSearchReducer from './reducers/eventSearch'
import middlewareLogger from './middleware/middleware-logger';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './App';

const store = createStore(eventSearchReducer, applyMiddleware(middlewareLogger, thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
