import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <App
    url={window.centova}
    refresh_in_seconds={15}
  />,
  document.getElementById('centova-on-air')
);
registerServiceWorker();
