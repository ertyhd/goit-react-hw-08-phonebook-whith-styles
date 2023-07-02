import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

document.addEventListener('mousemove', e => {
  Object.assign(document.documentElement, {
    style: `
    --rotate-x: ${(e.clientX - window.innerWidth / 2) * -0.0005}deg;
    --rotate-y: ${(e.clientY - window.innerHeight / 2) * -0.001}deg;
    --move-x: ${(e.clientX - window.innerWidth / 2) * -0.005}vw;
    --move-y: ${(e.clientY - window.innerWidth / 2) * -0.2}vw;`,
  });
});

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
