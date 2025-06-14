import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'click to visit google'
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <App />
    {reactElement}
    </>
);


