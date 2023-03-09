import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { App } from '../App';
import { DashboardPage } from '../pages/DashboardPage';
import { DiscussionPage } from '../pages/DiscussionPage';
import { LoginPage } from '../pages/LoginPage';
import { NotFoundPage } from '../pages/NotFound404Page';
import { ProfilePage } from '../pages/ProfilePage';
import { RegisterPage } from '../pages/Register/RegisterPage';

export const routes = () => {
  return (
    <Routes>
      <Route path='/cadastro' element={<RegisterPage />} /> 
      <Route path='/' element={<App />} >
        <Route index element={<LoginPage />} />
      </Route>
      <Route path='/home'>
        <Route index element={<DashboardPage />} />
        <Route path='/perfil' element={<ProfilePage />} />
        <Route path='/discussão' element={<DiscussionPage />} />
      </Route>
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};
