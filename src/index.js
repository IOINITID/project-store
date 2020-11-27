import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/index.js';
import {Provider} from 'react-redux';
import App from './components/app/app.jsx';

store.subscribe(() => {
  window.localStorage.setItem(`productsData`, JSON.stringify(store.getState().productsData));
});

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<Root/>, document.querySelector(`.root`));
