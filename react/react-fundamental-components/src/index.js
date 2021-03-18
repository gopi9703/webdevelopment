import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import UseMemoDemo from './useMemo';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<UseMemoDemo />, document.getElementById('root'));
registerServiceWorker();
