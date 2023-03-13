import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { App } from '../App';
import { DashboardPage } from '../pages/DashboardPage/DashboardPage';
import { DiscussionPage } from '../pages/DiscussionPage';
import { LoginPage } from '../pages/Login/LoginPage';
import { NotFoundPage } from '../pages/NotFound/NotFound404Page';
import { ProfilePage } from '../pages/Profile/ProfilePage';
import { ProtectRoute } from '../pages/ProtectRoute/ProtectRoute';
import { RegisterPage } from '../pages/Register/RegisterPage';
import { DashProvider } from '../Providers/DashContext/DashContext';
import { ProfileProvider } from '../Providers/ProfileContext/ProfileContext';

export const RoutesPages = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/cadastro" element={<RegisterPage />} />
      <Route path="/home" element={<ProtectRoute />}>
        <Route index element={
          <DashProvider>
            <DashboardPage />
          </DashProvider>
        } />
        <Route
          path="/home/perfil"
          element={
            <ProfileProvider>
              <ProfilePage />
            </ProfileProvider>
          }
        />
      </Route>
      <Route path="home/discussion/:id:" element={<DiscussionPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
