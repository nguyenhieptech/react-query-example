import React from 'react';
import ReactDOM from 'react-dom';
import { ReactRouterProvider } from './providers/ReactRouterProvider';
import { ReactQueryProvider } from './providers/ReactQueryProvider';
import { AppContextProvider } from './providers/AppContextProvider';
import App from './App';
import 'virtual:windi.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ReactRouterProvider>
      <ReactQueryProvider>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </ReactQueryProvider>
    </ReactRouterProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
