import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <App
    url="http://178.32.239.25:2199/rpc/dagaspar/streaminfo.get"
    onair="onair.png"
    offair="offair.png"
  />,
  document.getElementById('centova-on-air')
);
registerServiceWorker();
