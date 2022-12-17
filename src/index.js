import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import {UnderConstruction} from "./components"

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <UnderConstruction /> */}
  </React.StrictMode>,
  document.getElementById('root')
);