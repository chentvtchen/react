import React from 'react';
import ReactDOM from 'react-dom';
import ControlPanel from './ControlPanel';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <ControlPanel/>,
    document.getElementById('root')
  );
registerServiceWorker();
