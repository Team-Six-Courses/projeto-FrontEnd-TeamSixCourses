import React from 'react';
import { Header } from '../component/Header';

export const LoginPage = () => {
  console.log('Login')
  localStorage.setItem("@TOKEN")
  return <div>
        <Header background='rgba(116, 158, 169, 0.38)'/>
            Login
          </div>;
};
