import React, { useContext, useEffect, useState } from 'react';
import { api } from '../../API';
import { Card } from '../../component/Cards';
import { ProfileContext } from '../../Providers/ProfileContext/ProfileContext';
import { IUser } from '../../Providers/ProfileContext/type';

export const ProfilePage = () => {
  const { user, activities, token } = useContext(ProfileContext);
  const [allUser, setAllUser] = useState<IUser[]>([]);

  const getUsers = async () => {
    try {
      const response = await api.get<IUser[]>('/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAllUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const filterAvatarUser = (post) => {
    allUser.map((user) => {
      if (post.userId === user.id) {
        return user.avatar;
      }
    });
  };

  return (
    <>
      <header>Profile</header>
      <main>
        <section className="accontActivities">
          <ul>
            {activities.map((post) => {
              return (
                <Card
                  key={post.id}
                  title={post.title}
                  descrition={post.description}
                  img={''}
                />
              );
            })}
          </ul>
        </section>
        <section className="informations">
          <div>Informações</div>
          <div>
            <img src="" alt="" />
            <div>
              <h4>{user.name.toUpperCase()}</h4>
              <p>{user.email}</p>
            </div>
          </div>
          <div>
            <p>Teorias: {/* user.posts.length */}</p>
            <p>Curtidas em teorias: {/* user.likePost.length */}</p>
          </div>
        </section>
      </main>
    </>
  );
};
