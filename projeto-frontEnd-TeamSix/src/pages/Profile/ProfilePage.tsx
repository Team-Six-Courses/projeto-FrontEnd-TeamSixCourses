import React, { useContext } from 'react';
import { ProfileContext } from '../../Providers/ProfileContext/ProfileContext';

export const ProfilePage = () => {
  const { user, activities } = useContext(ProfileContext)

  console.log(activities)

  return (
    <>
    <header>Profile</header>
    <main>
      <section className='accontActivities'></section>
      <section className='informations'></section>
    </main>
    </>
  );
};
