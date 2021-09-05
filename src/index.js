import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '@src/store/reducer/appReducer';
import App from './App.tsx';

const store = createStore(rootReducer, applyMiddleware(thunk));

const rootElement = document.getElementById('root');

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement,
);
