import React from 'react';
import { Navigate } from 'react-router-dom';
import { RoutesPages } from './routes';

export const App = () => {
  return (
    <div className="App">
    <RoutesPages/>
      {/* <Navigate to="/login" /> */}
    </div>
  );
};
