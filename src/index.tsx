import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './app.less';

if (module && module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App name='vortesnail' age={25} />, document.querySelector('#root'));
