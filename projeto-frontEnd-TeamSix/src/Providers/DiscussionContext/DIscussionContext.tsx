import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../API';
import { IPosts } from '../../types/type';
import { IDiscussionProvider, IDiscussionProviderProps } from './type';

export const DiscussionContext = createContext<IDiscussionProvider>({} as IDiscussionProvider);

export const DiscussionProvider = ({children}: IDiscussionProviderProps) => {
  const [post, setPost] = useState<IPosts>({} as IPosts);
  const token = localStorage.getItem('@TOKEN');
  const navigate = useNavigate()

  const getPost = async (id:number) => {
    try {
      const response = await api.get<IPosts>(`/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data)
      setPost(response.data)
      navigate("/home/discussion/:id:")
    } catch (error) {
      console.error(error);
    }
  };
// useEffect(()=>{
//   getPost()
// },[])
  return (
    <DiscussionContext.Provider value={{post, setPost, getPost}}>
      {children}
    </DiscussionContext.Provider>
  );
};
