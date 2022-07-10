import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App/App.jsx'; 

const rootContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(rootContainer);
root.render(< App />);