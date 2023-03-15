import { createContext, useState } from 'react';
import { api } from '../../API';
import { IPosts } from '../../types/type';
import { IDiscussionProvider, IDiscussionProviderProps } from './type';

export const DiscussionContext = createContext<IDiscussionProvider>(
  {} as IDiscussionProvider
);

export const DiscussionProvider = ({ children }: IDiscussionProviderProps) => {
  const [post, setPost] = useState<IPosts>({} as IPosts);
  const [imgPost, setImgPost] = useState<string | undefined>('' as string);

  const token = localStorage.getItem('@TOKEN');

  const getPost = async (id: number, img?: string | undefined) => {
    try {
      const response = await api.get<IPosts>(
        `/posts/${id}?_embed=comments&_embed=likePost`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      setImgPost(img);
      setPost(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DiscussionContext.Provider value={{ post, setPost, getPost, imgPost }}>
      {children}
    </DiscussionContext.Provider>
  );
};
