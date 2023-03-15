import { createContext, useState } from 'react';
import { api } from '../../API';
import { IPosts, IUser } from '../../types/type';
import { IDiscussionProvider, IDiscussionProviderProps } from './type';

export const DiscussionContext = createContext<IDiscussionProvider>(
  {} as IDiscussionProvider
);

export const DiscussionProvider = ({ children }: IDiscussionProviderProps) => {
  const [post, setPost] = useState<IPosts>({} as IPosts);

  const token = localStorage.getItem('@TOKEN');

  const getPost = async (id: number) => {
    try {
      const response = await api.get<IPosts>(
        `/posts/${id}?_embed=comments&_embed=likePost`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPost(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DiscussionContext.Provider value={{ post, setPost, getPost }}>
      {children}
    </DiscussionContext.Provider>
  );
};
