import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const weight = 100;

function reducer(state = weight, action) {
  if (action.type === '증가') {
    state += 1;
    return state;
  } else if (action.type === '감소') {
    state -= 1;
    return state;
  } else {
    return state;
  }
}

let store =
  createStore(
    reducer
  ); /* 호이스팅 발생을 대비해서 함수 선언 후 불러온다.(reducer) */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
