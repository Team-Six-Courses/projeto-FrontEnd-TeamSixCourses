import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { IProfileProps, IProfileProvider, IUser } from './type';

export const ProfileContext = createContext<IProfileProvider>({} as IProfileProvider);

export const ProfileProvider = ({ children }: IProfileProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);

  useEffect(() => {
    const getUser = async () => {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZpbmljaXVzQG1haWwuY29tIiwiaWF0IjoxNjc4MzY3MzkyLCJleHAiOjE2NzgzNzA5OTIsInN1YiI6IjEifQ.IfZP2Jw-b5bgEuWJcTPEm4q17rR4GffK4zB4UWlyIxE" // localStorage.getItem('@TOKEN');

      try {
        const response = await axios.get<IUser>(
          '/users/id?_embed=posts&_embed=likePost&_embed=likeComment',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUser(response.data);
        console.log(response.data)
      } catch (error) {
        console.error();
      }
    };
    getUser()
  }, []);

  return (
    <ProfileContext.Provider value={{ user }}>
      {children}
    </ProfileContext.Provider>
  );
};
