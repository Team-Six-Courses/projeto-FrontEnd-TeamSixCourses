import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StyledReset } from './GlobalStyle/reset';
import { App } from './App';
import { UserProvider } from './Providers/userContext/userContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <StyledReset />
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
