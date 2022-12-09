import dayjs from 'dayjs';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
dayjs.locale('ru')

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);
