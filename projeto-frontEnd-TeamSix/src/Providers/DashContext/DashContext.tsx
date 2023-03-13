import { createContext, useEffect, useState } from 'react';
import { api } from '../../API';
import { IComments, IPosts } from '../../types/type';
import { IDashPosts, IDashProvider, IDashProviderProps, IFilm } from './type';

const DashContext = createContext<IDashProvider | null>(null);

const DashProvider = ({ children }: IDashProviderProps) => {
  const [posts, setPosts] = useState<IDashPosts[]>([] as IDashPosts[]);
  const [newPost, setNewPost] = useState<IPosts>({} as IPosts);
  const [film, setFilm] = useState<IFilm>({} as IFilm);
  const token = localStorage.getItem('@TOKEN');

  const getFilm = async () => {
    try {
      const response = await api<IFilm>('/films/1');

      setFilm(response.data);
    } catch (error) {
      console.error;
    }
  };

  useEffect(() => {
    getFilm();
  });

  const getPosts = async () => {
    try {
      const response = await api.get<IDashPosts[]>(
        '/posts?filmsId=1&_expand=user&_embed=likePost',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPosts();
  });

  const addPost = async (data: IPosts) => {
    const newData = {
      title: data.title,
      discription: data.description,
      userId: data.userId,
      filmId: data.filmId,
    };

    try {
      const response = await api.post<IPosts>('/posts', newData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DashContext.Provider value={{ posts, film, addPost }}>
      {children}
    </DashContext.Provider>
  );
};
