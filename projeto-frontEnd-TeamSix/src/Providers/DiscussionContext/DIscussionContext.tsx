import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../API';
import { IPosts } from '../../types/type';
import { IDiscussionProvider, IDiscussionProviderProps } from './type';

export const DiscussionContext = createContext<IDiscussionProvider>(
  {} as IDiscussionProvider
);

export const DiscussionProvider = ({ children }: IDiscussionProviderProps) => {
  const [post, setPost] = useState<IPosts>({} as IPosts);
  const [imgPost, setImgPost] = useState<string | undefined>('' as string);
  const [postId, setPostId] = useState<number>(0);
  const navigate = useNavigate()
  const token = localStorage.getItem('@TOKEN');

  const getPost = async (id: number, img?: string | undefined) => {
    setPostId(id);
    try {
      const response = await api.get<IPosts>(
        `/posts/${id}?_embed=comments&_embed=likePost`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response)
      setImgPost(img);
      setPost(response.data);
      // navigate(`/home/discussion/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   getPost(postId);
  // }, []);

  return (
    <DiscussionContext.Provider value={{ post, setPost, getPost, imgPost }}>
      {children}
    </DiscussionContext.Provider>
  );
};
