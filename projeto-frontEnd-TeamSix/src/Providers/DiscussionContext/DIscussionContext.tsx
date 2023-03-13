import { createContext, useContext } from 'react';
import { api } from '../../API';
import { IPosts } from '../../types/type';

const DiscussionContext = createContext({});
/* 
const DiscussionProvider = () => {
  const [ṕost, setPost] = useContext<IPosts>({} as IPosts);
  const token = localStorage.getItem('@TOKEN');

  const GetPost = async () => {
    try {
      const response = await api.get<IPosts>('', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return <DiscussionContext.Provider value={}></DiscussionContext.Provider>;
}; */
