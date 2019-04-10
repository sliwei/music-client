import 'babel-polyfill'

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Index from './components/index'
import store from './store'

let indexLoading = document.querySelector('.indexLoading');
indexLoading.style.opacity = 0;
setTimeout(() => {
  indexLoading.style.display = 'none';
}, 300);

ReactDOM.render(
  <Provider store={store}>
    <Index/>
  </Provider>, document.getElementById("app")
);
