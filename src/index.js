import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ASApp from './ASApp';
import './index.less';
import 'antd/dist/antd.less';

ReactDOM.render(
  <React.StrictMode>
    <ASApp />
  </React.StrictMode>,
  document.getElementById('root')
);