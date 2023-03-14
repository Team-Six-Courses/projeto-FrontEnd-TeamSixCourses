import { createContext, useEffect, useState } from 'react';
import { api } from '../../API';
import { IComments, IPosts } from '../../types/type';
import { IDashPosts, IDashProvider, IDashProviderProps, IFilm } from './type';

export const DashContext = createContext<IDashProvider>({} as IDashProvider);

export const DashProvider = ({ children }: IDashProviderProps) => {
  const [posts, setPosts] = useState<IDashPosts[]>([] as IDashPosts[]);
  const [newPost, setNewPost] = useState<IPosts>({} as IPosts);
  const [film, setFilm] = useState<IFilm>({} as IFilm);
  const token = localStorage.getItem('@TOKEN');

  const getFilm = async () => {
    try {
      const response = await api<IFilm>('/films/1');
      setFilm(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPosts();
    getFilm();
  }, []);

  const getPosts = async () => {
    try {
      const response = await api.get<IDashPosts[]>(
        '/posts?filmsId=1&_expands=user&_embed=likePost',
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

  const addPost = async (data: IPosts) => {
    const id = localStorage.getItem('@USERID')
    
    const newData = {
      title: data.title,
      description: data.description,
      userId: Number(id),
      filmId: data.filmId,
    };

    try {
     await api.post<IPosts>('/posts', newData,{
        headers:{
          Authorization: `Bearer ${token}`,
        },
      });
      getPosts()
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DashContext.Provider value={{ posts, film, addPost}}>
      {children}
    </DashContext.Provider>
  );
};
