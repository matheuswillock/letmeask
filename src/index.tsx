// Import Default
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// databse
import './services/firebase';
// Scss - Global
import './styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

