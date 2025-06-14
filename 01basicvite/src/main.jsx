import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Youtube from './Youtube.jsx';

// const reactElement = React.createElement(
//   'a',
//   { href: 'https://google.com', target: '_blank' },
//   'click to visit google'
// );
const reactElement = (
  <a href="https://aditya.techboy.in" target="_blank">
    Click me to visit aditya portfolio
  </a>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {reactElement}
  </StrictMode>
);
