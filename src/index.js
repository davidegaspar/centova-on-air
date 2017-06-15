import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <App
    url={window.centova.url}
    refresh_in_seconds={window.centova.refresh_in_seconds}
    onair_true_img={window.centova.onair_true_img}
    onair_false_img={window.centova.onair_false_img}
    img_folder={window.centova.img_folder}
  />,
  document.getElementById('centova-on-air')
);
registerServiceWorker();
